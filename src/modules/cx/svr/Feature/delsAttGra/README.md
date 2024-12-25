# delsAttGra

批量删除图形和属性对象

## 方法签名
```typescript
static delsAttGra(list: Array<ZyInfo>) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| list | Array<ZyInfo> | 是 | 待删除资源信息序列 |
| ZyInfo | Object | 是 | 数据对象 |
| ├─ major | Number | 是 | 实体主类型 |
| ├─ minor | Number | 是 | 实体子类型 |
| ├─ id | Number | 是 | 实体id |
| └─ retAtt | Number | 否 | 是否返回整条记录，0-不返回，1-返回 |

## 返回值
Promise 对象，返回[{major:, minor:, id:, [gra]:, [att]:}, ...]

## 功能描述
批量删除图形和属性对象。 

## 示例
```javascript
const list = [{ major: 1, minor: 2, id: 123 }];
cx.svr.feature.delsAttGra(list).then(result => console.log('删除成功:', result)).catch(err => console.error('删除失败', err));
```