# getDomain

获取域定义对象。

## 语法

```javascript
getDomain(code: string): DomainDef
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| code | string | 资源域编码（4位）或更长的编码（如6位类别编码、8位类型编码、10位图层编码） |

## 返回值

返回 `DomainDef` 对象，包含资源域的定义信息。如果未找到对应的域，返回 `undefined`。

## 示例

```javascript
const layers = new Layers(data);

// 使用4位域编码
const domain1 = layers.getDomain('5402');  // 排水域
console.log(domain1);

// 使用10位图层编码，自动提取域部分
const domain2 = layers.getDomain('5402012101');  // 同样返回排水域
console.log(domain2);

// 输出示例：
// {
//   code: '5402',
//   name: '排水',
//   ...
// }
```

## 注意事项

- 支持传入不同长度的编码，方法会自动提取前4位作为域编码
- 如果找不到对应的域定义，将返回 undefined
- 域编码格式：大码(1位) + 中码(1位) + 小码(2位) 