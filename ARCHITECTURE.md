# ruankao-agent 架构设计文档

## 流程对比：修复前 vs 修复后

### ❌ 修复前的问题流程

```
/generate 命令
    │
    ├─→ mcq-agent → mcq_questions.json (含答案！)
    ├─→ essay-agent → essay_questions.json (含答案！)
    ├─→ paper-agent → paper_question.json (含评分标准！)
    └─→ assemble-agent → index.html (答案可能嵌入！)

/grade 命令
    │
    └─→ 直接读取含答案的文件评分

🐛 问题:
1. 答案与试题混合存储，容易泄露
2. HTML 可能嵌入答案，考生可查看源码
3. 缺少试卷版本绑定，可能错配
4. 评分时缺少上下文验证
```

### ✅ 修复后的安全流程

```
/generate 命令
    │
    ├─→ mcq-agent ──┬─→ mcq_questions.json (无答案，考生可见)
    │               └─→ mcq_answers.json (保密！)
    │
    ├─→ essay-agent ─┬─→ essay_questions.json (无答案，考生可见)
    │                └─→ essay_scoring_guide.json (保密！)
    │
    ├─→ paper-agent ─┬─→ paper_question.json (无评分标准，考生可见)
    │                └─→ paper_scoring_guide.json (保密！)
    │
    └─→ assemble-agent ─┬─→ index.html (考生答题界面)
                        ├─→ exam_manifest.json (元数据绑定)
                        └─→ exam_context_pack.json (评分上下文包)

/grade 命令
    │
    ├─→ 1. 验证 exam_id 一致性
    ├─→ 2. 加载 exam_context_pack.json
    ├─→ 3. 读取 answers.json (考生作答)
    └─→ 4. 评分 → score_report.json/html

✅ 改进:
1. 试题与答案完全分离
2. HTML 不嵌入任何答案
3. Manifest 绑定防止错配
4. 评分上下文独立打包
```

## 文件分类

### 📄 考生可见文件（可分发）

| 文件 | 内容 | 安全级别 |
|-----|------|---------|
| `index.html` | 答题界面 | 公开 |
| `mcq_questions.json` | 选择题试题 | 公开 |
| `essay_questions.json` | 问答题试题 | 公开 |
| `paper_question.json` | 论文题试题 | 公开 |
| `exam_manifest.json` | 元数据绑定 | 公开 |

### 🔒 保密文件（评分时使用）

| 文件 | 内容 | 安全级别 |
|-----|------|---------|
| `mcq_answers.json` | 选择题答案 + 解析 | 保密 |
| `essay_scoring_guide.json` | 问答题评分标准 | 保密 |
| `paper_scoring_guide.json` | 论文题评分标准 | 保密 |
| `exam_context_pack.json` | 完整评分上下文 | 机密 |

## 数据流

### 生成阶段

```
┌─────────────────────────────────────────────────────────────┐
│                     /generate 命令                          │
└─────────────────────────────────────────────────────────────┘
                              │
    ┌─────────────────────────┼─────────────────────────┐
    │                         │                         │
    ▼                         ▼                         ▼
┌─────────┐            ┌─────────┐              ┌─────────┐
│ mcq     │            │ essay   │              │ paper   │
│ agent   │            │ agent   │              │ agent   │
└────┬────┘            └────┬────┘              └────┬────┘
     │                      │                        │
     ▼                      ▼                        ▼
┌─────────┐            ┌─────────┐            ┌─────────┐
│ questions│           │ questions│           │ question│
│ (公开)  │           │ (公开)  │           │ (公开)  │
└─────────┘            └─────────┘            └─────────┘
     │                      │                        │
     ▼                      ▼                        ▼
┌─────────┐            ┌─────────┐            ┌─────────┐
│ answers │            │ scoring │            │ scoring │
│ (保密)  │            │ (保密)  │            │ (保密)  │
└─────────┘            └─────────┘            └─────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ assemble-agent  │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
         ▼                   ▼                   ▼
   ┌───────────┐      ┌───────────┐      ┌───────────┐
   │ index.html│      │ manifest  │      │ context   │
   │ (公开)    │      │ (公开)    │      │ pack(保密)│
   └───────────┘      └───────────┘      └───────────┘
```

