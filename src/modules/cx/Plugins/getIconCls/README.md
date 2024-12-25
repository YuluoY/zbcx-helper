# getIconCls

取图标的CSS类名。

## 语法

```javascript
getIconCls(dir: string, iconName: string, iconSize: number): string
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| dir | string | 插件目录[必须有值] |
| iconName | string | 图标名字(支持:1.类名-.iconAbcd 2.文件名-Abcd.png 3.没有后缀的名称-Abcd) |
| iconSize | number | 图标大小 |

## 返回值

- string - CSS类名

## 示例

```javascript
const plugins = new cx.Plugins(data);

// 获取图标CSS类名
const iconClass1 = plugins.getIconCls('plugins', '.iconUser', 16);
const iconClass2 = plugins.getIconCls('plugins', 'user.png', 32);
const iconClass3 = plugins.getIconCls('plugins', 'user', 24);
```

## 注意事项

- 插件目录参数必须提供
- 支持三种图标名称格式
- 图标大小会影响最终的CSS类名
- 返回的类名可以直接用于HTML元素的class属性 