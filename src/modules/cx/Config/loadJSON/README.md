# loadJSON

加载JSON数据文件。

## 语法

```js
Config.loadJSON(confs)
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| confs | Array<Object> | 配置对象序列,每个对象结构为 {name: String, namec: String, url: String}。url结构如 static/themes/lightBlue.js |

## 返回值

**类型:** Promise

返回一个 Promise 对象。

## 示例

```js
// 加载JSON配置文件
const configs = [
  {
    name: 'theme',
    namec: '主题',
    url: 'static/themes/lightBlue.js'
  }
];
cx.config.loadJSON(configs).then(() => {
  console.log('配置加载完成');
});
``` 