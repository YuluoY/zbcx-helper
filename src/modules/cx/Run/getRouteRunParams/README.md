# getRouteRunParams

获取路由的运行参数，依次从路由、插件实例、插件定义中获取。

## 语法

```javascript
static getRouteRunParams(name) → {Object}
```

## 参数

- name: String - 路由名

## 返回值

- Object - 运行参数对象

## 示例

```javascript
// 获取路由运行参数
const params = cx.run.getRouteRunParams('myRoute');
console.log('路由运行参数:', params);
```

## 注意事项

- 直接通过 cx.run.getRouteRunParams 调用
- 参数获取优先级：路由 > 插件实例 > 插件定义