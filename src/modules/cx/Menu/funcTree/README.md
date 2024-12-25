# funcTree

根据 func 表数据，生成树形层级菜单。

## 语法

```javascript
static funcTree(grpName?: string): Array.<Object>
```

## 参数

| 参数名 | 类型 | 描述 | 是否可选 | 默认值 |
|--------|------|------|----------|---------|
| grpName | string | 根的组名称 | 是 | '' |

## 返回值

返回树形结构的菜单数组，每个节点包含完整的菜单项信息。

## 示例

```javascript
// 生成完整的菜单树
const fullMenuTree = cx.menu.funcTree();

// 生成指定组的菜单树
const adminMenuTree = cx.menu.funcTree('admin');

// 菜单树结构示例
// [
//   {
//     id: '1',
//     name: '系统管理',
//     children: [
//       {
//         id: '1-1',
//         name: '用户管理',
//         path: '/users'
//       },
//       {
//         id: '1-2',
//         name: '角色管理',
//         path: '/roles'
//       }
//     ]
//   },
//   ...
// ]
```

## 注意事项

- 如果不传入 grpName 参数，将生成完整的菜单树
- 返回的菜单树是一个多层级的数组结构
- 每个菜单节点都包含完整的属性信息
- 支持无限层级的菜单结构 