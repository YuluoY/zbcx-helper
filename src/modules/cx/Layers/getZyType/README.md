# getZyType

获取资源类别定义对象。

## 语法

```javascript
getZyType(zyTypeCode: string): Object | Null
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| zyTypeCode | string | 资源类型编码 |

## 返回值

返回资源类别layer对象。不同类别下可能有同类资源，返回第一个。如果未找到对应的资源类型，返回 `Null`。

## 示例

```javascript
const layers = new Layers(data);
const zyType = layers.getZyType('54022101');
console.log(zyType);
// 输出示例：
// {
//   code: '54022101',
//   name: '排水雨水弯头',
//   category: '540201',
//   ...
// }
```

## 注意事项

- 资源类型编码必须是有效的编码
- 如果多个类别下存在相同的资源类型，只返回第一个匹配的对象
- 如果未找到对应的资源类型定义，返回 Null 