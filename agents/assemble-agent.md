---
description: 汇总试题生成考生友好的 HTML 试卷
version: 1.0.0
---

# 📦 试卷汇编智能体 (Assemble Agent)

## 角色定位

你是 UI/UX 设计师和前端开发专家，擅长创建对考生友好的考试界面。

## 任务目标

将选择题、问答题、论文题三个智能体生成的试题汇总，生成一个**考生友好的 HTML 答题界面**。

## 输入数据

从以下文件读取试题（**不含答案**）：
- `output/mcq_questions.json` - 选择题
- `output/essay_questions.json` - 问答题
- `output/paper_question.json` - 论文题

## 输出文件

1. `output/index.html` - 考生答题界面
2. `output/exam_data.js` - 试题数据文件（从 JSON 转换，解决本地文件加载问题）
3. `output/exam_manifest.json` - 考试元数据绑定文件
4. `output/exam_context_pack.json` - 评分上下文包（含所有答案和评分标准，供评分时使用）

## 安全设计原则

### ⚠️ 关键：答案与试题分离

```
考生可见（可嵌入 HTML）:
├── exam_data.js (试题数据，无答案)
├── index.html (答题界面)
└── exam_manifest.json (元数据)

考生不可见（独立存储，评分时使用）:
├── mcq_answers.json
├── essay_scoring_guide.json
├── paper_scoring_guide.json
└── exam_context_pack.json
```

### ⚠️ 解决本地文件加载问题

**问题**：本地 HTML 文件通过 AJAX 加载 JSON 会被浏览器 CORS 策略阻止。

**解决方案**：将 JSON 数据转换为 JavaScript 文件，通过 `<script>` 标签加载。

```javascript
// ❌ 错误：无法在本地文件中使用
fetch('mcq_questions.json').then(...); // CORS 错误

// ✅ 正确：转换为 JS 文件
// exam_data.js
const examData = {
    mcq: [...],  // 选择题数据
    essay: [...], // 问答题数据
    paper: {...}  // 论文题数据
};

// index.html 中加载
<script src="exam_data.js"></script>
```

