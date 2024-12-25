# listToMap

列表转换为映射

## 函数签名
```typescript
static listToMap(arr: Array, key: string): Object
```

## 描述
将数组转换为以指定键值为键的映射对象。这是一个静态方法，返回一个新的对象。

## 参数
- `arr`: Array
  - 源数组
- `key`: string
  - 用作映射键的属性名

## 返回值
- 类型：`Object`
- 描述：返回转换后的映射对象

## 示例
```javascript
let arr = [
  {id: 'a', value: 1},
  {id: 'b', value: 2},
  {id: 'c', value: 3}
];
let map = cx.array.listToMap(arr, 'id');
``` 