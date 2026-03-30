# ruankao-agent

软考（计算机技术与软件专业技术资格考试）备考工具 - 自动生成选择题、问答题、论文题并提供智能评分服务。

## 功能特性

- 📋 **选择题生成** - 从 PDF 资料自动生成 75 道选择题
- 📝 **问答题生成** - 根据架构设计师考试风格生成 6 道案例分析题
- 📄 **论文题生成** - 搜索 Web 热门技术生成论文题目
- 📦 **试卷汇编** - 生成考生友好的 HTML 答题界面
- ✏️ **智能评分** - 对考生作答进行判断、打分和详细解析

## 页面参考
[试卷页面](./about/index.html)
[解答页面](./about/score_report.html)

## 项目结构

```
ruankao-agent/
├── .claude-plugin/
│   └── plugin.json           # 插件清单
├── commands/
│   ├── generate.md           # 生成试卷命令
│   └── grade.md              # 评分命令
├── agents/
│   ├── mcq-agent.md          # 选择题生成智能体
│   ├── essay-agent.md        # 问答题生成智能体
│   ├── paper-agent.md        # 论文题生成智能体
│   ├── assemble-agent.md     # 试卷汇编智能体
│   └── grader-agent.md       # 评分智能体
├── marketplace.json          # 插件市场配置（用于发布）
├── output/                   # 生成文件目录
│   # 考生可见
│   ├── index.html            # 答题界面
│   ├── exam_data.js          # 试题数据（JS 格式，解决本地加载问题）
│   ├── mcq_questions.json    # 选择题（无答案）
│   ├── essay_questions.json  # 问答题（无答案）
│   ├── paper_question.json   # 论文题（无评分标准）
│   ├── exam_manifest.json    # 考试元数据
│   # 保密存储
│   ├── mcq_answers.json      # 选择题答案
│   ├── essay_scoring_guide.json  # 问答题评分标准
│   ├── paper_scoring_guide.json  # 论文题评分标准
│   ├── exam_context_pack.json    # 评分上下文包
│   ├── answers.json          # 考生作答（导出）
│   ├── score_report.json     # 评分数据
│   └── score_report.html     # 评分报告
├── README.md
├── ARCHITECTURE.md           # 架构设计文档
├── LICENSE                   # MIT 许可证
└── .gitignore
```

## 安装方法

在 Claude Code 中执行以下两条命令即可：

```bash
# 1. 添加 GitHub 市场（首次使用需要配置）
/plugin marketplace add coldingcode/ruankao-agent

# 2. 安装插件
/plugin install ruankao-agent
```

安装完成后，运行 `/plugin list` 验证，看到 `ruankao-agent` 即表示安装成功。

## 使用方法

### 生成模拟试卷

在 Claude Code 中执行：

```bash
/generate
```

命令将依次调用以下智能体：

1. `mcq-agent` - 生成 75 道选择题（输出：试题 + 答案分离）
2. `essay-agent` - 生成 6 道问答题（输出：试题 + 评分标准分离）
3. `paper-agent` - 生成 1 道论文题（输出：试题 + 评分标准分离）
4. `assemble-agent` - 汇编生成 HTML 答题界面 + exam_manifest.json + context_pack

### 答题流程

1. 运行 `/generate` 生成试卷
2. 确保 `index.html` 和 `exam_data.js` 在同一目录下
3. 双击打开 `output/index.html` 进行答题
4. 答题过程中自动保存进度到本地存储
5. 完成后点击"导出作答"按钮，生成 `answers.json`

### 评分

考生完成作答并导出后：

```bash
/grade
```

或指定作答文件：

```bash
/grade --answers output/ruankao_answers_xxx.json
```

评分命令将：
1. 验证 `exam_id` 一致性（防止试卷错配）
2. 加载 `exam_context_pack.json`（含答案和评分标准）
3. 对作答进行判分和评分
4. 生成 `score_report.json` 和 `score_report.html`

### 查看评分报告

评分完成后会生成：
- `output/score_report.json` - 结构化评分数据
- `output/score_report.html` - 可视化的评分报告

## 配置选项

插件支持以下配置：

| 配置项 | 说明 | 默认值 |
|-------|------|-------|
| `pdf_source_path` | PDF 复习资料路径（选择题生成用） | 需手动指定 |
| `exam_category` | 考试类别 | "系统架构设计师" |

## 评分标准

### 选择题
- 75 题，每题 1 分，共 75 分
- 自动判分

### 问答题
- 必答题 1 道（25 分）+ 选答题 5 选 3（每题 25 分）
- 共 75 分
- 要点式评分

### 论文题
- 75 分
- 六个维度评分：切合题意 (20)、观点正确 (20)、逻辑清晰 (15)、论据充分 (20)、语言流畅 (10)、格式规范 (15)

### 合格线参考
- 总分 225 分，合格线通常为 135 分左右（60%）

## 安全设计

### 答案与试题分离

```
✅ 考生可见（无答案）:
├── index.html
├── exam_data.js
├── mcq_questions.json
├── essay_questions.json
└── paper_question.json

🔒 保密存储（评分时使用）:
├── mcq_answers.json
├── essay_scoring_guide.json
├── paper_scoring_guide.json
└── exam_context_pack.json
```

### Manifest 绑定

`exam_manifest.json` 包含：
- 唯一 `exam_id` 标识试卷版本
- 各文件的 SHA256 哈希
- 生成时间戳

评分时会验证 `exam_id` 一致性，防止试卷错配。

## 开发说明

### 添加新的智能体

在 `agents/` 目录下创建新的 `.md` 文件，按照以下格式：

```markdown
---
description: 智能体描述
version: 1.0.0
---

# 智能体名称

## 角色定位
...

## 任务目标
...

## 输出格式
...
```

### 修改 HTML 模板

编辑 `agents/assemble-agent.md` 中的模板结构，或创建自定义模板。

### 调试

使用以下命令查看插件加载详情：

```bash
claude --debug
```

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 联系方式

- GitHub: [@coldingcode](https://github.com/coldingcode)
- 项目地址：[https://github.com/coldingcode/ruankao-agent](https://github.com/coldingcode/ruankao-agent)

## 致谢

感谢所有为软考备考工具做出贡献的开发者！
