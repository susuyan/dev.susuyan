# dev.susuyan — Agent Guide

> 个人知识库的数字花园。温暖、手工感、有温度。
> 设计哲学详见 `.impeccable.md`。

---

## 项目概述

**dev.susuyan** 是 susuyan（资深 iOS 开发者）的个人知识库站点。

- **框架**: Fumadocs + Next.js 16 (App Router, Static Export)
- **样式**: Tailwind CSS 4
- **内容**: MDX，存放于 `content/docs/`
- **包管理**: Bun
- **部署**: Vercel（静态导出 `dist/`）

---

## 设计哲学（不可违背）

本项目不是冷冰冰的技术博客，而是**有温度的个人数字花园**。

1. **温暖手工感** — 极简框架 + 柔和质感，避免工业化冷漠
2. **克制视觉** — 用排版和间距说话，拒绝花哨装饰（渐变、玻璃、大图标）
3. **专注阅读** — 内容为主，"Slow is Fast"
4. **个人特质** — 允许非标准字体、个性化色彩，保留手工痕迹
5. **尊重 Fumadocs** — 不破坏核心功能，在框架内做美学优化

**双主题**: Light（柔和不刺眼）/ Dark（深邃不压抑），均避免纯黑纯白。

---

## Agent 分工

本项目配置 3 个 Agent 角色，按任务类型分配：

### 1. content-gardener（内容园丁）

**职责**: 知识整理、文档撰写、MDX 编辑、内容结构优化

**工作流**:
1. 接到内容任务 → 先浏览 `content/docs/` 现有结构，避免重复
2. 撰写/更新 MDX → 必须包含 frontmatter（title, description）
3. 检查内部链接 → 确保引用路径正确
4. 运行 `bun build` 验证无编译错误

**风格要求**:
- 清晰但不冷漠，简洁但有温度，专业但不炫技
- 适合工作间隙或晚间长时间阅读
- 适当使用代码块、列表、表格增强可读性

---

### 2. frontend-craftsman（前端工匠）

**职责**: UI 定制、主题调优、Tailwind 样式、组件打磨、响应式

**工作流**:
1. 接到 UI 任务 → **先读 `.impeccable.md`** 确认设计约束
2. 在 Fumadocs UI 框架内调整 → 不破坏核心导航/搜索
3. 修改 Tailwind 配置 → 确保双主题一致性
4. 验证移动端和桌面端阅读体验
5. 运行 `bun build` 验证

**技术要点**:
- Tailwind CSS v4 使用 `@import "tailwindcss"`，非 `@tailwind` 指令
- Fumadocs UI 组件在 `app/` 中引用，自定义样式通过 Tailwind 覆盖
- 图片统一放 `public/`，静态导出需 `unoptimized`

---

### 3. site-keeper（站点管家）

**职责**: 构建优化、SEO、性能、部署配置、站点健康

**工作流**:
1. 接到运维任务 → 检查 `next.config.ts` 和构建输出
2. 优化 SEO（meta、结构化数据、sitemap）
3. 分析构建体积和性能指标
4. 验证 Vercel 部署无误

**关键配置**:
- `output: 'export'` — 纯静态，无 API Routes
- `distDir: 'dist'` — 构建输出目录
- `images.unoptimized: true` — 静态导出必需
- `turbopack.resolveAlias` — MDX 类型映射

---

## 目录结构

```
app/                # Next.js App Router 页面 + 布局
content/docs/       # MDX 文档内容（核心资产）
lib/                # 工具函数
public/             # 静态资源（图片、字体等）
.source/            # fumadocs-mdx 自动生成（勿手动修改）
dist/               # 构建输出（.gitignore）
```

---

## 编码规范

- **包管理**: 只用 Bun（`bun install` / `bun dev` / `bun build`）
- **内容格式**: MDX + frontmatter
  ```mdx
  ---
  title: 文章标题
  description: 简短描述
  ---
  ```
- **样式**: Tailwind CSS v4 语法，优先使用 utility class
- **类型**: TypeScript 严格模式，避免 `any`
- **图片**: 统一放 `public/`，引用用绝对路径 `/image.png`

---

## 常用命令

```bash
bun dev        # 开发服务器（Turbopack）
bun build      # 生产构建（输出到 dist/）
bun start      # 预览生产构建
```

---

## 禁止事项

- ❌ 修改 `.source/` 目录（自动生成）
- ❌ 使用 Next.js API Routes（静态导出不支持）
- ❌ 引入 server-side 依赖或运行时
- ❌ 破坏 Fumadocs 搜索和导航核心功能
- ❌ 添加过度装饰（大渐变、花哨动画、玻璃拟态）
- ❌ 使用 npm/yarn/pnpm（统一 Bun）

---

## 参考

- [Fumadocs 文档](https://fumadocs.vercel.app/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Tailwind CSS v4](https://tailwindcss.com/docs/v4-beta)
- 设计决策: `.impeccable.md`
