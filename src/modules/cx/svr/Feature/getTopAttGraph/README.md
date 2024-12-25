# getTopAttGraph

获取点的拓扑线图形属性对象序列

## 方法签名
```typescript
static getTopAttGraph(major: Number, minor: Number, id: Number) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| major | Number | 是 | 点实体主类型 |
| minor | Number | 是 | 点实体子类型 |
| id | Number | 是 | 点实体id |

## 返回值
Promise 对象，返回数据结构[{att:, gra:}, ...]

## 功能描述
获取点的拓扑线图形属性对象序列。 

## 示例
```javascript
const major = 1, minor = 2, id = 123;
cx.svr.feature.getTopAttGraph(major, minor, id).then(graph => console.log('拓扑线图形属性:', graph)).catch(err => console.error('获取失败', err));
```