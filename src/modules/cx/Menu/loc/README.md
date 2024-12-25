# loc

取多语言字符串。

## 语法

```javascript
static loc(func: Object): string
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| func | Object | 菜单信息对象 |

## 返回值

返回当前语言环境下的菜单文本。

## 示例

```javascript
// 获取单个菜单项的多语言文本
const menuItem = {
  id: '1',
  name: '系统管理',
  name_en: 'System Management',
  name_zh: '系统管理'
};
const menuText = cx.menu.loc(menuItem);

// 在遍历菜单树时使用
const menuTree = cx.menu.funcTree();
menuTree.forEach(item => {
  const localizedName = cx.menu.loc(item);
  console.log(localizedName);
});
```

## 注意事项

- 根据当前系统语言环境返回对应的文本
- 如果找不到对应语言的文本，将返回默认文本
- 菜单对象需要包含相应语言的名称字段（如 name_en, name_zh 等）
``` 