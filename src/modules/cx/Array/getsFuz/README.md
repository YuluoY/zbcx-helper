# getsFuz

模糊获取元素

## 函数签名
```typescript
static getsFuz(arr: Array, key: string, value: string): Array
```

## 描述
从数组中模糊匹配获取元素。这是一个静态方法，返回所有指定键的值包含目标字符串的元素。

## 参数
- `arr`: Array
  - 要搜索的数组
- `key`: string
  - 要匹配的键名
- `value`: string
  - 要模糊匹配的字符串

## 返回值
- 类型：`Array`
- 描述：返回包含所有模糊匹配元素的数组

## 示例
```javascript
let arr = [
  {name: 'apple', price: 1},
  {name: 'banana', price: 2},
  {name: 'pineapple', price: 3}
];
let result = cx.array.getsFuz(arr, 'name', 'apple');
// result 是 [{name: 'apple', price: 1}, {name: 'pineapple', price: 3}]
``` 