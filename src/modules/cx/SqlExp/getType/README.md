# getType

根据字段及值获取SQL表达式的值类型。

## 语法

```javascript
static getType(fld, valueOpt) → {String}
```

## 参数

- fld: Object - 字段信息
  - isnum: Number - 是否数值的定义
  - disptype: Number - 显示类型定义
- value: String (可选) - 辅助数量类型判断的值

## 返回值

- String - SQL表达式的值类型

## 示例

```javascript
const type = cx.sqlexp.getType(fld, 'value');
console.log('值类型:', type);
```

## 注意事项

- 直接通过 `cx.sqlexp.getType` 调用
- 用于根据字段和值判断SQL表达式的值类型 