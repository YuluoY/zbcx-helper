# getLyrsByGraMajMin

根据图形表主、子类型取关联的图层定义。

## 语法

```javascript
getLyrsByGraMajMin(graMajor: number, graMinor: number): Array.<Object>
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| graMajor | number | 图形表主类型 |
| graMinor | number | 图形表子类型 |

## 返回值

返回与指定主、子类型关联的图层定义对象数组。如果未找到匹配的图层，返回空数组。

## 示例

```javascript
const layers = new Layers(data);
const relatedLayers = layers.getLyrsByGraMajMin(1, 2);
console.log(relatedLayers);
// 输出示例：
// [
//   {
//     code: '5402012101',
//     name: '排水雨水弯头',
//     graMajor: 1,
//     graMinor: 2,
//     ...
//   },
//   ...
// ]
```

## 注意事项

- 主类型和子类型必须是有效的数字
- 返回的数组包含所有匹配主、子类型的图层定义
- 如果没有找到匹配的图层，返回空数组 