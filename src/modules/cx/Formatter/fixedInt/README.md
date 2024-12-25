# fixedInt 方法

固定长度整数格式化。将数字格式化为指定长度的字符串，不足位数在前面补0。

## 语法

```js
cx.formatter.fixedInt(value, len)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| value | Number | 值 |
| len | Number | 长度 |

## 返回值

(String) - 返回格式化后的固定长度字符串

## 示例

```js
// 格式化数字为3位
console.log(cx.formatter.fixedInt(5, 3)); 
// 输出: "005"

// 格式化数字为4位
console.log(cx.formatter.fixedInt(42, 4)); 
// 输出: "0042"

// 当数字位数超过指定长度时
console.log(cx.formatter.fixedInt(1234, 2)); 
// 输出: "1234"
```

## 注意事项

1. value 参数必须是数字类型
2. len 参数指定返回字符串的最小长度
3. 如果数字的位数超过指定长度，将返回原始数字的字符串形式
4. 如果传入的参数无效，可能会返回空字符串或抛出错误 