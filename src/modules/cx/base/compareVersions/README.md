比较v1和v2两个版本的大小。

**说明**: 
- 支持字符串或数值类型的版本号
- 返回值说明：
  - 0: 表示相等
  - 1: 表示v1大于v2
  - -1: 表示v1小于v2

Example:
```javascript
// 字符串版本号比较
cx.base.compareVersions('1.1.2', '1.1.1') // 1
cx.base.compareVersions('1.1.2', '1.1.2') // 0
cx.base.compareVersions('1.1.2', '1.2.0') // -1

// 数值版本号比较
cx.base.compareVersions(1.12, 1.2) // -1
```