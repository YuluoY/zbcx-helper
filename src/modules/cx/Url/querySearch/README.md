# querySearch

取url里面的键值。

## 语法

```javascript
querySearch(url, key) → {String}
```

## 参数

- `url` (String): 包含键值的URL
- `key` (String): 要查询的键

## 返回值

- String: 键对应的值

## 描述

从URL中提取指定键的值。

## 示例

```javascript
const value = cx.url.querySearch('http://example.com?param1=value1', 'param1');
console.log('键值:', value);
```

## 注意事项

- 此方法为静态方法，可以直接调用 