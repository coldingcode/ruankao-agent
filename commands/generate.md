---
description: 生成软考模拟试卷
version: 1.0.0
---

# 📝 软考模拟试卷生成命令

## 功能概述

本命令驱动多个专业智能体，为软考（计算机技术与软件专业技术资格考试）考生生成完整的模拟试卷。

## 工作流程

```
┌─────────────────────────────────────────────────────────────────┐
│                      generate 命令                               │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
   ┌─────────┐          ┌─────────┐          ┌─────────┐
   │ 选择题  │          │ 问答题  │          │ 论文题  │
   │ 智能体  │          │ 智能体  │          │ 智能体  │
   │ (75 题) │          │ (6 题)  │          │ (1 题)  │
   └────┬────┘          └────┬────┘          └────┬────┘
        │                    │                    │
        │                    │                    │
        └────────────────────┼────────────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   汇编智能体    │
                    │  (生成 HTML)    │
                    └────────┬────────┘
                             │
                             ▼
          ┌──────────────────┴──────────────────┐
          │                                     │
          ▼                                     ▼
   ┌─────────────┐                       ┌─────────────┐
   │ 考生可见文件 │                       │ 保密文件    │
   │ - index.html│                       │ - *_answers │
   │ - questions │                       │ - *_scoring │
   └─────────────┘                       │ - context_  │
                                         │    pack.json│
                                         └─────────────┘
```

## 使用方法

```bash
/generate
```

## 输出内容

### 考生可见（可分发）

| 文件 | 说明 |
|-----|------|
| `output/index.html` | 考生答题界面 |
| `output/exam_data.js` | 试题数据（JS 格式，解决本地文件 CORS 问题） |
| `output/mcq_questions.json` | 选择题试题（不含答案） |
| `output/essay_questions.json` | 问答题试题（不含答案） |
| `output/paper_question.json` | 论文题试题（不含评分标准） |
| `output/exam_manifest.json` | 考试元数据绑定文件 |

**重要**：`index.html` 和 `exam_data.js` 必须在同一目录下，否则无法正常加载试题数据。

### 保密存储（评分时使用）

| 文件 | 说明 |
|-----|------|
| `output/mcq_answers.json` | 选择题答案与解析 |
| `output/essay_scoring_guide.json` | 问答题评分标准 |
| `output/paper_scoring_guide.json` | 论文题评分标准 |
| `output/exam_context_pack.json` | 评分上下文包（含全部答案） |

## 相关智能体

- `ruankao-agent:mcq-agent` - 选择题生成
- `ruankao-agent:essay-agent` - 问答题生成
- `ruankao-agent:paper-agent` - 论文题生成
- `ruankao-agent:assemble-agent` - 试卷汇编

## 相关命令

- `/grade` - 对考生作答进行评分（独立命令）

## 完整流程

```
/generate  →  考生答题 (index.html)  →  导出 answers.json  →  /grade  →  评分报告
```

## 安全设计

### 答案分离存储

```
✅ 正确设计：
- 试题文件：不含答案，转换为 JS 格式供 HTML 加载
- 答案文件：独立存储，仅评分时读取
- exam_data.js 只包含试题，不包含答案

❌ 错误设计：
- 答案嵌入 HTML 或 JavaScript
- 考生可通过查看源代码获得答案
```

### 本地文件加载方案

由于本地 HTML 文件无法通过 AJAX 加载 JSON（CORS 限制），采用以下方案：

```
✅ 解决方案：
- JSON 数据 → 转换为 JavaScript 文件 → 通过 <script> 标签加载
- 示例：exam_data.js 中定义 const examData = {...};
- index.html 中通过 <script src="exam_data.js"></script> 加载
```

### Manifest 绑定

`exam_manifest.json` 绑定：
- 唯一 exam_id
- 各文件的 SHA256 哈希
- 生成时间戳

评分时会验证 exam_id 一致性，防止试卷错配。

## 注意事项

1. 首次使用请确保 PDF 资料已放置在插件缓存目录中
   - 插件缓存目录：`~/.claude/plugins/cache/ruankao-agent/*/arch.pdf`（`*`为版本号）
   - 如未找到，会从项目根目录 `./arch.pdf` 尝试读取
2. 论文题需要联网搜索当前热门技术
   - 每次生成时必须调用 WebSearch 进行实时搜索
   - 如检测到与之前题目重复，必须更换技术热点重新生成
3. 评分功能请运行 `/grade` 命令
4. **保密文件请勿泄露给考生**
