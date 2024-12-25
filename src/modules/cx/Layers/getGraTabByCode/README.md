# getGraTabByCode

根据图层号获取关联图形表信息，用entity表tabgrp关联。

## 语法

```javascript
getGraTabByCode(code: string): Object | Null
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| code | string | 图层编码 |

## 返回值

返回关联图形表entity信息对象。如果未找到对应的图形表信息，返回 `Null`。

## 示例

```javascript
const layers = new Layers(data);
const graTabInfo = layers.getGraTabByCode('5402012101');
console.log(graTabInfo);
// 输出示例：
// {
//   tableName: 'table_name',
//   entityInfo: { ... },
//   ...
// }
```

## 注意事项

- 图层编码必须是有效的10位编码
- 返回的对象包含图形表的完整关联信息
- 如果图层编码无效或未找到对应的图形表信息，返回 Null 