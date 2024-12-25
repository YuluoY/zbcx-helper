# addToRouter

给router对象添加路由记录。

## 语法

```javascript
static addToRouter(routeRecords: Array.<RouteRecord>, pRouteName?: string)
```

## 参数

| 参数名 | 类型 | 描述 | 是否可选 |
|--------|------|------|----------|
| routeRecords | Array.<RouteRecord> | 待添加的RouteRecord路由记录集合，每个记录包含：<br>- path: String - 路由路径<br>- name: String - 路由名，唯一标识<br>- meta: Object - 元数据<br>- component: Object - 组件对象 | 否 |
| pRouteName | string | 父路由的名称 | 是 |

## 返回值

无

## 示例

```javascript
// 添加路由记录
cx.router.addToRouter([
  {
    path: '/home',
    name: 'home',
    meta: {
      _def: {
        name: 'home',
        title: '首页'
      }
    },
    component: HomeComponent
  }
], 'main');
```

## 注意事项

- 直接通过 cx.router.addToRouter 调用
- 路由记录必须是通过makeRouteRecord生成的标准格式
- 路由名称必须唯一
- 可以指定父路由名称来创建嵌套路由
- 组件对象必须是已经处理过的有效组件 