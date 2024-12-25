# calcAtt 函数

## 描述
计算属性函数，用于处理和计算对象的属性值。

## 语法
```javascript
calcAtt(att)
```

## 参数
- `att` (Object): 需要计算的属性对象

## 返回值
返回计算后的属性对象

## 示例
```javascript
// 计算属性示例
const att = {
    name: 'test',
    value: 100
};
cx.AttBase.calcAtt(att);
```

## 注意事项
- 在计算属性时会处理属性对象的各个字段
- 可能会触发属性的相关事件
- 需要确保传入的属性对象格式正确