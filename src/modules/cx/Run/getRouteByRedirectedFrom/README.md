# getRouteByRedirectedFrom

用路由$route对象redirectedFrom属性向父路由遍历，查找name路由对象。

## 语法

```javascript
static getRouteByRedirectedFrom(name) → {Object|Null}
```

## 参数

- name: String - 路由名

## 返回值

- Object|Null - 路由对象

## 示例

```javascript
// 查找重定向来源路由
const route = cx.run.getRouteByRedirectedFrom('sourcePage');
if (route) {
  console.log('找到来源路由:', route);
} else {
  console.log('未找到来源路由');
}
```

## 注意事项

- 直接通过 cx.run.getRouteByRedirectedFrom 调用
- 会通过redirectedFrom属性向上遍历父路由
- 如果找不到对应的路由对象，返回null