# duration 方法

时长格式化（单位：毫秒）。

## 语法

```js
cx.formatter.duration(durationInMillis, hideSecond)
```

## 参数

| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| durationInMillis | Number | 是 | - | 毫秒 |
| hideSecond | Boolean | 否 | false | 是否隐藏显示秒 |

## 返回值

(String) - 返回格式化后的时长字符串，格式为：
- 不隐藏秒时："HH:mm:ss"
- 隐藏秒时："HH:mm"

## 示例

```js
// 格式化时长（显示秒）
console.log(cx.formatter.duration(3661000)); 
// 输出: "01:01:01"

// 格式化时长（隐藏秒）
console.log(cx.formatter.duration(3661000, true)); 
// 输出: "01:01"

// 格式化短时长
console.log(cx.formatter.duration(45000)); 
// 输出: "00:00:45"

// 格式化长时长
console.log(cx.formatter.duration(7323000)); 
// 输出: "02:02:03"
```

## 注意事项

1. durationInMillis 参数必须是数字类型，表示毫秒数
2. 返回的时间格式使用24小时制
3. 所有数字位都会补零显示
4. 如果传入的参数无效，可能会返回空字符串或抛出错误