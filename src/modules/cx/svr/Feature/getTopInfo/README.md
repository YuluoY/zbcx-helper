# getTopInfo

获取拓扑线信息

## 方法签名
```typescript
static getTopInfo(major: Number, minor: Number, id: Number) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| major | Number | 是 | 点实体主类型 |
| minor | Number | 是 | 点实体子类型 |
| id | Number | 是 | 点实体id |

## 返回值
Promise 对象，返回数据结构[{major:, minor:, id:}, ...]

## 功能描述
获取拓扑线信息。 

## 示例
```javascript
const major = 1, minor = 2, id = 123;
cx.svr.feature.getTopInfo(major, minor, id).then(info => console.log('拓扑信息:', info)).catch(err => console.error('获取失败', err));
```