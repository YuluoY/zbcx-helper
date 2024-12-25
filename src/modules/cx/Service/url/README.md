# url

根据Key取对应的服务URL。

## 语法

```javascript
static url(name) → {String}
```

## 参数

- name: String - 服务名

## 返回值

- String - 服务的URL

## 示例

```javascript
// 获取服务URL
const serviceUrl = cx.service.url('myService');
console.log('服务URL:', serviceUrl);
```

## 注意事项

- 直接通过 cx.service.url 调用
- 返回通过add方法注册的服务URL
- 如果服务名未注册，将返回undefined 