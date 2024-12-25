# VueEx

cx.vueEx 类 - VUE 扩展

## 构造函数

```javascript
new VueEx()
```

## 静态方法

- `extend(appVue, vueApi)`: 扩展vue
- `markRaw(data)`: 标记数据对象

## 使用示例

```javascript
// 扩展vue
cx.vueEx.extend(appVue, vueApi);

// 标记数据对象
const rawData = cx.vueEx.markRaw(data);
```

## 注意事项

- 静态方法可以直接调用，不需要实例化。 