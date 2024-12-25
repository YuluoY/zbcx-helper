# numberize 函数

## 描述
数值化函数，用于将值转换为数值类型。

## 语法
```javascript
numberize(att, value)
```

## 参数
- `att` (Object): 属性对象
- `value` (*): 需要转换的值

## 返回值
返回转换后的数值

## 示例
```javascript
// 数值化示例
const att = {
    name: 'test',
    type: 'number',
    precision: 2
};
const number = cx.AttBase.numberize(att, '123.456');
```

## 注意事项
- 会处理数值的精度
- 可以处理字符串形式的数字
- 会处理无效输入的情况