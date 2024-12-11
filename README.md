# 智博创享代码补全插件

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![VS Code](https://img.shields.io/badge/VS%20Code-1.60+-green.svg)
![License](https://img.shields.io/badge/license-MIT-orange.svg)

## 📝 简介

智博创享代码补全插件是一个专为智博创享系统开发的 Visual Studio Code 扩展。它提供了智能的代码补全功能，帮助开发者更快速、更准确地编写代码。

## ✨ 主要特性

### 🔸 基础模块补全 (cx.base)
- 工具函数自动补全
- 函数参数提示
- 返回值类型提示
- 智能文档提示

### 🔸 服务器模块补全 (cx.svr)
- 数据操作函数补全
- 服务器交互函数补全
- 完整的参数类型检查

### 🔸 UI组件补全 (cxcoms)
- 组件标签自动补全
- 属性智能提示
- 代码片段快速插入
- 实时文档预览

## 🚀 快速开始

### 安装
1. 打开 VS Code
2. 按下 `Ctrl+P` 打开命令面板
3. 输入以下命令：
   ```
   ext install zbcx-code-complete
   ```

### 使用方法

#### 基础模块
```javascript
// 输入 'cx.' 触发补全
cx.base.defVal()
cx.base.showMsg()
```

#### 服务器模块
```javascript
// 数据操作示例
cx.svr.data.query()
cx.svr.data.update()
```

#### UI组件
```html
<!-- 在 template 中输入 '<cx' 触发补全 -->
<cx-button type="primary">按钮</cx-button>
```

## 📖 补全规则

### 触发字符
- 基础模块：`cx.`
- 组件模块：`<`, `<c`, `<cx`, `cx-`

### 补全类型
- 函数：显示为紫色图标
- 变量：显示为蓝色方块图标
- 组件：显示为代码片段图标

## 🛠️ 配置选项

在 VS Code 的 settings.json 中可以自定义以下配置：

```json
{
  "zbcx.enableSnippets": true,
  "zbcx.showDocumentation": true
}
```

## 🔍 问题反馈

如果您在使用过程中遇到任何问题，或有任何建议，请通过以下方式反馈：

1. 在 GitHub 上提交 Issue
2. 发送邮件至 support@example.com

## 📄 许可证

本项目基于 MIT 许可证开源。

## 🔄 更新日志

### v1.0.0
- 实现基础模块代码补全
- 实现服务器模块代码补全
- 实现UI组件代码补全
- 添加智能文档提示
- 优化代码片段体验