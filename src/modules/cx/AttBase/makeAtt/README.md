# makeAtt 函数

## 描述
生成属性函数，用于创建新的属性对象。

## 语法
```javascript
makeAtt(config)
```

## 参数
- `config` (Object): 属性配置对象

## 返回值
返回新创建的属性对象

## 示例
```javascript
// 生成属性示例
const config = {
    name: 'test',
    type: 'string',
    defaultValue: '',
    required: true
};
const att = cx.AttBase.makeAtt(config);
```

## 注意事项
- 会根据配置创建完整的属性对象
- 包含属性的所有必要字段和方法
- 可以指定属性的验证规则和默认值