# defPlug

取插件默认信息

## 方法签名
```typescript
static defPlug(key: string, node: string, plug: string | function) => cx.dc.Plug.plugNode
```

## 参数说明
- `key` (String): 词条/图标的默认名（如 add, remove, edit, ..., 词条采用 cx.base.key, 图标用 cx.config.icon.key）
- `node` (String): 执行该插件的结点
- `plug` (String | Function): 插件名 或者 执行函数

## 返回值
返回类型：cx.dc.Plug.plugNode

## 功能描述
取插件默认信息。

## 示例
```typescript
// 使用字符串插件名
const plugNode = cx.dc.Plug.defPlug('add', 'node1', 'addFunction');

// 使用函数
const plugNode = cx.dc.Plug.defPlug('edit', 'node1', (params) => {
    // 执行编辑逻辑
});
``` 