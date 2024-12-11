确认信息。

**说明**: 
- 显示确认对话框
- 返回Promise对象
- ok执行resolve
- cancel执行reject

Example:
```javascript
// 基本用法
try {
  await cx.base.cfmMsg('确认删除这条记录吗？')
  // 用户点击了确认
  await deleteRecord()
} catch {
  // 用户点击了取消
  console.log('用户取消了操作')
}

// 链式调用
cx.base.cfmMsg('是否继续？')
  .then(() => {
    // 用户点击了确认
    console.log('继续操作')
  })
  .catch(() => {
    // 用户点击了取消
    console.log('取消操作')
  })
```