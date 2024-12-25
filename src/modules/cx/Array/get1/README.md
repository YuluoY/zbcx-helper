# get1

获取单个元素

## 函数签名
```typescript
static get1(arr: Array, key: string, value: any): Object | null
```

## 描述
从数组中获取指定键值匹配的第一个元素。这是一个静态方法，如果找不到匹配元素则返回null。

## 参数
- `arr`: Array
  - 要搜索的数组
- `key`: string
  - 要匹配的键名
- `value`: any
  - 要匹配的值

## 返回值
- 类型：`Object | null`
- 描述：返回匹配的第一个元素，如果没有找到则返回null

## 示例
```javascript
let arr = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
  {id: 3, name: 'c'}
];
let result = cx.array.get1(arr, 'id', 2);
// result 是 {id: 2, name: 'b'}
``` 