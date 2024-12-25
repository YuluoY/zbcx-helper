# isExpEmpty

判断条件是否为空。

## 语法

```javascript
isExpEmpty() → {Boolean}
```

## 返回值

- Boolean - 判断结果，true表示条件为空

## 示例

```javascript
// 创建SqlEx实例
const sqlEx = new cx.SqlEx();

// 判断条件是否为空
const isEmpty = sqlEx.isExpEmpty();
console.log('条件是否为空:', isEmpty);
```

## 注意事项

- 需要通过 `new cx.SqlEx()` 实例化后调用
- 用于检查当前SQL条件表达式是否为空 