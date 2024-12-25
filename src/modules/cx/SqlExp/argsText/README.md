# argsText

条件文本化，传递服务端筛选格式。

## 语法

```javascript
static argsText(args) → {String}
```

## 参数

- args: Array.<SqlCons|BraSqlCons> - 元子表达式或括号表达式，格式: [列, 操作符, 值, 连接符]
  - SqlCons: Array - 元子表达式，格式: [列, 操作符, 值, 连接符]
    - 列: String - 字段名
    - 操作符: String - 如 =, >, <, like, in, is null, is not null 等
    - 值: String|Number - 比较的值
    - 连接符: String - 如 and, or, filter, should, must
  - BraSqlCons: Array - 括号表达式，格式: [连接符, 元子表达式, ...]
    - 连接符: String - 如 and, or, filter, should, must
    - 元子表达式: SqlCons - 按需并列加元子表达式

## 返回值

- String - 服务端请求的文本格式式

## 示例

```javascript
// 简单条件文本化
const simpleText = cx.sqlexp.argsText([
  ['age', '>', 10],
  ['type', '=', 'A', 'AND']
]);
console.log('简单条件文本:', simpleText);

// 复杂条件文本化
const complexText = cx.sqlexp.argsText([
  ['age', '>', 10, 'AND'],
  ['type', '=', 'A', 'OR'],
  ['status', 'in', [1, 2, 3], 'AND']
]);
console.log('复杂条件文本:', complexText);

// 带括号的条件文本化
const bracketText = cx.sqlexp.argsText([
  ['AND',
    ['age', '>', 10],
    ['type', '=', 'A', 'OR'],
    ['status', 'in', [1, 2, 3], 'AND']
  ]
]);
console.log('带括号的条件文本:', bracketText);
```

## 注意事项

- 直接通过 `cx.sqlexp.argsText` 调用
- 用于将SQL条件表达式转换为文本格式，便于传递给服务端
- 支持复杂的条件组合，包括括号表达式
  