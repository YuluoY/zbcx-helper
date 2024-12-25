# qrysAttGra

批量查询图形和属性对象

## 方法签名
```typescript
static qrysAttGra(list: Array<EttInf>) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| list | Array<EttInf> | 是 | 图形属性序列 |
| EttInf | Object | 是 | 实体信息对象 |
| ├─ major | Number | 是 | 实体主类型 |
| ├─ minor | Number | 是 | 实体子类型 |
| └─ id | Number | 是 | 实体id |

## 返回值
Promise 对象，返回[{major:, minor:, id:, gra:, att:}, ...]

## 功能描述
批量查询图形和属性对象。 

## 示例
```javascript
const list = [{ major: 1, minor: 2, id: 123 }];
cx.svr.feature.qrysAttGra(list).then(result => console.log('查询成功:', result)).catch(err => console.error('查询失败', err));
```