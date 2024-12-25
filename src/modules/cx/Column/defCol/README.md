# defCol

得到一个默认的内存字段对象。

## 方法签名
```typescript
static defCol() => {Object}
```

## 返回值
- 类型：`Object`
- 说明：返回一个包含以下属性的对象：
  - `colname` (String): 列名
  - `title` (String): 标题
  - `disporder` (Number): 显示顺序
  - `type` (Number): 类型
  - `value` (String): 值
  - `isnum` (Boolean): 是否数值型
  - `editable` (Boolean): 是否可编辑
  - `required` (Boolean): 是否必填
  - `rows` (Number): 行数
  - `disped` (Boolean): 是否显示
  - `refChange` (Number): 引用变更

## 功能描述
获取一个默认的内存字段对象，包含了列的基本属性。

## 示例
```typescript
const defaultColumn = cx.column.defCol();
``` 