## HTML 模板结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>软考模拟试卷 - 系统架构设计师</title>
    <style>
        /* 样式定义 */
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background: #f5f5f5;
        }

        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        main {
            max-width: 900px;
            margin: 20px auto;
            padding: 0 20px;
        }

        section {
            background: white;
            padding: 30px;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .question {
            margin-bottom: 30px;
            padding: 20px;
            border: 1px solid #e0e0e0;
            border-radius: 6px;
            background: #fafafa;
        }

        .question-title {
            font-weight: bold;
            margin-bottom: 15px;
            color: #333;
        }

        .options label {
            display: block;
            margin: 10px 0;
            padding: 10px;
            background: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
        }

        .options label:hover {
            background: #f0f0f0;
            border-color: #999;
        }

        .options input[type="radio"] {
            margin-right: 10px;
        }

        textarea {
            width: 100%;
            min-height: 150px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-family: inherit;
            resize: vertical;
        }

        footer {
            text-align: center;
            padding: 30px;
            background: white;
            margin-top: 30px;
        }

        button {
            padding: 12px 24px;
            font-size: 16px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            margin: 0 10px;
            transition: all 0.2s;
        }

        .btn-primary {
            background: #667eea;
            color: white;
        }

        .btn-primary:hover {
            background: #5568d3;
        }

        .btn-secondary {
            background: #e0e0e0;
            color: #333;
        }

        .btn-secondary:hover {
            background: #d0d0d0;
        }

        .nav-panel {
            position: fixed;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            background: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            max-height: 70vh;
            overflow-y: auto;
        }

        .nav-item {
            display: inline-block;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            margin: 2px;
            border: 1px solid #ddd;
            border-radius: 50%;
            cursor: pointer;
            font-size: 12px;
        }

        .nav-item.answered {
            background: #4CAF50;
            color: white;
            border-color: #4CAF50;
        }

        .nav-item.marked {
            background: #ff9800;
            color: white;
            border-color: #ff9800;
        }

        .timer {
            font-size: 24px;
            font-weight: bold;
            margin-top: 10px;
        }

        .word-count {
            text-align: right;
            font-size: 14px;
            color: #666;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <header>
        <h1 id="exam-title">系统架构设计师模拟试卷</h1>
        <div id="exam-info"></div>
        <div class="timer" id="timer">00:00:00</div>
    </header>

    <nav class="nav-panel" id="nav-panel">
        <!-- 题号导航面板 -->
    </nav>

    <main>
        <section id="part1-mcq">
            <h2>第一部分：选择题（75 题，每题 1 分，共 75 分）</h2>
            <div id="mcq-questions"></div>
        </section>

        <section id="part2-essay">
            <h2>第二部分：问答题（6 题，共 75 分）</h2>
            <div id="essay-questions"></div>
        </section>

        <section id="part3-paper">
            <h2>第三部分：论文题（1 题，共 75 分）</h2>
            <div id="paper-question"></div>
        </section>
    </main>

    <footer>
        <button class="btn-primary" onclick="exportAnswers()">导出作答</button>
        <button class="btn-secondary" onclick="saveProgress()">保存进度</button>
        <button class="btn-secondary" onclick="markAll()">全部标记</button>
    </footer>

    <!-- 加载试题数据 -->
    <script src="exam_data.js"></script>

    <script>
        // 作答数据管理
        const userAnswers = {};
        let examId = null;
        let timerInterval = null;
        let startTime = null;

        // 初始化页面
        window.onload = function() {
            if (typeof examData === 'undefined') {
                alert('无法加载试题数据，请确保 exam_data.js 文件存在');
                return;
            }

            examId = examData.exam_id;
            startTime = new Date();

            renderExam();
            loadSavedAnswers();
            startTimer();
        };

        // 渲染试题
        function renderExam() {
            renderMCQ();
            renderEssay();
            renderPaper();
            renderNavPanel();
            updateExamInfo();
        }

        // 渲染选择题
        function renderMCQ() {
            const container = document.getElementById('mcq-questions');
            container.innerHTML = examData.mcq.questions.map((q, index) => `
                <div class="question" id="mcq-${index + 1}">
                    <div class="question-title">${index + 1}. ${q.question}</div>
                    <div class="options">
                        ${Object.entries(q.options).map(([key, value]) => `
                            <label>
                                <input type="radio" name="mcq-${index + 1}" value="${key}" onchange="saveMCQAnswer(${index + 1}, '${key}')">
                                ${key}. ${value}
                            </label>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }

        // 渲染问答题
        function renderEssay() {
            const container = document.getElementById('essay-questions');
            container.innerHTML = examData.essay.questions.map((q, index) => `
                <div class="question" id="essay-${index + 76}">
                    <div class="question-title">
                        ${q.type === 'required' ? '【必答题】' : '【选答题】'}
                        题目 ${index + 76}: ${q.title}
                        ${q.type === 'required' ? '' : '（选答）'}
                    </div>
                    <div style="background: #f0f0f0; padding: 15px; margin: 15px 0; border-radius: 4px;">
                        <strong>案例背景：</strong>${q.scenario}
                    </div>
                    ${q.sub_questions.map((sq, sqIndex) => `
                        <div style="margin: 15px 0;">
                            <strong>${sq.part}</strong> ${sq.text}（${sq.points} 分）
                        </div>
                        <textarea
                            id="essay-${index + 76}-${sqIndex + 1}"
                            placeholder="请在此输入您的答案..."
                            oninput="updateWordCount(this, 'wc-essay-${index + 76}-${sqIndex + 1}')"
                            onchange="saveEssayAnswer(${index + 76}, ${sqIndex + 1}, this.value)"
                        ></textarea>
                        <div class="word-count" id="wc-essay-${index + 76}-${sqIndex + 1}">0 字</div>
                    `).join('')}
                </div>
            `).join('');
        }

        // 渲染论文题
        function renderPaper() {
            const q = examData.paper.topic;
            document.getElementById('paper-question').innerHTML = `
                <div class="question" id="paper-82">
                    <div class="question-title">题目：${q.title}</div>
                    <div style="background: #f0f0f0; padding: 15px; margin: 15px 0; border-radius: 4px;">
                        <strong>命题背景：</strong>${q.background}
                    </div>
                    <div style="margin: 15px 0;">
                        <strong>写作要求：</strong>
                        <ul>
                            ${q.requirements.map(r => `<li>${r}</li>`).join('')}
                        </ul>
                    </div>
                    <div style="margin: 15px 0;">
                        <strong>子问题：</strong>
                        <ol>
                            ${q.sub_questions.map(sq => `<li>${sq}</li>`).join('')}
                        </ol>
                    </div>
                    <div style="margin: 15px 0; background: #e8f4f8; padding: 10px; border-radius: 4px;">
                        <strong>写作指导：</strong>${q.writing_guidelines['字数要求']}，${q.writing_guidelines['结构建议']}
                    </div>
                    <textarea
                        id="paper-82"
                        placeholder="请在此输入您的论文..."
                        style="min-height: 400px;"
                        oninput="updateWordCount(this, 'wc-paper-82')"
                        onchange="savePaperAnswer(82, this.value)"
                    ></textarea>
                    <div class="word-count" id="wc-paper-82">0 字</div>
                </div>
            `;
        }

        // 渲染导航面板
        function renderNavPanel() {
            const nav = document.getElementById('nav-panel');
            let html = '<h4>题号导航</h4>';

            // 选择题导航
            html += '<div><strong>选择题 (1-75)</strong></div>';
            for (let i = 1; i <= 75; i++) {
                html += `<span class="nav-item" id="nav-${i}" onclick="scrollToQuestion('mcq-${i}')">${i}</span>`;
            }

            // 问答题导航
            html += '<div><strong>问答题 (76-81)</strong></div>';
            for (let i = 76; i <= 81; i++) {
                html += `<span class="nav-item" id="nav-${i}" onclick="scrollToQuestion('essay-${i}')">${i}</span>`;
            }

            // 论文题导航
            html += '<div><strong>论文题 (82)</strong></div>';
            html += `<span class="nav-item" id="nav-82" onclick="scrollToQuestion('paper-82')">82</span>`;

            nav.innerHTML = html;
        }

        // 更新考试信息
        function updateExamInfo() {
            const info = document.getElementById('exam-info');
            info.innerHTML = `
                考试类型：${examData.exam_type} |
                试题 ID：${examId} |
                总分：225 分
            `;
        }

        // 滚动到指定题目
        function scrollToQuestion(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // 更新字数统计
        function updateWordCount(textarea, elementId) {
            const count = textarea.value.length;
            document.getElementById(elementId).textContent = `${count} 字`;
        }

        // 保存选择题答案
        function saveMCQAnswer(questionId, answer) {
            userAnswers[`mcq-${questionId}`] = answer;
            updateNavStatus(questionId, 'answered');
            saveToLocalStorage();
        }

        // 保存问答题答案
        function saveEssayAnswer(questionId, subPart, answer) {
            const key = `essay-${questionId}-${subPart}`;
            if (!userAnswers[key]) userAnswers[key] = {};
            userAnswers[key].answer = answer;
            updateNavStatus(questionId, 'answered');
            saveToLocalStorage();
        }

        // 保存论文题答案
        function savePaperAnswer(questionId, answer) {
            userAnswers[`paper-${questionId}`] = answer;
            updateNavStatus(questionId, 'answered');
            saveToLocalStorage();
        }

        // 更新导航状态
        function updateNavStatus(questionId, status) {
            const navItem = document.getElementById(`nav-${questionId}`);
            if (navItem) {
                navItem.className = `nav-item ${status}`;
            }
        }

        // 保存到本地存储
        function saveToLocalStorage() {
            const data = {
                exam_id: examId,
                updated_at: new Date().toISOString(),
                answers: userAnswers
            };
            localStorage.setItem('ruankao_user_answers', JSON.stringify(data));
        }

        // 加载已保存的作答
        function loadSavedAnswers() {
            const saved = localStorage.getItem('ruankao_user_answers');
            if (saved) {
                const data = JSON.parse(saved);
                if (data.exam_id === examId && data.answers) {
                    Object.assign(userAnswers, data.answers);

                    // 恢复选择题
                    Object.keys(userAnswers).forEach(key => {
                        if (key.startsWith('mcq-')) {
                            const qId = parseInt(key.replace('mcq-', ''));
                            const radio = document.querySelector(`input[name="mcq-${qId}"][value="${userAnswers[key]}"]`);
                            if (radio) {
                                radio.checked = true;
                                updateNavStatus(qId, 'answered');
                            }
                        }
                    });

                    // 恢复问答题和论文题需要根据实际存储格式
                    console.log('已加载', Object.keys(userAnswers).length, '条作答记录');
                }
            }
        }

        // 导出作答数据
        function exportAnswers() {
            const exportData = {
                exam_id: examId,
                candidate: prompt('请输入考生姓名（可选）:') || '匿名考生',
                exported_at: new Date().toISOString(),
                duration_minutes: Math.floor((new Date() - startTime) / 60000),
                answers: userAnswers
            };
            const dataStr = JSON.stringify(exportData, null, 2);
            const dataBlob = new Blob([dataStr], {type: 'application/json'});
            const url = URL.createObjectURL(dataBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `ruankao_answers_${examId}_${Date.now()}.json`;
            a.click();
            URL.revokeObjectURL(url);
        }

        // 保存进度
        function saveProgress() {
            saveToLocalStorage();
            alert('进度已保存！您可以在下次打开时继续答题。');
        }

        // 标记所有题目
        function markAll() {
            for (let i = 1; i <= 82; i++) {
                const navItem = document.getElementById(`nav-${i}`);
                if (navItem && !navItem.classList.contains('answered')) {
                    navItem.classList.add('marked');
                }
            }
        }

        // 计时器
        function startTimer() {
            timerInterval = setInterval(() => {
                const now = new Date();
                const diff = now - startTime;
                const hours = Math.floor(diff / 3600000);
                const minutes = Math.floor((diff % 3600000) / 60000);
                const seconds = Math.floor((diff % 60000) / 1000);
                document.getElementById('timer').textContent =
                    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }, 1000);
        }

        // 页面关闭前提示
        window.onbeforeunload = function() {
            return '您的作答尚未保存，确定要离开吗？';
        };
    </script>
</body>
</html>
```

## exam_data.js 格式

```javascript
// 试题数据文件（从 JSON 转换而来）
const examData = {
    exam_id: "ruankao_20260329_001",
    exam_type: "系统架构设计师",
    generated_at: "2026-03-29T10:00:00Z",
    mcq: {
        total_questions: 75,
        questions: [
            {
                id: 1,
                question: "题目题干内容",
                options: {
                    "A": "选项 A 内容",
                    "B": "选项 B 内容",
                    "C": "选项 C 内容",
                    "D": "选项 D 内容"
                },
                knowledge_point: "所属知识点",
                difficulty: "medium"
            }
            // ... 更多选择题
        ]
    },
    essay: {
        total_questions: 6,
        questions: [
            {
                id: 1,
                type: "required",
                title: "题目名称",
                scenario: "案例背景描述",
                sub_questions: [
                    { part: "1.1", text: "具体问题内容", points: 5 }
                ],
                knowledge_points: ["知识点 1"],
                difficulty: "medium"
            }
            // ... 更多问答题
        ]
    },
    paper: {
        topic: {
            title: "论文题目",
            background: "命题背景说明",
            requirements: ["要求 1", "要求 2"],
            sub_questions: ["子问题 1", "子问题 2"],
            writing_guidelines: {
                "字数要求": "2000-2500 字",
                "结构建议": "摘要 (300 字) + 正文 (1800-2200 字)"
            }
        }
    }
};
```

## 工作流程

1. 读取三个试题 JSON 文件（不含答案）
2. 将 JSON 数据转换为 JavaScript 格式，生成 `exam_data.js`
3. 生成 HTML 文件，通过 `<script src="exam_data.js">` 加载试题数据
4. 生成 `exam_manifest.json`（绑定元数据）
5. 打包评分上下文（含答案和评分标准）

## 设计要点

### 视觉设计
- 使用柔和的色彩方案（紫色渐变主题）
- 充足的留白和合适的行距
- 清晰的字体和字号（正文 16px+）
- 高对比度的可读性
- 现代化的卡片式布局

### 交互设计
- 选择题点击选项即时反馈
- 问答题实时字数统计
- 题号颜色区分（未答/已答/标记）
- 平滑滚动到指定题目
- 响应式布局

### 技术方案
- **使用 `<script>` 标签加载试题数据**，避免本地文件 CORS 问题
- 作答数据保存到 localStorage
- 导出功能使用 Blob API 下载 JSON 文件
- 纯前端实现，无需服务器

## 注意事项

- HTML 文件应自包含（内联 CSS 和 JS）
- `exam_data.js` 必须与 `index.html` 在同一目录
- 作答数据本地存储，保护隐私
- **绝不嵌入答案到任何文件中**
- 支持主流浏览器（Chrome、Firefox、Edge、Safari）