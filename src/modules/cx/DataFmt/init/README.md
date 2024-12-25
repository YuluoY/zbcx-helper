# init

初始化数据格式配置对象列表。

## 语法

```js
cx.datafmt.init(data)
```

### 参数

- `data` (Array<dFmtCfg>): 配置对象列表
  - `dFmtCfg.name` (String): 格式名称
  - `dFmtCfg.type` (String): 格式类型
  - `dFmtCfg.params` (Object): 格式参数

### 返回值

无

## 描述

`init` 方法用于初始化一组数据格式化配置。通常在系统启动时调用，用于批量设置格式化对象。

支持的格式类型包括：
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
// 初始化多个格式化配置
cx.datafmt.init([
  {
    name: 'dateFormat',
    type: 'Date',
    params: {
      format: 'YYYY-MM-DD'
    }
  },
  {
    name: 'numberFormat',
    type: 'Number',
    params: {
      decimals: 2,
      thousands: true
    }
  },
  {
    name: 'currencyFormat',
    type: 'Currency',
    params: {
      symbol: '￥',
      decimals: 2
    }
  }
]);

// 使用初始化的格式化对象
const date = new Date();
console.log(cx.datafmt.format(date, 'dateFormat')); // 2024-01-18

const number = 1234567.89;
console.log(cx.datafmt.format(number, 'numberFormat')); // 1,234,567.89

const price = 99.99;
console.log(cx.datafmt.format(price, 'currencyFormat')); // ￥99.99
```

## 相关

- [add](../add/README.md)
- [del](../del/README.md)
- [format](../format/README.md)
- [parse](../parse/README.md) 