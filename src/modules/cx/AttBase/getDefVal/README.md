# getDefVal 函数

## 描述
获取默认值函数，用于获取属性的默认值。

## 语法
```javascript
getDefVal(att)
```

## 参数
- `att` (Object): 属性对象

## 返回值
返回属性的默认值

## 示例
```javascript
// 获取默认值示例
const att = {
    name: 'test',
    type: 'number',
    defaultValue: 0
};
const defaultValue = cx.AttBase.getDefVal(att);
```

## 注意事项
- 会根据属性的类型返回相应的默认值
- 如果没有设置默认值，会返回该类型的空值
- 可能会使用表达式计算默认值