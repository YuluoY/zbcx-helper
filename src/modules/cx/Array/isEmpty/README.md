# isEmpty

判断数组是否为空

## 函数签名
```typescript
static isEmpty(arr: Array): boolean
```

## 描述
判断数组是否为空（长度为0）。这是一个静态方法。

## 参数
- `arr`: Array
  - 要检查的数组

## 返回值
- 类型：`boolean`
- 描述：如果数组为空返回true，否则返回false

## 示例
```javascript
let arr1 = [];
let isEmpty1 = cx.array.isEmpty(arr1);
// isEmpty1 是 true

let arr2 = [1, 2, 3];
let isEmpty2 = cx.array.isEmpty(arr2);
// isEmpty2 是 false
```