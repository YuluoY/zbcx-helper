# getProcKey

根据流程ID取流程的Key

## 参数

- `procId` (String) - 流程ID

## 返回值

- (String) - 流程的Key

## 示例

```javascript
// 获取流程Key
const procKey = cx.Bpm.getProcKey("process123");
console.log("Process Key:", procKey);
``` 