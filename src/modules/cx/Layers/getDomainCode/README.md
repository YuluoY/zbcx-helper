# getDomainCode

获取域编码。

## 语法

```javascript
getDomainCode(code: string): string | NULL
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| code | string | 图层编码（10位）或资源类型编码（8位）或资源类别编码（6位） |

## 返回值

返回资源域编码（4位字符串）。如果输入编码小于4位，返回 NULL。

## 示例

```javascript
const layers = new Layers(data);

// 从10位图层编码获取域编码
const domainCode1 = layers.getDomainCode('5402012101');  // 返回：'5402'

// 从6位类别编码获取域编码
const domainCode2 = layers.getDomainCode('540201');      // 返回：'5402'
```

## 注意事项

- 输入编码可以是10位、8位或6位
- 返回的域编码总是4位数字字符串
- 如果输入编码长度小于4位，返回 NULL
- 该方法仅提取编码中的域部分，不验证编码的有效性 