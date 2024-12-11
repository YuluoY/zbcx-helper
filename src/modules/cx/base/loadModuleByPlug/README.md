根据插件加载模块插件。如名称以ModulePlug结尾则加载子节点。转为wx时去掉

**说明**: 
- 根据插件名加载对应的模块
- 返回Promise对象，resolve时返回加载的模块

Example:
```javascript
// 基本使用
const module = await cx.base.loadModuleByPlug('myPlugin')
```