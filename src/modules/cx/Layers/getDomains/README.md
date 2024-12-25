# getDomains

获取资源域定义对象序列。

## 语法

```javascript
getDomains(): Array.<Object>
```

## 参数

无

## 返回值

返回包含所有资源域定义对象的数组。每个对象包含域的详细信息。

## 示例

```javascript
const layers = new Layers(data);
const domains = layers.getDomains();
console.log(domains);
// 输出示例：
// [
//   { code: '5401', name: '给水', ... },
//   { code: '5402', name: '排水', ... },
//   ...
// ]
```

## 注意事项

- 返回的数组按域编码排序
- 如果没有初始化数据，返回空数组
- 每个域对象包含完整的域定义信息 