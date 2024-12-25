# getZyTypeCode

获取资源类型编码，前4位+后4位（不同类别的相同资源类型编码相同）。

## 语法

```javascript
getZyTypeCode(lyrCode: string): string | NULL
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| lyrCode | string | 图层编码子串，小于10位时返回空 |

## 返回值

返回资源类型编码（8位字符串）。例如：5402012101-排水雨水弯头 返回 54022101。如果输入编码无效，返回 NULL。

## 示例

```javascript
const layers = new Layers(data);
const zyTypeCode = layers.getZyTypeCode('5402012101');
console.log(zyTypeCode);  // 输出：'54022101'

// 输入编码小于10位
const invalidCode = layers.getZyTypeCode('54020');
console.log(invalidCode);  // 输出：NULL
```

## 注意事项

- 输入的图层编码必须是10位，否则返回 NULL
- 返回的资源类型编码由前4位和后4位组成，中间2位被忽略
- 不同类别下的相同资源类型会有相同的资源类型编码 