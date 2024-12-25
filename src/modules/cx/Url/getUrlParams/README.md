# getUrlParams

获取http请求的url中的参数。

## 语法

```javascript
getUrlParams(url) → {Object}
```

## 参数

- `url` (String): 包含参数的URL

## 返回值

- Object: 包含解析参数的对象

## 描述

从URL中提取并解析参数。

## 示例

```javascript
const params = cx.url.getUrlParams('http://example.com?param1=value1');
console.log('URL参数:', params);
```

## 注意事项

- 此方法为静态方法，可以直接调用 