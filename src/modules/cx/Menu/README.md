# Menu

`Menu` 类提供了菜单相关的功能，包括菜单树的生成和多语言支持。

## 特点

- 静态方法调用，无需实例化
- 支持菜单树形结构生成
- 支持多语言文本处理
- 提供灵活的菜单数据处理功能

## 静态方法

### funcTree
根据 func 表数据，生成树形层级菜单。

### loc
获取菜单项的多语言文本。

## 使用示例

```javascript
// 生成菜单树
const menuTree = cx.menu.funcTree('admin');

// 获取菜单项的多语言文本
const menuText = cx.menu.loc(menuItem);
```

## 注意事项

- 所有方法都是静态方法，通过 `cx.menu` 直接调用
- 菜单树生成基于 func 表的数据结构
- 支持多语言环境下的菜单文本显示 