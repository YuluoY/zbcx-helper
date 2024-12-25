# addRoutesByPlug

根据plugin表数据添加整套路由记录，container为嵌套标识，值为root时是根路由。

## 语法

```javascript
static addRoutesByPlug(plugDefs: Array.<Object>, restoreRoute: Array.<RouteOpt>)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| plugDefs | Array.<Object> | 插件定义对象序列，每个对象包含以下属性：<br>- name: String - 路由名，也是插件名<br>- namec: String - 路由名称<br>- container: String - 关联父路由名，为root时是根路由<br>- defchild: String - 默认的子路由名<br>- url: String - 组件路径，从src开始且不包含<br>- uitype: Number - 组件的类型，只有2-tabs, 3-route类型的才能构造路由<br>- params: Object - 路由默认运行参数 |
| restoreRoute | Array.<RouteOpt> | 待还原的路由序列，每个对象包含以下属性：<br>- name: String - 路由名，唯一标识<br>- title: String - 路由名称<br>- component: Object\|String - 组件对象或组件路径<br>- container: String - 父路由名（可选）<br>- defchild: String - 默认的子路由名（可选）<br>- params: Object - 运行参数对象（可选） |

## 返回值

无

## 示例

```javascript
// 根据插件定义添加路由
cx.router.addRoutesByPlug([
  {
    name: 'main',
    namec: '主页面',
    container: 'root',
    url: 'src/ui/frame/Main.vue',
    uitype: 3
  },
  {
    name: 'home',
    namec: '首页',
    container: 'main',
    url: 'src/ui/frame/Home.vue',
    uitype: 2
  }
], [
  // 待还原的路由配置
  {
    name: 'about',
    title: '关于',
    component: 'src/ui/frame/About.vue',
    container: 'main'
  }
]);
```

## 注意事项

- 直接通过 cx.router.addRoutesByPlug 调用
- 只有uitype为2(tabs)或3(route)的插件才会构造路由
- container为'root'时表示是根路由
- 组件路径url必须是相对于src的路径
- 支持同时还原之前的路由配置 