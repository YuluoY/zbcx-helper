# DateTime

日期时间处理模块

## 安装
```bash
npm install @cx/datetime
```

## 功能描述
提供日期时间相关的处理功能，包括日期解析、复制、范围获取等操作。

## API列表

### 构造函数
- [new DateTime()](./README.md) - 创建DateTime实例

### 静态方法
- [copy(timestamp)](./copy/README.md) - 拷贝日期对象
- [getRange(type)](./getRange/README.md) - 获取时间范围
- [now()](./now/README.md) - 获取当前时间
- [parse(str)](./parse/README.md) - 解析日期时间字符串
- [rangeMonth(timestamp)](./rangeMonth/README.md) - 获取月份时间范围

## 使用示例
```typescript
// 创建实例
const dt = new cx.datetime();

// 获取当前时间
const now = cx.datetime.now();

// 解析日期字符串
const date = cx.datetime.parse('2017-10-26 09:00:00');

// 获取本月时间范围
const range = cx.datetime.getRange(cx.consts.THISMONTH);
``` 