# addRoutes

给pRouteName父路由添加datas定义的子路由。

## 语法

```javascript
static addRoutes(datas: Array.<RouteOpt>, pRouteName?: string, glContainer?: string)
```

## 参数

| 参数名 | 类型 | 描述 | 是否可选 |
|--------|------|------|----------|
| datas | Array.<RouteOpt> | 路由数据，每个对象包含以下关键属性：<br>- name: String - 路由名，唯一标识<br>- title: String - 路由名称<br>- modDef: ModuleDef - 模块定义<br>- container: String - 父路由名（可选）<br>- defchild: String - 默认的子路由名（可选）<br>- params: Object - 默认运行参数（可选） | 否 |
| pRouteName | string | 父路由名 | 是 |
| glContainer | string | 关联父路由名，有值时递归构建，无值时只构建数组第一层 | 是 |

## 返回值

无

## 示例

```javascript
// 添加子路由到指定父路由
cx.router.addRoutes([
  {
    name: 'home',
    title: '首页',
    modDef: {
      url: 'src/ui/frame/Home.vue',
      com: {}
    }
  },
  {
    name: 'about',
    title: '关于',
    modDef: {
      url: 'src/ui/frame/About.vue'
    },
    container: 'home'  // 作为home的子路由
  }
], 'main');
```

## 注意事项

- 直接通过 cx.router.addRoutes 调用
- 每个路由配置必须有唯一的name
- modDef中的url是相对于src的路径
- container用于指定父子路由关系
- 可以通过glContainer参数控制是否递归构建子路由 