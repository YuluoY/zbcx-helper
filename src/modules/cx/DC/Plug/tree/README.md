# tree

把记录数据配置的插件变成树状结构(用于菜单、共具体、右边键)

## 方法签名
```typescript
static tree(result: Array, dbPlugs: Array, rootGrpName: String) => Array
```

## 参数说明
- `result` (Array): 返回结果
- `dbPlugs` (Array): 数据库配置的插件列表(详细见表 cx-cmdtool)
- `rootGrpName` (String): 组名

## 返回值
返回类型：Array
返回树结构 {title: String, icon: String, visible: boolean, disabled: boolean, plugin: String, params: String, show: String, enable: String, tooltip: String, children: Array}

## 功能描述
把记录数据配置的插件变成树状结构(用于菜单、共具体、右边键)。

## 示例
```typescript
// 构建插件树结构
const treeData = cx.dc.Plug.tree(
    [],
    dbPluginsList,
    'rootGroup'
);

// 使用树结构
console.log(treeData[0].title); // 第一个节点的标题
console.log(treeData[0].children); // 第一个节点的子节点
``` 