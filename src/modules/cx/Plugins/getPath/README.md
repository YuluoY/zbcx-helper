# getPath

根据路径和文件名取完整的路径(文件名里面:1.如果没有目录存在则跟dir拼完整路径, 2.如果有目录存在则使用自身路径)。

## 语法

```javascript
getPath(dir: string, filename: string): string
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| dir | string | 插件目录 |
| filename | string | 文件名 |

## 返回值

- string - 完整路径

## 示例

```javascript
const plugins = new cx.Plugins(data);

// 获取完整路径
// 如果文件名不包含目录
const path1 = plugins.getPath('plugins', 'config.json');  // 返回: plugins/config.json

// 如果文件名包含完整路径
const path2 = plugins.getPath('plugins', '/absolute/path/config.json');  // 返回: /absolute/path/config.json
```

## 注意事项

- 如果文件名中不包含目录，会自动拼接插件目录
- 如果文件名中包含完整路径，则直接使用该路径
- 路径分隔符会根据系统自动处理
- 返回的路径可以直接用于文件操作 