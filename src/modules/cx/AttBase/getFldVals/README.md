# getDispFld 函数

## 描述
获取显示字段函数，用于获取属性的显示字段名。

## 语法
```javascript
getDispFld(att)
```

## 参数
- `att` (Object): 属性对象

## 返回值
返回显示字段名

## 示例
```javascript
// 获取显示字段示例
const att = {
    name: 'test',
    displayField: 'label'
};
const displayField = cx.AttBase.getDispFld(att);
```

## 注意事项
- 通常用于复杂对象的显示
- 如果未指定显示字段，可能返回默认字段
- 显示字段可以是嵌套路径