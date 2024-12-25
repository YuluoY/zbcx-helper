# startWithTmpl

使用模板启动流程

## 参数

- `proc` (Object) - 流程信息
- `startPlugin` (String) - 处理启动Form的插件名
- `params` (Object) - 发起流程的参数
  - `att` (Object) - [可选] 已经存在的属性
  - `onBeforeAdd` (Function) - [可选] 回调函数-发起流程成功-function(id)

## 示例

```javascript
// 使用模板启动流程
cx.Bpm.startWithTmpl({
  id: "proc123",
  name: "采购审批流程"
}, "startForm", {
  att: {
    department: "IT",
    amount: 1000
  },
  onBeforeAdd: (id) => {
    console.log("Process started with ID:", id);
  }
});