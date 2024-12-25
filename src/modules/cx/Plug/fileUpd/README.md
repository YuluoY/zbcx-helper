# fileUpd

修改文件信息。

## 语法

```javascript
static fileUpd(params: Object)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| params | Object | 参数对象 |
| params.att | Object | 文件属性 |

## 返回值

无

## 示例

```javascript
// 修改文件信息
cx.plug.fileUpd({
  att: {
    // 文件属性
  }
});
```

## 注意事项

- 需要提供正确的文件属性
- 修改操作会同步更新文件的相关信息
- 不能修改为已存在的文件名
- 修改成功后需要刷新相关视图
  </rewritten_file> 