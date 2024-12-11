判断val是否为日期类型，是时返回true，否则false。

**说明**: 
- 判断对象是否为Date实例
- 返回布尔值表示是否为日期类型

Example:
```javascript
// 基本使用
cx.base.isDate(new Date())     // 返回 true
cx.base.isDate('2023-01-01')   // 返回 false
cx.base.isDate(1234567890)     // 返回 false
cx.base.isDate(null)           // 返回 false
```