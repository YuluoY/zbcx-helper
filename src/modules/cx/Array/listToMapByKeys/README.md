# listToMapByKeys

根据多个键值将列表转换为映射

## 函数签名
```typescript
static listToMapByKeys(arr: Array, keys: string[]): Object
```

## 描述
将数组转换为以多个键值组合为键的映射对象。这是一个静态方法，返回一个新的对象。

## 参数
- `arr`: Array
  - 源数组
- `keys`: string[]
  - 用作映射键的属性名数组

## 返回值
- 类型：`Object`
- 描述：返回转换后的映射对象，键名为多个属性值的组合

## 示例
```javascript
let arr = [
  {id: 1, type: 'A', value: 100},
  {id: 1, type: 'B', value: 200},
  {id: 2, type: 'A', value: 300}
];
let map = cx.array.listToMapByKeys(arr, ['id', 'type']);
``` 