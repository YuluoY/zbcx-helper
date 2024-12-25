# gets

获取多个元素

## 函数签名
```typescript
static gets(arr: Array, key: string, value: any): Array
```

## 描述
从数组中获取所有指定键值匹配的元素。这是一个静态方法，返回一个包含所有匹配元素的新数组。

## 参数
- `arr`: Array
  - 要搜索的数组
- `key`: string
  - 要匹配的键名
- `value`: any
  - 要匹配的值

## 返回值
- 类型：`Array`
- 描述：返回包含所有匹配元素的数组

## 示例
```javascript
let arr = [
  {type: 'A', value: 1},
  {type: 'B', value: 2},
  {type: 'A', value: 3}
];
let result = cx.array.gets(arr, 'type', 'A');
// result 是 [{type: 'A', value: 1}, {type: 'A', value: 3}]
```