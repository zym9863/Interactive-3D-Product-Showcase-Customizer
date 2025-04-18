[English](./README.md) | [简体中文](./README_zh.md)

# 交互式3D产品展示与定制器

本项目演示了如何使用 Three.js 和 Vite 创建一个交互式 3D 产品展示与定制器。

## 安装与启动

1. 安装依赖：

   ```bash
   npm install
   ```

2. 启动开发服务器：

   ```bash
   npm run dev
   ```

3. 在浏览器中打开 `http://localhost:5173`

## 构建与部署

用于生产环境构建（适用于 Netlify、Vercel 等平台部署）：

```bash
npm run build
```

构建输出位于 `dist/` 目录。你可以使用以下命令本地预览生产构建：

```bash
npm run preview
```

将 `dist/` 文件夹中的内容部署到你喜欢的静态托管服务即可。

## 功能特性

- 场景导航的轨道控制
- 可调整比例和颜色的示例立方体
- 支持通过 GUI 调整比例的 GLTF 模型加载示例

## 技术栈

- Three.js
- Vite
- lil-gui
