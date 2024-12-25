# Url

`cx.url` 类 - URL 工具。

## 构造函数

```javascript
new Url()
```

## 静态方法

- **download(url)**: 下载网址
- **getRequestUrl(url, ...params)** → {String}: 生成http请求的url字符串
- **getSysUrl()** → {String}: 取系统URL
- **getUrlParams(url)** → {Object}: 获取http请求的url中的参数
- **open(url)**: Get方式打开网址
- **querySearch(url, key)** → {String}: 取url里面的键值

## 使用示例

```javascript
// 下载网址
cx.url.download('http://example.com');

// 生成请求URL
const requestUrl = cx.url.getRequestUrl('http://example.com', {param1: 'value1'});
console.log('请求URL:', requestUrl);

// 获取系统URL
const sysUrl = cx.url.getSysUrl();
console.log('系统URL:', sysUrl);

// 获取URL参数
const params = cx.url.getUrlParams('http://example.com?param1=value1');
console.log('URL参数:', params);

// 打开网址
cx.url.open('http://example.com');

// 查询URL中的键值
const value = cx.url.querySearch('http://example.com?param1=value1', 'param1');
console.log('键值:', value);
```

## 注意事项

- 静态方法可以直接通过 `cx.url` 调用
- 实例方法需要通过 `new cx.url()` 创建实例后使用 