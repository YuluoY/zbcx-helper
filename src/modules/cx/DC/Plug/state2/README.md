# state2

根据当前的状态，确定菜单、工具条的状态

## 方法签名
```typescript
static state2(plug: Object, values: Object, flds: Object) => { visible: Boolean, disabled: Boolean }
```

## 参数说明
- `plug` (Object): 插件
- `values` (Object): 当前结点提供的数据
- `flds` (Object): 当前结点提供的信息

## 返回值
返回类型：Object
- `visible` (Boolean): 是否可见
- `disabled` (Boolean): 是否禁用

## 功能描述
根据当前的状态，确定菜单、工具条的状态。

## 示例
```typescript
// 获取插件状态
const state = cx.dc.Plug.state2(
    pluginObject,
    { id: 1, status: 'active' },
    { name: 'node1', type: 'folder' }
);

console.log(state.visible); // true/false
console.log(state.disabled); // true/false
``` 