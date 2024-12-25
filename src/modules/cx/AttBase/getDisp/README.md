# getDisp 函数

## 描述
获取显示值函数，用于获取属性的显示值。

## 语法
```javascript
getDisp(att, value)
```

## 参数
- `att` (Object): 属性对象
- `value` (*): 需要显示的值

## 返回值
返回格式化后的显示值

## 示例
```javascript
// 获取显示值示例
const att = {
    name: 'test',
    type: 'number',
    format: '0.00'
};
const displayValue = cx.AttBase.getDisp(att, 123.456);
```

## 注意事项
- 会根据属性的格式化规则处理值
- 支持多种数据类型的显示格式化
- 可以自定义显示格式