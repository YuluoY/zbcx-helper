# makeArr

创建数组

## 函数签名
```typescript
static makeArr(length: number, defaultValue?: any): Array
```

## 描述
创建指定长度的数组，可以设置默认值。这是一个静态方法，返回一个新的数组。

## 参数
- `length`: number
  - 数组的长度
- `defaultValue`: any (可选)
  - 数组元素的默认值，如果不指定则为undefined

## 返回值
- 类型：`Array`
- 描述：返回创建的新数组

## 示例
```javascript
// 创建长度为 3 的数组，不指定默认值
let arr1 = cx.array.makeArr(3);
// arr1 是 [undefined, undefined, undefined]

// 创建长度为 3 的数组，指定默认值为 0
let arr2 = cx.array.makeArr(3, 0);
// arr2 是 [0, 0, 0]

// 创建长度为 2 的数组，指定默认值为对象
let arr3 = cx.array.makeArr(2, {value: 0});
// arr3 是 [{value: 0}, {value: 0}]
``` 