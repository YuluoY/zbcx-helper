# usePlugLib

使用plug的库。

## 语法

```javascript
static usePlugLib(libs) → {void}
```

## 参数

- libs: Array.<Object> - 插件库序列，每个对象包含lib属性，值是 url: module 的键值对

## 返回值

无

## 示例

```javascript
// 使用插件库
const libs = [
  {
    lib: {
      'plugin1': '/path/to/module1',
      'plugin2': '/path/to/module2'
    }
  }
];
cx.run.usePlugLib(libs);
```

## 注意事项

- 直接通过 cx.run.usePlugLib 调用
- 用于加载和使用插件库
- 每个库对象需要包含lib属性，指定模块路径 