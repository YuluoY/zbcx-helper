# makeEdit 函数

## 描述
生成编辑器函数，用于创建属性的编辑器。

## 语法
```javascript
makeEdit(att, options)
```

## 参数
- `att` (Object): 属性对象
- `options` (Object): 编辑器选项

## 返回值
返回编辑器对象

## 示例
```javascript
// 生成编辑器示例
const att = {
    name: 'test',
    type: 'string',
    editorType: 'text'
};
const editor = cx.AttBase.makeEdit(att, {
    placeholder: '请输入'
});
```

## 注意事项
- 会根据属性类型创建相应的编辑器
- 支持多种编辑器类型
- 可以自定义编辑器的外观和行为