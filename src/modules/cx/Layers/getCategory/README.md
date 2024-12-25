# getCategory

取资源类别定义对象。

## 语法

```javascript
getCategory(code: string): CategoryDef
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| code | string | 资源类别编码（6位） |

## 返回值

返回 `CategoryDef` 对象，包含资源类别的定义信息。如果未找到对应的类别，返回 `undefined`。

## 示例

```javascript
const layers = new Layers(data);
const categoryDef = layers.getCategory('540201');  // 例如：排水-雨水
console.log(categoryDef);
```

## 注意事项

- 资源类别编码为6位数字字符串
- 编码格式：大码(1位) + 中码(1位) + 小码(2位) + 子码(2位)
- 如果找不到对应的类别定义，将返回 undefined 