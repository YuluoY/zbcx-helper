# initFlds 函数

## 描述
初始化字段函数，用于初始化属性的字段。

## 语法
```javascript
initFlds(att)
```

## 参数
- `att` (Object): 属性对象

## 返回值
返回初始化后的属性对象

## 示例
```javascript
// 初始化字段示例
const att = {
    name: 'test',
    fields: {
        id: { type: 'number' },
        name: { type: 'string' }
    }
};
cx.AttBase.initFlds(att);
```

## 注意事项
- 会为每个字段设置默认值
- 可能会初始化字段的验证规则
- 会处理字段的依赖关系