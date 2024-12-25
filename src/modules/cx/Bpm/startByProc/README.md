# startByProc

根据proc(表proc)启动流程(需要取流程定义,最后再启动)

## 参数

- `proc` (Object) - 流程信息
- `variables` (Object) - [可选] 流程变量

## 返回值

- (Promise) - 返回启动流程的Promise对象

## 示例

```javascript
// 启动流程
cx.Bpm.startByProc({
  id: "proc123",
  name: "采购审批流程"
}, {
  amount: 1000,
  department: "IT"
}).then(result => {
  console.log("Process started:", result);
});