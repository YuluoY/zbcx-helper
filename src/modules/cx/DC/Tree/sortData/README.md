# sortData

对数据进行排序

## 方法签名
```typescript
static sortData(data: Array, orderby: Object)
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| data | Array | 是 | - | 待排序的数组 |
| orderby | Object | 是 | - | 排序对象 {key: String, desc: Boolean} |

## 返回值
无返回值，直接对传入的数组进行排序

## 功能描述
对数据进行排序。

## 示例
```typescript
// 对数据进行排序
const dataArray = [{name: 'b'}, {name: 'a'}, {name: 'c'}];
cx.dc.Tree.sortData(dataArray, {
  key: 'name',
  desc: false
});
// dataArray 现在已按name字段升序排序
``` 