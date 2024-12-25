# add

增加一个数据格式化对象（采用引用计数方式）。

## 语法

```js
cx.datafmt.add(name, dataFmt)
```

### 参数

- `name` (String): 格式化对象的命名
- `dataFmt` (IDataFmtBase): 数据格式化对象

### 返回值

无

## 描述

`add` 方法用于向系统中添加一个新的数据格式化对象。该方法使用引用计数机制来管理格式化对象的生命周期。

主要功能：
- 添加新的数据格式化对象
- 通过引用计数管理对象生命周期
- 支持多种格式化类型

## 示例

```js
// 创建一个日期格式化对象
const dateFmt = new cx.FmtDate({
  format: 'YYYY-MM-DD'
});

// 添加到系统中
cx.datafmt.add('myDateFormat', dateFmt);

// 使用格式化对象
const formattedDate = cx.datafmt.format(new Date(), 'myDateFormat');
console.log(formattedDate); // 输出: 2024-01-18
```

## 相关

- [del](../del/README.md)
- [format](../format/README.md)
- [get](../get/README.md) 