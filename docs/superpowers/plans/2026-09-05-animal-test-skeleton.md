# Animal-Test 页面骨架 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在现有 `animal-test` Vite+Vue3 工程上，搭出与约定目录一致的可切换三页骨架；业务文案与完整题目由用户后续替换。

**Architecture:** 不用 vue-router；Pinia `currentPage` + `App.vue` 的 `v-if` 切换 Home/Quiz/Result。`questions.js` 只保留字段形状与少量占位题；`quizStore` 负责翻页与计分；Result 预留海报容器与 html2canvas 保存入口。

**Tech Stack:** Vue 3、Vite、Pinia、html2canvas（已装）

## Global Constraints

- 业务源码严格仅：`views/{Home,Quiz,Result}.vue`、`data/questions.js`、`stores/quizStore.js`、`App.vue`、`main.js`、`style.css`、`public/assets/`、`package.json`
- 不新增 `src/router`，不引入 `vue-router`
- 同分结果：按 `animals` 数组顺序取第一个最高分
- 骨架阶段题目可为少量示例；结构兼容 30 题
- 不主动 git commit（除非用户要求）

---

### Task 1: 依赖与目录清理

**Files:**
- Modify: `animal-test/package.json`
- Delete: `animal-test/src/components/HelloWorld.vue`、`animal-test/src/assets/*`（模板资源）
- Create: `animal-test/public/assets/.gitkeep`、`animal-test/public/assets/animals/.gitkeep`

**Interfaces:**
- Produces: 项目可 `npm install` 后具备 `pinia`

- [ ] **Step 1: 安装 pinia**

Run: `cd d:\work\myProject\animal-test && npm install pinia`
Expected: `package.json` dependencies 含 `pinia`

- [ ] **Step 2: 删除模板无用文件，创建 public/assets 目录**

删除 `src/components`、`src/assets` 下模板文件；创建 `public/assets` 与 `public/assets/animals`。

- [ ] **Step 3: 验证依赖**

Run: `npm ls pinia`
Expected: 显示已安装版本

---

### Task 2: `questions.js` 占位数据

**Files:**
- Create: `animal-test/src/data/questions.js`

**Interfaces:**
- Produces: `export const animals`（5 项，字段 `id,name,title,description,image`）；`export const questions`（≥1 题，option 含 `text,animalId`）

- [ ] **Step 1: 写入占位 animals + 约 5 道示例题**

完整导出 `animals`、`questions`，image 路径形如 `/assets/animals/fox.png`。

- [ ] **Step 2: 确认可被 import**

文件无语法错误，导出两个命名导出。

---

### Task 3: `quizStore.js`

**Files:**
- Create: `animal-test/src/stores/quizStore.js`

**Interfaces:**
- Consumes: `animals`、`questions` from `../data/questions.js`
- Produces: state `currentPage`、`currentIndex`、`scores`、`resultAnimalId`；getters `currentQuestion`、`totalQuestions`、`progress`、`resultAnimal`；actions `startQuiz`、`answer(animalId)`、`computeResult`、`restart`

- [ ] **Step 1: 实现 store**

`answer`：分数 +1；未到最后一题则 `currentIndex++`，否则 `computeResult` 并 `currentPage = 'result'`。  
`computeResult`：最高分；同分取 `animals` 中靠前者。  
`startQuiz`：重置并 `currentPage = 'quiz'`。  
`restart`：重置并 `currentPage = 'home'`。

---

### Task 4: 三页视图骨架

**Files:**
- Create: `animal-test/src/views/Home.vue`
- Create: `animal-test/src/views/Quiz.vue`
- Create: `animal-test/src/views/Result.vue`

**Interfaces:**
- Consumes: `useQuizStore()` 的上述 API；Result 使用 `html2canvas`

- [ ] **Step 1: Home.vue** — 标题 +「开始测试」→ `startQuiz`
- [ ] **Step 2: Quiz.vue** — 进度、题干、选项 → `answer(option.animalId)`
- [ ] **Step 3: Result.vue** — 结果文案区（`ref` 海报根节点）+ 二维码位 + 保存图 + 再测一次

---

### Task 5: App / main / 样式串起来

**Files:**
- Modify: `animal-test/src/App.vue`
- Modify: `animal-test/src/main.js`
- Modify: `animal-test/src/style.css`
- Modify: `animal-test/index.html`（title 可改为中文测试名）

**Interfaces:**
- Consumes: 三页组件 + pinia store `currentPage`

- [ ] **Step 1: main.js 注册 pinia**
- [ ] **Step 2: App.vue 按 currentPage 切换三页**
- [ ] **Step 3: style.css 精简为移动端优先基础样式（去掉 Vite 模板演示样式）**
- [ ] **Step 4: 跑通验证**

Run: `npm run build`
Expected: 构建成功

Run: `npm run dev`（手动点通：开始 → 答完 → 结果）

---

## Spec coverage

| Spec 项 | Task |
|---------|------|
| 严格目录 / 无 router | 全局 + Task 4–5 |
| Pinia 翻页 | Task 3、5 |
| questions 可替换 | Task 2 |
| 海报 + html2canvas | Task 4 Result |
| 5 动物占位 | Task 2 |
| 验收 build/流程 | Task 5 |
