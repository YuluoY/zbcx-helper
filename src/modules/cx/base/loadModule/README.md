加载指定URL的模块。

**说明**: 
- 通过URL加载JavaScript模块
- 返回Promise对象，resolve时返回加载的模块记录

Example:
```javascript
// 基本使用
await cx.base.loadModule('/path/to/module.js')

// 处理加载错误
try {
  await cx.base.loadModule('/invalid/path.js')
} catch (err) {
  console.error('模块加载失败:', err)
}
```