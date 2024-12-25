# getRequestUrl

生成http请求的url字符串。

## 语法

```javascript
getRequestUrl(url, ...params) → {String}
```

## 参数

- `url` (String): 基础URL
- `params` (Object): 可变参数对象

## 返回值

- String: 生成的请求URL字符串

## 描述

根据基础URL和参数生成完整的请求URL。

## 示例

```javascript
const requestUrl = cx.url.getRequestUrl('http://example.com', {param1: 'value1'});
console.log('请求URL:', requestUrl);
```

## 注意事项

- 此方法为静态方法，可以直接调用 