# append

添加多个元素到数组

## 函数签名
```typescript
static append(arr: Array, ...elements: any[]): Object
```

## 描述
将一个或多个元素添加到指定数组中。这是一个静态方法，可以一次性添加多个元素。

## 参数
- `arr`: Array
  - 目标数组
- `...elements`: any[]
  - 变参（支持多个元素），要添加的元素列表

## 返回值
- 类型：`Object`
- 描述：返回 this

## 示例
```javascript
let arr = [1, 2];
cx.array.append(arr, 3, 4, 5);
// arr 现在是 [1, 2, 3, 4, 5]
```