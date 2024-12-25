# SqlExp

`cx.sqlexp` 类 - SQL条件表达式。提供了一系列用于构建和操作SQL条件表达式的静态方法。

## 静态方法

- **argsText**: 条件文本化，传递服务端筛选格式。
- **from**: 通过数据构造SQL条件表达式。
- **getColEx**: 根据一个字段、值、SQL操作符获取SQL条件表达式信息。
- **getDefExp**: 取默认的条件表达式。
- **getExpCompleted**: 默认条件表达式(completed=1 ORDER BY id DESC)。
- **getExpDef**: 默认条件表达式(id>0 ORDER BY id DESC)。
- **getExpEffect**: 默认条件表达式(effect!=0 ORDER BY id DESC)。
- **getExpGlid**: 根据ID0生成默认条件表达式。
- **getExpInuse**: 生成默认条件表达式(inuse=1)。
- **getExpUncompleted**: 生成默认条件表达式(completed=0)。
- **getFldExp**: 根据字段信息生成SQL条件表达式。
- **getFldExpMore**: 根据字段信息生成更详细的SQL条件表达式。
- **getType**: 根据字段及值获取SQL表达式的值类型。
- **merge**: 合并多个条件，返回合并后的条件。
- **queryPara**: 根据条件表达式对象生成查询对象。
- **transSqlConc**: SQL的连接符转义。
- **transSqlCons**: 获取SQL表达式元素的转义字符串。
- **transSqlOper**: SQL操作符转义。

## 使用示例

```javascript
// 使用静态方法构建SQL条件表达式
const sqlExp = cx.sqlexp.from([
  ['column1', '=', 'value1'],
  ['column2', '>', 'value2', 'AND']
], 'column1 ASC');

// 获取默认条件表达式
const defExp = cx.sqlexp.getDefExp();

// 判断是否为SQL表达式元素
const isCons = cx.sqlexp.isSqlCons(['column', '=', 'value']);
console.log('是否为SQL表达式元素:', isCons);

// 使用getExpGlid生成条件表达式
const expGlid = cx.sqlexp.getExpGlid(123);
console.log('条件表达式:', expGlid);

// 使用merge合并条件表达式
const mergedExp = cx.sqlexp.merge(exp1, exp2);
console.log('合并后的条件表达式:', mergedExp);
```

## 注意事项

- 所有方法都是静态方法，通过 `cx.sqlexp` 直接调用。
- 提供灵活的SQL条件构建和判断功能。
  