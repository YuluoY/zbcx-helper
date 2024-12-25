# onError

错误处理。

## 语法

```js
Config.onError(err)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| err | Error | 错误对象 |

## 返回值

无

## 示例

```js
// 处理错误
try {
  // 可能出错的代码
} catch (err) {
  cx.config.onError(err);
}
``` 