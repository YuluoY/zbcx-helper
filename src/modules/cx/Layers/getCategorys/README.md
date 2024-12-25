# getCategorys

获取domain下的资源类别定义对象序列。

## 语法

```javascript
getCategorys(domainCode: string): CategoryDef[]
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| domainCode | string | 资源域编码（4位） |

## 返回值

返回 `CategoryDef[]` 数组，包含指定域下所有资源类别的定义信息。如果未找到任何类别，返回空数组。

## 示例

```javascript
const layers = new Layers(data);
// 获取排水域（5402）下的所有资源类别
const categories = layers.getCategorys('5402');
console.log(categories);
// 输出示例：
// [
//   { code: '540201', name: '雨水', ... },
//   { code: '540202', name: '污水', ... },
//   ...
// ]
```

## 注意事项

- 资源域编码必须是4位数字字符串
- 返回的数组按类别编码排序
- 如果指定的域编码不存在，返回空数组 