# money 方法 （unvaild）

金额格式化。将数字格式化为金额显示格式，保留两位小数。

## 语法

```js
cx.formatter.money(value)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| value | Number | 金额值 |

## 返回值

(String) - 返回格式化后的金额字符串，保留两位小数

## 示例

```js
// 格式化整数金额
console.log(cx.formatter.money(1234)); 
// 输出: "1,234.00"

// 格式化带小数的金额
console.log(cx.formatter.money(1234.5)); 
// 输出: "1,234.50"

// 格式化小额金额
console.log(cx.formatter.money(0.99)); 
// 输出: "0.99"

// 格式化大额金额
console.log(cx.formatter.money(1234567.89)); 
// 输出: "1,234,567.89"
```

## 注意事项

1. value 参数必须是数字类型
2. 返回的金额格式固定保留两位小数
3. 整数部分每三位用逗号分隔
4. 如果传入的参数无效，可能会返回空字符串或抛出错误 