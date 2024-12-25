# toJSON

转换为JSON。

## 语法

```javascript
Converter.toJSON(data)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| data | String\|Object\|Null | 待转换数据 |

## 返回值

| 类型 | 描述 |
|------|------|
| String\|Object\|Null | 转换后的JSON数据 |

## 描述

将字符串或对象转换成JSON。转换规则如下:

1. 当输入为字符串时:
   - 如果可以解析为JSON,则返回解析后的对象
   - 如果不能解析为JSON,则返回原始字符串

2. 当输入为对象时:
   - 为其每个字符串类型的属性值尝试JSON转换
   - 不能转换为JSON的值保持原样

3. 当输入为null时返回null

## 示例

```javascript
// 字符串转JSON
const jsonStr = '{"name": "test", "age": 25}';
const obj = cx.converter.toJSON(jsonStr);
console.log(obj); // 输出: {name: 'test', age: 25}

// 无效JSON字符串
const invalidJson = 'not a json';
const result = cx.converter.toJSON(invalidJson);
console.log(result); // 输出: 'not a json'

// 对象处理
const data = {
  info: '{"type": "user", "id": 1}',
  name: 'test',
  settings: '{"theme": "dark"}'
};
const converted = cx.converter.toJSON(data);
console.log(converted);
/* 输出:
{
  info: {type: 'user', id: 1},
  name: 'test',
  settings: {theme: 'dark'}
}
*/

// 处理null值
const nullResult = cx.converter.toJSON(null);
console.log(nullResult); // 输出: null
``` 