# add

增加URL。

## 语法

```javascript
static add(name, url)
```

## 参数

- name: String - 服务名
- url: String - URL

## 返回值

无

## 示例

```javascript
// 添加服务URL
cx.service.add('myService', '/api/myService');
```

## 注意事项

- 直接通过 cx.service.add 调用
- 用于注册服务的URL映射 