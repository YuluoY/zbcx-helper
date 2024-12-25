# docDel

删除文档。

## 语法

```javascript
static docDel(params: Object)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| params | Object | 参数对象 |
| params.context | Object | 上下文 |
| params.att | Object | 文档属性 |
| params.att.id | Object | id |

## 返回值

无

## 示例

```javascript
// 删除文档
cx.plug.docDel({
  context: contextObj,
  att: {
    id: 'doc123'
  }
});
```

## 注意事项

- 需要提供正确的文档ID
- 删除操作不可逆，请谨慎操作
- 建议在删除前进行确认
- 删除成功后需要刷新相关视图
  </rewritten_file> 