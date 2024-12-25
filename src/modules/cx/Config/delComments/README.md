# delComments

删除注释。

## 语法

```js
Config.delComments(text)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| text | String | 包含注释的文本 |

## 返回值

**类型:** String

返回去除注释后的文本。

## 示例

```js
// 删除文本中的注释
const cleanText = cx.config.delComments(text);
```