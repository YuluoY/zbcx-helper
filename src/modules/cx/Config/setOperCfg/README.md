# setOperCfg

设置操作配置。

## 语法

```js
config.setOperCfg(operCfg, showText = true, showIcon = true)
```

## 参数

| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| operCfg | Object | 是 | - | 操作配置 |
| showText | Boolean | 否 | true | 是否显示标题文本 |
| showIcon | Boolean | 否 | true | 是否显示图标 |

## 返回值

无

## 示例

```js
// 设置操作配置
cx.config.setOperCfg({
  add: {
    text: '添加',
    icon: 'plus'
  }
}, true, true);
``` 