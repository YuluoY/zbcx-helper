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
const procAssign = new cx.ProcAssign(data);

// 初始化并链式调用
procAssign.init()
          .get('configName', {/* 属性对象 */})
          .makeParams([/* 参数数组 */], {/* 属性对象 */});
```

## 注意事项

- 在使用其他方法前必须先调用init方法
- 返回this对象支持链式调用
- 可以在构造函数后立即调用
- 重复调用不会产生副作用 