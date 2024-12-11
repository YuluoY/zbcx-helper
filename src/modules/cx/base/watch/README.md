设置计时器，来监测条件满足时执行回调。

**说明**: 
- isReady为条件判断函数
- callBack为满足条件时的回调函数
- opts为配置选项，可以设置检查间隔时间和最大监听时长

Example:
```javascript
// 基本使用
cx.base.watch(
  () => someCondition === true,  // 条件判断
  () => console.log('条件满足'),  // 回调函数
  {
    time: 500,      // 检查间隔500ms
    maxTime: 5000,  // 最长等待5秒
    outBack: () => console.log('超时未满足条件')
  }
)
```