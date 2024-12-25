# filterOptions 函数

## 描述
过滤选项函数，用于根据条件过滤属性的选项列表。

## 语法
```javascript
filterOptions(att, filter)
```

## 参数
- `att` (Object): 属性对象
- `filter` (Object): 过滤条件

## 返回值
返回过滤后的选项列表

## 示例
```javascript
// 过滤选项示例
const att = {
    name: 'test',
    options: [
        {value: 1, label: 'Option 1'},
        {value: 2, label: 'Option 2'},
        {value: 3, label: 'Option 3'}
    ]
};
const filter = {
    label: 'Option'
};
const filteredOptions = cx.AttBase.filterOptions(att, filter);
```

## 注意事项
- 可以根据多个条件进行过滤
- 支持模糊匹配和精确匹配
- 过滤条件可以是对象或函数