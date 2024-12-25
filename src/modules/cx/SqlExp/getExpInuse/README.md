# getExpInuse

默认条件表达式(inuse=1 ORDER BY id DESC)。

## 语法

```javascript
static getExpInuse() → {Object}
```

## 返回值

- Object - SQL条件表达式

## 示例

```javascript
const expInuse = cx.sqlexp.getExpInuse();
console.log('条件表达式:', expInuse);
```

## 注意事项

- 直接通过 `cx.sqlexp.getExpInuse` 调用
- 用于生成带有inuse条件的SQL表达式 