# zbcx-helper (智博创享助手)

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://marketplace.visualstudio.com/items?itemName=EricHu.zbcx-helper)
[![License](https://img.shields.io/badge/license-Apache--2.0-green.svg)](https://github.com/YuluoY/zbcx-helper/blob/main/LICENSE)
[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue.svg)](https://marketplace.visualstudio.com/items?itemName=EricHu.zbcx-helper)

## 简介

智博创享助手（zbcx-helper）是一个专为智博创享 Web 产品研发团队开发的 VSCode 插件。它提供了智能代码提示和自动补全功能，显著提升开发效率。

## 特性

- 🚀 智能代码提示
- 📦 组件代码自动补全
- 💡 Vue 语法支持
- 🎯 智博创享组件库集成
- 📝 组件文档快速预览
- 🔍 智能搜索和导航
- ⚡ 快速代码片段

## 安装

### 从 VS Code 扩展市场安装

1. 打开 VS Code
2. 按下 `Ctrl+P` 打开命令面板
3. 输入 `ext install EricHu.zbcx-helper`
4. 或在扩展市场中搜索 "zbcx-helper" 或 "智博创享助手"

### 从 VSIX 文件安装

1. 下载最新的 `.vsix` 文件
2. 在 VS Code 中，选择 "扩展" -> "..." -> "从 VSIX 安装..."
3. 选择下载的 `.vsix` 文件

## 使用方法

### 基本使用

1. 在 `.vue` 文件中编写代码时，将自动激活代码提示功能
2. 输入组件名称的前几个字母，会自动显示相关提示
3. 选择提示后，会自动补全组件代码

### 命令

- `zbcx-helper.zbcx`: 激活智博创享助手
  - 快捷键：`Ctrl+Shift+P` 然后输入 `zbcx`

### 代码片段

支持以下组件的代码片段：

- 容器组件
  - Card
  - Dialog
  - Tabs
  - ...
- 表单组件
  - Input
  - Select
  - ...
- 数据展示组件
  - Table
  - Tree
  - ...

## 开发

### 环境要求

- Node.js >= 14
- VS Code >= 1.73.0

### 开发步骤

```bash
# 安装依赖
pnpm install

# 开发模式
npm run build:dev

# 生产打包
npm run build

# 发布新版本
npm run release       # 补丁版本 (1.0.0 -> 1.0.1)
npm run release:minor # 次版本   (1.0.0 -> 1.1.0)
npm run release:major # 主版本   (1.0.0 -> 2.0.0)

# 发布时添加更新说明
npm run release -- "修复了xxx问题"
```

### 目录结构

```
zbcx-helper/
├── src/                # 源代码
│   ├── documents/      # 组件文档
│   ├── language/       # 语言服务
│   └── extension.ts    # 插件入口
├── scripts/           # 构建脚本
├── dist/             # 编译输出
└── CHANGELOG.md      # 更新日志
```

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 许可证

本项目采用 [Apache-2.0](LICENSE) 许可证。

## 作者

- **Eric Hu** - [568055454@qq.com](mailto:568055454@qq.com)

## 相关链接

- [GitHub 仓库](https://github.com/YuluoY/zbcx-helper)
- [VS Code 市场](https://marketplace.visualstudio.com/items?itemName=EricHu.zbcx-helper)
- [问题反馈](https://github.com/YuluoY/zbcx-helper/issues)

## 更新日志

详见 [CHANGELOG.md](CHANGELOG.md)
