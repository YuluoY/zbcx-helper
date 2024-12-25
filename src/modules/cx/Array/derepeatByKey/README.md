# derepeatByKey

根据指定键值去重

## 函数签名
```typescript
static derepeatByKey(arr: Array, key: string): Object
```

## 描述
根据对象中的指定键值对数组进行去重。这是一个静态方法，会保留每个键值的第一次出现，删除后续的重复项。

## 参数
- `arr`: Array
  - 要去重的数组
- `key`: string
  - 用于去重的键名

## 返回值
- 类型：`Object`
- 描述：返回 this

## 示例
```javascript
let arr = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
  {id: 1, name: 'c'}
];
cx.array.derepeatByKey(arr, 'id');
``` 