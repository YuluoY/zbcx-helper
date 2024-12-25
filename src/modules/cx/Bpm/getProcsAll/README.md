# getProcsAll

取所有的流程信息

## 返回值

- (Promise) - 返回包含所有流程信息的Promise对象

## 示例

```javascript
// 获取所有流程信息
cx.Bpm.getProcsAll().then(procs => {
  console.log("All processes:", procs);
});
