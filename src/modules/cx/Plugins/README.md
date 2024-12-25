# Plugins

`cx.Plugins` 类提供了插件管理功能。$g.plugin 类 - 插件管理，实例化对象：$g.plugin

## 构造函数

```javascript
new Plugins(data?: Object)
```

### 参数
- `data` (Object, optional): 插件数据

## 方法列表

### byName
根据名称取对应的插件数据对象，返回数据副本。

### destroy
销毁对象。

### getIconCls
取图标的CSS类名。

### getPath
根据路径和文件名取完整的路径。

### init
初始化。

## 使用示例

```javascript
// 创建插件管理实例
const plugins = new cx.Plugins(data);

// 根据名称获取插件
const plugin = plugins.byName('myPlugin');

// 获取图标CSS类名
const iconClass = plugins.getIconCls('plugins', 'myIcon', 16);

// 获取完整路径
const fullPath = plugins.getPath('plugins', 'config.json');

// 销毁实例
plugins.destroy();
```

## 注意事项

- 需要通过new操作符创建实例
- 销毁时需要调用destroy方法释放资源
- 图标支持多种命名格式
- 路径处理会自动判断是否需要拼接目录 