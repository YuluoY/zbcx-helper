# canMultRun

是否可多实例运行，只有叶子插件可多实例运行。

## 语法

```javascript
static canMultRun(plugDef) → {Boolean}
```

## 参数

- plugDef: Object - 插件定义对象

## 返回值

- Boolean - 判断结果

## 示例

```javascript
// 判断插件是否可以多实例运行
const plugDef = {
  // 插件定义对象
};
const canMulti = cx.run.canMultRun(plugDef);
if (canMulti) {
  console.log('插件支持多实例运行');
} else {
  console.log('插件不支持多实例运行');
}
```

## 注意事项

- 直接通过 cx.run.canMultRun 调用
- 只有叶子插件可以多实例运行
- 用于判断插件是否支持同时运行多个实例
``` 