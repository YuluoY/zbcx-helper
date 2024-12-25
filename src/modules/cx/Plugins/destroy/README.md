# destroy

销毁对象。

## 语法

```javascript
destroy(): void
```

## 参数

无

## 返回值

无

## 示例

```javascript
const plugins = new cx.Plugins(data);

// 使用插件实例...

// 销毁插件实例
plugins.destroy();
```

## 注意事项

- 销毁后实例将不能再使用
- 建议在不再需要插件实例时调用此方法
- 销毁会清理所有相关资源 