### 评分阶段

```
┌─────────────────────────────────────────────────────────────┐
│                      /grade 命令                            │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ 1. 验证输入文件  │
                    │ - answers.json  │
                    │ - manifest.json │
                    │ - context_pack  │
                    └────────┬────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ 2. 校验 exam_id │
                    │ (防止试卷错配)  │
                    └────────┬────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │ 3. 加载上下文包 │
                    │ (答案 + 评分标准)│
                    └────────┬────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
   ┌─────────┐          ┌─────────┐          ┌─────────┐
   │ MCQ 判分│          │  Essay   │          │ Paper  │
   │ (1 分/题)│          │ (要点式) │          │ (六维度)│
   └────┬────┘          └────┬────┘          └────┬────┘
        │                    │                    │
        └────────────────────┼────────────────────┘
                             ▼
                    ┌─────────────────┐
                    │  生成评分报告   │
                    │ - score_report.json │
                    │ - score_report.html │
                    └─────────────────┘
```

## exam_manifest.json 结构

```json
{
  "exam_id": "ruankao_20260329_001",
  "generated_at": "2026-03-29T10:00:00Z",
  "exam_type": "系统架构设计师",
  "version": "1.0",
  "files": {
    "mcq_questions": {
      "file": "mcq_questions.json",
      "hash": "sha256:abc123..."
    },
    "essay_questions": {
      "file": "essay_questions.json",
      "hash": "sha256:def456..."
    },
    "paper_question": {
      "file": "paper_question.json",
      "hash": "sha256:ghi789..."
    }
  },
  "answer_files": {
    "mcq_answers": {
      "file": "mcq_answers.json",
      "hash": "sha256:jkl012..."
    },
    "essay_scoring_guide": {
      "file": "essay_scoring_guide.json",
      "hash": "sha256:mno345..."
    },
    "paper_scoring_guide": {
      "file": "paper_scoring_guide.json",
      "hash": "sha256:pqr678..."
    }
  },
  "total_scores": {
    "mcq": 75,
    "essay": 75,
    "paper": 75,
    "total": 225
  }
}
```

## exam_context_pack.json 结构

```json
{
  "exam_id": "ruankao_20260329_001",
  "created_at": "2026-03-29T10:00:00Z",
  "parts": {
    "mcq": {
      "questions": [...],
      "answers": [
        {"id": 1, "correct_answer": "A", "analysis": "解析..."}
      ]
    },
    "essay": {
      "questions": [...],
      "scoring_guide": [...]
    },
    "paper": {
      "question": {...},
      "scoring_guide": {...}
    }
  }
}
```

## 安全评分标准

评分命令运行时，会执行以下安全检查：

```javascript
// 伪代码示例
function grade(answersFile) {
    // 1. 检查必需文件
    assertExists('exam_manifest.json');
    assertExists('exam_context_pack.json');
    assertExists(answersFile);

    // 2. 验证 exam_id 一致性
    const manifest = loadManifest();
    const context = loadContext();
    const answers = loadAnswers();

    if (manifest.exam_id !== context.exam_id) {
        throw Error('试卷版本不匹配！请重新生成或重新答题。');
    }

    if (answers.exam_id !== manifest.exam_id) {
        throw Error('作答文件与试卷不匹配！请确认导出的是当前试卷的作答。');
    }

    // 3. 可选：验证文件哈希
    // if (!verifyHash('mcq_questions.json', manifest.files.mcq_questions.hash)) {
    //     throw Error('试题文件已被修改！');
    // }

    // 4. 执行评分
    return performGrading(answers, context);
}
```

## 总结

通过以下改进：

1. **试题答案分离** - 考生可见文件不含任何答案
2. **Manifest 绑定** - 防止试卷版本错配
3. **上下文打包** - 评分所需数据独立存储
4. **ID 校验** - 评分前验证一致性

确保了：
- ✅ 考生无法通过查看 HTML 源码获得答案
- ✅ 评分时不会错配试卷版本
- ✅ 数据流清晰，易于调试和维护
