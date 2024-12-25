# byName

根据名称取对应的插件数据对象，返回数据副本。

## 语法

```javascript
byName(name: string): Object
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| name | string | 插件名称 |

## 返回值

- Object - 插件数据副本

## 示例

```javascript
const plugins = new cx.Plugins(data);

// 获取指定名称的插件数据
const plugin = plugins.byName('myPlugin');
console.log(plugin);
```

## 注意事项

- 返回的是数据副本，修改不会影响原始数据
- 如果找不到对应名称的插件，返回undefined
- 插件名称区分大小写 