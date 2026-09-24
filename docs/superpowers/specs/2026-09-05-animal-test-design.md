# 动物性格测试（animal-test）设计说明

日期：2026-09-05  
状态：待用户确认后进入实现计划

## 1. 目标

做一个可在浏览器里玩的「性格动物」小测试：

- 封面开始 → 逐题作答 → 匹配 5 种动物之一 → 结果页可保存分享海报（含二维码位）
- 先搭可运行骨架；正式题目与文案由用户稍后替换
- **源码文件严格对齐约定目录，不新增独立 router 文件**

## 2. 约定目录（仅这些业务源码）

```
animal-test/
├── src/
│   ├── views/
│   │   ├── Home.vue        # 封面页
│   │   ├── Quiz.vue        # 答题页
│   │   └── Result.vue      # 结果页
│   ├── data/
│   │   └── questions.js    # 题目 + 结果匹配
│   ├── stores/
│   │   └── quizStore.js    # Pinia 状态
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── public/
│   └── assets/             # 图片、二维码等
└── package.json
```

允许的配套调整（不算新增业务页面文件）：

- `package.json` 增加依赖 `pinia`（已有 `vue`、`html2canvas`）
- 删除 Vite 模板自带的 `HelloWorld.vue`、`src/assets` 演示资源等无用文件
- 保留 `index.html`、`vite.config.js` 等脚手架必需文件

**明确不做：** `src/router/` 或任何独立路由文件；不引入 `vue-router`。

## 3. 页面切换方式

用 Pinia 字段 `currentPage` 控制：

- 取值：`'home' | 'quiz' | 'result'`
- `App.vue` 用 `v-if` / `v-else-if` 挂载对应视图组件
- 跳转动作集中在 store 的 actions（如 `goHome`、`startQuiz`、`goResult`、`restart`）

## 4. 用户流程

1. **Home**：标题/副文案 +「开始测试」→ `startQuiz()`（重置答案并进入 quiz）
2. **Quiz**：显示当前题、选项、进度（当前题号 / `questions.length`）；点选项记分并进入下一题；最后一题后结算并进入 result
3. **Result**：展示匹配动物名称、简介、配图路径；提供「保存海报」「再测一次」
4. **海报**：结果区可被 `html2canvas` 截成图下载；预留二维码图片位（`/assets/qrcode.png` 占位）

## 5. 数据设计（`questions.js`）

导出两部分：

### 5.1 `animals`（5 种，占位可改）

每项至少包含：

| 字段 | 说明 |
|------|------|
| `id` | 唯一键，如 `fox` |
| `name` | 展示名，如「狐狸」 |
| `title` | 短标签，如「机智洞察者」 |
| `description` | 性格说明段落 |
| `image` | 图片路径，如 `/assets/animals/fox.png` |

默认占位五种：`fox`、`owl`、`dolphin`、`panda`、`wolf`（用户可整段替换）。

### 5.2 `questions`（结构按 30 题；骨架阶段可用少量示例题）

每项至少包含：

| 字段 | 说明 |
|------|------|
| `id` | 题号 |
| `text` | 题干 |
| `options` | 选项数组 |

每个 option：

| 字段 | 说明 |
|------|------|
| `text` | 选项文案 |
| `animalId` | 选中后给哪个动物加分 |

骨架阶段：先放约 5 道示例题，数组与字段形状与正式 30 题一致，便于用户整文件替换。

## 6. 状态设计（`quizStore.js`）

状态：

- `currentPage`
- `currentIndex`：当前题下标
- `scores`：`{ [animalId]: number }`
- `resultAnimalId`：结算后的动物 id（或 `null`）

计算属性：

- `currentQuestion`、`totalQuestions`、`progress`、`resultAnimal`

动作：

- `startQuiz`：清零分数与下标，进入 quiz
- `answer(animalId)`：对应分数 +1；若还有下一题则 `currentIndex++`，否则调用结算并 `goResult`
- `computeResult`：取 `scores` 最高分动物；**同分时按 `animals` 数组顺序取第一个最高分**（规则写死，便于预期）
- `restart`：回到 home 并清空结果

## 7. 各页职责

### Home.vue

- 展示测试名称与一句介绍
- 按钮调用 `startQuiz`

### Quiz.vue

- 读 store 当前题与进度
- 选项按钮调用 `answer`
- 无题或越界时不渲染错误态（由 store 保证流程）

### Result.vue

- 展示 `resultAnimal` 文案与图片
- 海报容器（含二维码占位图）+「保存图片」调用已有 `html2canvas`
- 「再测一次」调用 `restart`

### App.vue

- 注册/使用 store，按 `currentPage` 切换三页
- 不做复杂布局以外的业务逻辑

### main.js

- `createApp` + `createPinia` + mount
- 引入全局 `style.css`

### style.css

- 移动端优先的基础样式与 CSS 变量
- 三页共用的按钮、进度、卡片级样式可写在此；避免再拆样式文件

## 8. 静态资源

`public/assets/` 下约定占位路径（可用简单占位文件或路径先写上，图片后补）：

- 动物图：`/assets/animals/{id}.png`
- 二维码：`/assets/qrcode.png`

## 9. 非目标（本期不做）

- 登录、后端、统计埋点
- 微信 JS-SDK 分享
- 独立路由、URL 深链到某一题
- 多语言
- 音效/复杂动画（可保留轻量过渡，非必须）

## 10. 验收标准

- 目录与约定一致，无 `src/router`
- `npm run dev` 可打开；能走通：开始 → 答完示例题 → 出结果 → 保存海报 → 再测
- 替换 `questions.js` 中题目与动物文案后，无需改页面结构即可使用（选项仍带 `animalId`）
