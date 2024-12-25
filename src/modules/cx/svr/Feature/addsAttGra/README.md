# addsAttGra

批量添加图形和属性对象

## 方法签名
```typescript
static addsAttGra(list: Array<AttGra>) => Promise
```

## 参数说明
| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| list | Array<AttGra> | 是 | 图形属性序列 |
| AttGra | Object | 是 | 数据对象 |
| ├─ major | Number | 是 | 实体主类型 |
| ├─ minor | Number | 是 | 实体子类型 |
| ├─ gra | Object | 是 | 图形对象 |
| ├─ att | Object | 是 | 属性对象 |
| └─ retAtt | Number | 否 | 是否返回整条记录，0-不返回，1-返回 |

## 返回值
Promise 对象，返回[{major:, minor:, [gra]:, [att]:}, ...]，gra中图形属性是geom，值是{type:, coordinates:}的geojson

## 功能描述
批量添加图形和属性对象。 

## 示例
```javascript
const list = [{ major: 1, minor: 2, gra: {}, att: {} }];
cx.svr.feature.addsAttGra(list).then(result => console.log('添加成功:', result)).catch(err => console.error('添加失败', err));
```