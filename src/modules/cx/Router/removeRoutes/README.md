# removeRoutes

根据路由名删除路由记录。

## 语法

```javascript
static removeRoutes(names: Array.<String>)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| names | Array.<String> | 路由名数据序列 |

## 返回值

无

## 示例

```javascript
// 移除指定路由
cx.router.removeRoutes(['home', 'about']);

// 移除单个路由
cx.router.removeRoutes(['home']);
```

## 注意事项

- 直接通过 cx.router.removeRoutes 调用
- 会删除指定的路由及其所有子路由
- 如果删除的路由不存在会被忽略
- 删除后需要重新添加路由才能使用
- 通常用于路由重置或清理场景