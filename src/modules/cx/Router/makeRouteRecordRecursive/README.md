# makeRouteRecordRecursive

递归构造路由记录序列。

## 语法

```javascript
static makeRouteRecordRecursive(datas: Array.<RouteOpt>, glContainer: string) → {Array.<RouteRecord>}
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| datas | Array.<RouteOpt> | 路由数据对象序列，每个对象包含以下属性:<br>- name: String - 路由名，唯一标识<br>- title: String - 路由名称<br>- modDef: ModuleDef - 模块定义，包含url和com属性<br>  - url: String - 模块文件路径，相对src目录且不包含它<br>  - com: Object - 模块的组件对象，可为空<br>- container: String - 关联父路由名（可选）<br>- defchild: String - 默认的子路由名（可选）<br>- params: Object - 路由默认运行参数（可选） |
| glContainer | string | 关联父路由名 |

## 返回值

- Array.<RouteRecord> - 路由记录序列，每个记录包含:
  - path: String - 路由路径，使用相对路径
  - name: String - 路由名，唯一标识
  - meta: Object - 元数据对象，包含_srcDef原始定义数据
  - component: Object - 组件对象
  - children: Array.<RouteRecord> - 子路由记录序列

## 示例

```javascript
// 递归构造路由记录
const routeRecords = cx.router.makeRouteRecordRecursive([
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
], 'home');
```

## 注意事项

- 直接通过 cx.router.makeRouteRecordRecursive 调用
- 会递归处理所有子路由
- 原始定义数据会存入路由的meta._srcDef属性中
- 构造的路由对象path使用相对路径以提供更安全的地址
- 每个路由记录都会通过makeRouteRecord处理