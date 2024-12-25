# checkValue 函数

## 描述
检查值函数，用于验证属性值是否符合要求。

## 语法
```javascript
checkValue(att, value)
```

## 参数
- `att` (Object): 需要检查的属性对象
- `value` (*): 需要检查的值

## 返回值
- `Boolean`: 返回检查结果，true表示值有效，false表示值无效

## 示例
```javascript
// 检查值示例
const att = {
    name: 'test',
    type: 'number',
    min: 0,
    max: 100
};
const result = cx.AttBase.checkValue(att, 50);
```

## 注意事项
- 会根据属性的类型进行相应的值检查
- 可能会检查值的范围、格式等
- 建议在设置值之前进行检查