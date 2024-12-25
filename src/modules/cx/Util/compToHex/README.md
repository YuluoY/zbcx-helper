# compToHex

10进制转换为16进制(2位)。

## 语法

```javascript
compToHex(comp) → {string}
```

## 参数

- `comp` (Number): 10进制数

## 返回值

- string: 16进制数

## 描述

将10进制数转换为2位的16进制表示。

## 示例

```javascript
const hex = cx.util.compToHex(255);
console.log('16进制:', hex);
```

## 注意事项

- 此方法为静态方法，可以直接调用 