# makeComponent

构造路由的组件对象，并注入getIdentity方法获取文件路径。

## 语法

```javascript
static makeComponent(modDef: ModuleDef): Promise
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| modDef | ModuleDef | 模块定义，包含以下属性：<br>- url: String - 模块文件路径，相对src目录且不包含它<br>- com: Object - 模块的组件对象，可为空 |

## 返回值

- Promise - 模块加载的Promise，返回模块对象

## 示例

```javascript
// 构造组件
const component = await cx.router.makeComponent({
  url: 'src/ui/frame/Home.vue',
  com: {}
});

// 使用组件的getIdentity方法
const path = component.getIdentity();
console.log('组件路径:', path);  // 输出: src/ui/frame/Home.vue
```

## 注意事项

- 直接通过 cx.router.makeComponent 调用
- 返回Promise，需要使用async/await或then处理
- 会自动注入getIdentity方法用于获取文件路径
- url路径必须是相对于src的路径
- com对象可以为空 