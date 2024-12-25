# toString

转换为字符串

## 函数签名
```typescript
static toString(arr: Array): string
```

## 描述
将数组转换为字符串。这是一个静态方法，使用逗号分隔数组元素。

## 参数
- `arr`: Array
  - 要转换的数组

## 返回值
- 类型：`string`
- 描述：返回数组转换后的字符串

## 示例
```javascript
let arr = [1, 2, 3, 4, 5];
let str = cx.array.toString(arr);
// str 是 "1,2,3,4,5"

let arr2 = ['hello', 'world'];
let str2 = cx.array.toString(arr2);
// str2 是 "hello,world"
``` 