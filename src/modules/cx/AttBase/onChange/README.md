# onChange 函数

## 描述
变更事件函数，用于处理属性值变更事件。

## 语法
```javascript
onChange(att, value, oldValue)
```

## 参数
- `att` (Object): 属性对象
- `value` (*): 新值
- `oldValue` (*): 旧值

## 返回值
无返回值

## 示例
```javascript
// 变更事件处理示例
const att = {
    name: 'test',
    type: 'number'
};
cx.AttBase.onChange(att, 100, 50);
```

## 注意事项
- 会在属性值变更时触发
- 可以处理值的验证和转换
- 可能会触发其他相关的事件