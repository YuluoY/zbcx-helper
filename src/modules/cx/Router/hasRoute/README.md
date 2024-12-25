# hasRoute

判断name的路由是否存在，同$router.hasRoute。

## 语法

```javascript
static hasRoute(name: string): boolean
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| name | string | 路由名 |

## 返回值

- Boolean - 路由的组件对象

## 示例

```javascript
// 检查路由是否存在
const hasHomeRoute = cx.router.hasRoute('home');
if (hasHomeRoute) {
    console.log('home路由存在');
} else {
    console.log('home路由不存在');
}
```

## 注意事项

- 直接通过 cx.router.hasRoute 调用
- 功能与Vue Router的hasRoute方法相同
- 只能通过路由名称检查，不支持路径检查
- 返回布尔值表示路由是否存在 