# changed 函数

## 描述
变更处理函数，用于处理属性变更后的相关操作。

## 语法
```javascript
changed(att, field)
```

## 参数
- `att` (Object): 发生变更的属性对象
- `field` (String): 变更的字段名

## 返回值
无返回值

## 示例
```javascript
// 属性变更处理示例
const att = {
    name: 'test',
    value: 100
};
cx.AttBase.changed(att, 'value');
```

## 注意事项
- 在属性变更时会触发相关的事件
- 可能会影响到其他相关联的属性
- 需要确保传入的属性对象和字段名有效