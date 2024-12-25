# getDefValExp 函数

## 描述
获取默认值表达式函数，用于获取属性的默认值表达式。

## 语法
```javascript
getDefValExp(att)
```

## 参数
- `att` (Object): 属性对象

## 返回值
返回属性的默认值表达式

## 示例
```javascript
// 获取默认值表达式示例
const att = {
    name: 'test',
    type: 'number',
    defaultExp: 'value * 2'
};
const defaultExp = cx.AttBase.getDefValExp(att);
```

## 注意事项
- 返回的表达式可以是字符串或函数
- 表达式可能包含变量和运算符
- 需要确保表达式的语法正确