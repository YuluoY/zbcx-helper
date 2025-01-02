# zbcx-helper (智博创享助手)

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://marketplace.visualstudio.com/items?itemName=EricHu.zbcx-helper)
[![License](https://img.shields.io/badge/license-Apache--2.0-green.svg)](https://github.com/YuluoY/zbcx-helper/blob/main/LICENSE)
[![VS Code Marketplace](https://img.shields.io/badge/VS%20Code-Marketplace-blue.svg)](https://marketplace.visualstudio.com/items?itemName=EricHu.zbcx-helper)

## 简介

智博创享助手（zbcx-helper）是一个专为智博创享 Web 产品研发团队开发的 VSCode 插件。它提供了智能代码提示、自动补全、文档预览等功能，显著提升开发效率。

## 特性

- 🚀 智能代码提示
  - 组件属性提示
  - 事件参数提示
  - 插槽用法提示
  - 实时语法检查

- 📦 组件代码自动补全
  - 组件标签补全
  - 属性值补全
  - 事件处理函数补全
  - 代码片段补全

- 💡 Vue 语法支持
  - .vue 文件支持
  - 模板语法高亮
  - 组件嵌套识别
  - 属性类型检查

- 🎯 智博创享组件库集成
  - 基础组件
  - 容器组件
  - 表单组件
  - 数据展示组件

- 📝 组件文档快速预览
  - 悬停即可查看文档
  - 在线文档链接
  - 示例代码展示
  - 属性说明表格

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

1. 在 `.vue` 文件中编写代码时，将自动激活以下功能：
   - 输入 `<cx-` 触发组件补全
   - 输入组件属性时自动显示可用值
   - 悬停在组件上显示文档
   - 实时检查组件用法

2. 快捷命令：
   - 输入 `cx-` 触发代码片段补全
   - 使用 `Ctrl+Space` 手动触发补全
   - 使用 `Ctrl+K Ctrl+I` 查看悬停文档

### 代码片段

支持以下组件的代码片段：

- 容器组件
  - Card - 卡片容器
  - Dialog - 对话框
  - Tabs - 标签页
  - Group - 组合容器
  - SplitScreen - 分屏容器
  - Fold - 折叠面板
  - Collapse - 折叠面板组

- 表单组件
  - Input - 输入框
  - Select - 选择器
  - Radio - 单选框
  - Checkbox - 复选框
  - Switch - 开关
  - DatePicker - 日期选择器
  - TimePicker - 时间选择器

- 数据展示组件
  - Table - 表格
  - Tree - 树形控件
  - List - 列表
  - Pagination - 分页
  - Progress - 进度条
  - Badge - 徽章
  - Tag - 标签

### 文件管理组件

- 文件管理
  - FileMan - 基础文件管理
  - FilesMan - 多目录文件管理
  - DirFileMan - 目录文件管理
  - DocFileMan - 文档文件管理

- 文件预览
  - FileView - 通用文件预览
  - ImageView - 图片预览
  - VideoView - 视频预览
  - AudioView - 音频预览

## 开发

### 环境要求

- Node.js >= 14
- VS Code >= 1.73.0
- TypeScript >= 5.3.2
- Webpack >= 5.89.0

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
│   │   └── webComCx/   # 组件库文档
│   ├── language/       # 语言服务
│   │   ├── completion/ # 代码补全
│   │   ├── hover/      # 悬停提示
│   │   └── diagnostics/# 语法检查
│   └── extension.ts    # 插件入口
├── scripts/           # 构建脚本
│   └── version.js     # 版本控制
├── dist/             # 编译输出
└── CHANGELOG.md      # 更新日志
```

### 开发指南

1. **添加新组件**
   - 在 `src/documents/webComCx` 下创建组件文档
   - 编写组件的属性、事件、插槽说明
   - 添加代码片段和示例

2. **修改现有组件**
   - 更新组件文档
   - 修改代码片段
   - 更新版本号

3. **发布新版本**
   - 更新版本号
   - 编写更新日志
   - 构建并打包
   - 推送到仓库

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
- [更新日志](CHANGELOG.md)

## 常见问题

1. **插件无法激活？**
   - 检查 VS Code 版本是否满足要求
   - 确认是否在 .vue 文件中使用
   - 查看输出面板中的错误信息

2. **代码补全不工作？**
   - 确认文件类型是否为 .vue
   - 检查是否正确输入触发字符
   - 尝试手动触发补全 (Ctrl+Space)

3. **文档预览显示错误？**
   - 检查网络连接是否正常
   - 确认组件名称是否正确
   - 查看控制台错误信息

4. **版本发布失败？**
   - 确认是否有足够的权限
   - 检查 git 配置是否正确
   - 查看错误日志进行修复
