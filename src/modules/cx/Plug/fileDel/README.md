# fileDel

删除文件。

## 语法

```javascript
static fileDel(params: Object)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| params | Object | 参数对象 |
| params.context | Object | 上下文 |
| params.att | Object | 文件属性 |
| params.att.filename | Object | 文件名 |

## 返回值

无

## 示例

```javascript
// 删除文件
cx.plug.fileDel({
  context: contextObj,
  att: {
    filename: 'example.txt'
  }
});
```

## 注意事项

- 需要提供正确的文件名
- 删除操作不可逆，请谨慎操作
- 建议在删除前进行确认
- 删除成功后需要刷新相关视图
  </rewritten_file> 