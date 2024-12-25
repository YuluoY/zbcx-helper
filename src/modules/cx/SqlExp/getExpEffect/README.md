# getExpEffect

默认条件表达式(effect!=0 ORDER BY id DESC)。

## 语法

```javascript
static getExpEffect() → {cx.SqlEx}
```

## 返回值

- cx.SqlEx - 默认的SQL条件表达式

## 示例

```javascript
// 获取有效条件表达式
const expEffect = cx.sqlexp.getExpEffect();
console.log('有效条件表达式:', expEffect);
```

## 注意事项

- 直接通过 `cx.sqlexp.getExpEffect` 调用
- 用于获取有效状态的默认SQL条件表达式 