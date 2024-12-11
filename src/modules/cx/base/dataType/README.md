根据数据类型的名称，取对应的数据类型代码。

**说明**: 
- 支持的类型名：int / float / string / date / datetime / time / boolean / ..
- 返回对应的cx.consts.DT_常量值

Example:
```javascript
// 获取各种类型的代码
cx.base.dataType('int')      // 返回 cx.consts.DT_INT
cx.base.dataType('float')    // 返回 cx.consts.DT_REAL
cx.base.dataType('string')   // 返回 cx.consts.DT_STRING
cx.base.dataType('date')     // 返回 cx.consts.DT_DATE
cx.base.dataType('datetime') // 返回 cx.consts.DT_DATETIME
cx.base.dataType('boolean')  // 返回 cx.consts.DT_BOOL
```