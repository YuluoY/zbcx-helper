# getCharCol

将指定的自然数转换为26进制表示。

## 语法

```javascript
getCharCol(num) → {String}
```

## 参数

- `num` (Number): 自然数

## 返回值

- String: 自然数转成的字母

## 描述

将自然数转换为26进制表示，映射关系：[0-25] -> [A-Z]。

## 示例

```javascript
const char = cx.util.getCharCol(0);
console.log('字母:', char);
```

## 注意事项

- 此方法为静态方法，可以直接调用 