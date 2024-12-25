# parseObj

解析配置的 内存对象

## 方法签名
```typescript
static parseObj(str: String) => Array
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| str | String | 是 | - | 如("global.init.func") - JSON对象不支持$这样的符号，只能自己解析 |

## 返回值
Array 类型，返回解析后的数组

## 功能描述
解析配置的内存对象。

## 示例
```typescript
// 解析配置字符串
const parsedArray = cx.dc.Tree.parseObj("global.init.func");
``` 