# makeRouteRecord

根据数据构造路由记录，原始定义数据会存入路由的meta对象_srcDef属性中，构造的路由对象path使用相对路径提供地址更安全。

## 语法

```javascript
static makeRouteRecord(routeOpt: RouteOpt): RouteRecord
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| routeOpt | RouteOpt | 路由数据，包含以下属性：<br>- name: String - 路由名，唯一标识<br>- title: String - 路由名称<br>- modDef: ModuleDef - 模块定义<br>- container: String - 父路由名（可选）<br>- defchild: String - 默认的子路由名（可选）<br>- params: Object - 默认运行参数（可选） |

## 返回值

- RouteRecord - 路由记录，包含以下属性：
  - path: String - 路由路径
  - name: String - 路由名
  - meta: Object - 元数据，包含_def原始定义
  - component: Object - 组件对象

## 示例

```javascript
// 构造路由记录
const routeRecord = cx.router.makeRouteRecord({
  name: 'home',
  title: '首页',
  modDef: {
    url: 'src/ui/frame/Home.vue',
    com: {}
  }
});

console.log(routeRecord);
// 输出:
// {
//   path: '/home',
//   name: 'home',
//   meta: {
//     _def: {/* 原始定义数据 */}
//   },
//   component: {/* 组件对象 */}
// }
```

## 注意事项

- 直接通过 cx.router.makeRouteRecord 调用
- 原始定义数据会被保存在meta._def��
- 路由路径使用相对路径格式
- 组件对象会通过makeComponent处理
- 用于生成标准的路由记录对象 