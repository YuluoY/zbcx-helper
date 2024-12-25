# getList

取全部图层对象序列。

## 语法

```javascript
getList(): Array.<Object>
```

## 参数

无

## 返回值

返回包含所有图层定义对象的数组。每个对象包含完整的图层信息。

## 示例

```javascript
const layers = new Layers(data);
const allLayers = layers.getList();
console.log(allLayers);
// 输出示例：
// [
//   { 
//     code: '5402012101',
//     name: '排水雨水弯头',
//     domain: '5402',
//     category: '01',
//     type: '21',
//     ...
//   },
//   ...
// ]
```

## 注意事项

- 返回的数组包含所有已初始化的图层定义
- 如果没有初始化数据，返回空数组
- 每个图层对象包含完整的图层定义信息，包括编码、名称、域、类别等 