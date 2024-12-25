# getOper

产生DataGrid操作信息

## 方法签名
```typescript
static getOper(name: String, title: String, icon: String) => Object
```

## 参数说明
- `name` (String): 名称
- `title` (String): 显示标题
- `icon` (String): 图标Class

## 返回值
Object - 操作信息对象

## 功能描述
产生DataGrid操作信息。

## 示例
```typescript
const oper = cx.datagrid.getOper('edit', '编辑', 'icon-edit');
``` 