# decode 函数

## 描述
解码函数，用于将编码后的值解码为原始值。

## 语法
```javascript
decode(att, value)
```

## 参数
- `att` (Object): 属性对象
- `value` (*): 需要解码的值

## 返回值
返回解码后的值

## 示例
```javascript
// 解码示例
const att = {
    name: 'test',
    type: 'string',
    encoding: 'base64'
};
const decodedValue = cx.AttBase.decode(att, 'SGVsbG8gV29ybGQ=');
```

## 注意事项
- 会根据属性的编码类型进行相应的解码操作
- 支持多种编码格式
- 需要确保传入的值格式正确