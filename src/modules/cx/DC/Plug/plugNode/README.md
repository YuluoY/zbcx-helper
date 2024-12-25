# plugNode

得到一个数据中心插件的对象

## 方法签名
```typescript
static plugNode(title: string, show: string | function, enable: string | function, plugin: string | function, node: string, icon: string) => cx.dc.Plug.plugNode
```

## 参数说明
- `title` (String): 标题
- `show` (String | Function): 显示该插件的条件表达式或者判断函数 - function(values)
- `enable` (String | Function): 使能该插件的条件表达式或者判断函数 - function(values)
- `plugin` (String | Function): 插件名称 或者 回调函数 - function(values)
- `node` (String): 指定使用的树节点
- `icon` (String): 图标

## 返回值
返回类型：cx.dc.Plug.plugNode

## 功能描述
得到一个数据中心插件的对象。

## 示例
```typescript
// 使用条件表达式
const node = cx.dc.Plug.plugNode(
    '编辑',
    'status == 1',
    'canEdit == true',
    'editFunction',
    'treeNode1',
    'edit-icon'
);

// 使用函数
const node = cx.dc.Plug.plugNode(
    '删除',
    (values) => values.status === 1,
    (values) => values.canDelete,
    (values) => handleDelete(values),
    'treeNode1',
    'delete-icon'
);
``` 