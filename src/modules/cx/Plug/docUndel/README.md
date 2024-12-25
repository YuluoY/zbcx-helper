# docUndel

恢复文档。

## 语法

```javascript
static docUndel(params: Object)
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
// 恢复文档
cx.plug.docUndel({
  context: contextObj,
  att: {
    id: 'doc123'
  }
});
```

## 注意事项

- 需要提供正确的文档ID
- 只能恢复已删除的文档
- 恢复操作会还原文档的所有属性
- 恢复成功后需要刷新相关视图
- 建议在恢复前确认文档状态 