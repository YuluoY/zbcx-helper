# markRaw

标记数据对象，使其永远不会转换为proxy。

## 语法

```javascript
markRaw(data) → {Object}
```

## 参数

- `data` (Object): 数据对象

## 返回值

- Object: 标记后的对象本身

## 描述

标记数据对象，使其不被Vue的响应式系统代理。

## 示例

```javascript
const rawData = cx.vueEx.markRaw(data);
```

## 注意事项

- 此方法为静态方法，可以直接调用 