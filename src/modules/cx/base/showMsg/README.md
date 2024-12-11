显示信息。

**说明**: 
- 用于显示各种类型的提示信息
- type参数可以指定消息类型

Example:
```javascript
// 基本使用
cx.base.showMsg('操作成功')  // 显示普通提示信息
cx.base.showMsg('操作成功', 'success')  // 显示成功提示
cx.base.showMsg('请注意', 'warning')  // 显示警告提示
cx.base.showMsg('提示信息', 'info')  // 显示信息提示
cx.base.showMsg('出错了', 'error')  // 显示错误提示
```