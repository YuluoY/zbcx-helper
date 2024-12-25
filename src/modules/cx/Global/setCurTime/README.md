# setCurTime 方法

设置当前时间。

## 语法

```js
$g.setCurTime(date)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| date | Date | 要设置的时间 |

## 返回值

无

## 示例

```js
// 设置当前时间为特定日期
const newDate = new Date(2024, 0, 1, 12, 0, 0);
$g.setCurTime(newDate);

// 获取设置后的时间
const currentTime = $g.getCurTime();
console.log(currentTime); // 输出: 2024-01-01T12:00:00

// 设置为当前系统时间
$g.setCurTime(new Date());
```

## 注意事项

1. 参数必须是有效的 Date 对象
2. 此方法会影响 getCurTime() 的返回值
3. 通常用于测试或特殊场景，生产环境中谨慎使用
4. 如果传入无效参数，可能会抛出错误
``` 