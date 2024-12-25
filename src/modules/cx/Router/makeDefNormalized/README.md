# makeDefNormalized

构造规范的原始定义数据。

## 语法

```javascript
static makeDefNormalized(routeOpt: RouteOpt): Object
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| routeOpt | RouteOpt | 路由数据，包含以下属性：<br>- name: String - 路由名，唯一标识<br>- title: String - 路由名称<br>- modDef: ModuleDef - 模块定义<br>- container: String - 父路由名（可选）<br>- defchild: String - 默认的子路由名（可选）<br>- params: Object - 默认运行参数（可选） |

## 返回值

- Object - defNormalized 标准化后的定义，包含以下属性：
  - name: String - 标识名
  - title: String - 名称
  - url: String - 组件文件路径
  - uitype: Number - 路由模式显示类型
  - src: Object - 原始定义数据

## 示例

```javascript
// 构造标准化的定义数据
const normalized = cx.router.makeDefNormalized({
  name: 'home',
  title: '首页',
  modDef: {
    url: 'src/ui/frame/Home.vue',
    com: {}
  }
});

console.log(normalized);
// 输出:
// {
//   name: 'home',
//   title: '首页',
//   url: 'src/ui/frame/Home.vue',
//   uitype: 0,
//   src: {/* 原始数据 */}
// }
```

## 注意事项

- 直接通过 cx.router.makeDefNormalized 调用
- 用于统一路由定义的数据格式
- 会保留原始数据在src属性中
- 确保所有必要的字段都被标准化处理 