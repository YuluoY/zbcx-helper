# init

初始化。

## 语法

```javascript
init(): Object
```

## 参数

无

## 返回值

- Object - 返回this对象，支持链式调用

## 示例

```javascript
const plugins = new cx.Plugins(data);

// 初始化插件管理器
plugins.init()
      .byName('myPlugin')  // 链式调用其他方法
      .destroy();
```

## 注意事项

- 在使用其他方法前需要先调用init方法
- 返回this对象支持链式调用
- 可以在构造函数后立即调用
- 重复调用不会产生副作用 