# parse

解析数据格式配置对象。

## 语法

```js
cx.datafmt.parse(dFmtCfg)
```

### 参数

- `dFmtCfg` (Object): 数据格式配置对象
  - `name` (String): 格式名称
  - `type` (String): 格式类型
  - `params` (Object): 格式参数

### 返回值

- (IDataFmtBase): 返回解析后的数据格式化对象

## 描述

`parse` 方法用于解析单个数据格式配置对象，并返回相应的格式化对象实例。这个方法通常由 `init` 方法内部调用，但也可以单独使用来创建格式化对象。

支持的格式类型与 `init` 方法相同：
- Date: 日期格式化
- Datetime: 日期时间格式化
- Time: 时间格式化
- Number: 数字格式化
- Currency: 货币格式化
- Filelen: 文件大小格式化
- Dms: 经纬度格式化
- Duration: 时长格式化
- Exp: 表达式格式化

## 示例

```js
// 解析日期格式配置
const dateFmtCfg = {
  name: 'dateFormat',
  type: 'Date',
  params: {
    format: 'YYYY-MM-DD'
  }
};
const dateFmt = cx.datafmt.parse(dateFmtCfg);

// 解析数字格式配置
const numberFmtCfg = {
  name: 'numberFormat',
  type: 'Number',
  params: {
    decimals: 2,
    thousands: true
  }
};
const numberFmt = cx.datafmt.parse(numberFmtCfg);

// 使用解析后的格式化对象
if (dateFmt) {
  console.log(dateFmt.format(new Date())); // 2024-01-18
}

if (numberFmt) {
  console.log(numberFmt.format(1234567.89)); // 1,234,567.89
}
```

## 相关

- [add](../add/README.md)
- [del](../del/README.md)
- [format](../format/README.md)
- [init](../init/README.md) 