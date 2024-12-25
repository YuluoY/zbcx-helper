# getCategoryCode

获取资源类别编码。

## 语法

```javascript
getCategoryCode(code: string): string
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| code | string | 图层编码（10位）或资源类型编码（8位） |

## 返回值

返回资源类别编码（6位字符串）。

## 示例

```javascript
const layers = new Layers(data);
// 从10位图层编码获取类别编码
const categoryCode1 = layers.getCategoryCode('5402012101');  // 返回：'540201'

// 从8位资源类型编码获取类别编码
const categoryCode2 = layers.getCategoryCode('54022101');    // 返回：'540201'
```

## 注意事项

- 输入可以是10位图层编码或8位资源类型编码
- 返回的类别编码总是6位数字字符串
- 该方法仅提取编码中的类别部分，不验证编码的有效性 