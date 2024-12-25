# remainTime 方法

剩余时间格式化。将秒数转换为剩余时间的简短描述。

## 语法

```js
cx.formatter.remainTime(seconds)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| seconds | Number | 剩余秒数 |

## 返回值

(String) - 返回格式化后的剩余时间描述字符串，格式说明：
- h: 小时
- m: 分钟
- s: 秒

## 示例

```js
// 格式化剩余时间
console.log(cx.formatter.remainTime(3661)); 
// 输出: "1h1m"

// 格式化只有分钟和秒的时间
console.log(cx.formatter.remainTime(125)); 
// 输出: "2m5s"

// 格式化只有秒的时间
console.log(cx.formatter.remainTime(45)); 
// 输出: "45s"

// 格式化较长时间
console.log(cx.formatter.remainTime(7323)); 
// 输出: "2h2m"
```

## 注意事项

1. seconds 参数必须是数字类型
2. 返回的字符串使用简短的时间单位表示(h/m/s)
3. 支持的最大单位是小时
4. 如果传入的参数无效，可能会返回空字符串或抛出错误
``` 