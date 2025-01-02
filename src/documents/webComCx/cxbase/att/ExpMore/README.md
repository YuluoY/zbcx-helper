# 属性表单

`cx-exp-more` 属性表单(Form 模式)，支持单、多列展示。

## 属性

|  名称  |  说明  |  类型  |  可选值  |  默认值  |
|:------:|:------:|:------:|:--------:|:--------:|
|  `size`  |  尺寸  |  `String`  |  `large` / `default` / `small`  |  `default`  |
|  `Fld`  |  字段信息数组  |  `Array`  |  -  |  -  |

## Fld 属性

> 用 `cx.AttBase` 对象的 `makeInput` 方法构造。

|  名称  |  说明  |  类型  |  可选值  |  默认值  |
|:------:|:------:|:------:|:--------:|:--------:|
|  `colname`  |  列名  |  `String`  |  -  |  -  |
|  `title`  |  显示标题  |  `String`  |  -  |  -  |
|  `value`  |  字段值  |  `String`  |  -  |  -  |
|  `disporder`  |  显示顺序  |  `Number`  |  -  |  -  |
|  `type`  |  显示类型  |  `Number`  |  -  |  -  |
|  `isnum`  |  是否数值类型  |  `Boolean`  |  -  |  -  |
|  `options`  |  下拉选项 - [{label: String, value: String}]  |  `Array`  |  -  |  -  |
|  `config`  |  配置信息 - (ValButton, SelDyna, SelDepPos)  |  `Object`  |  -  |  -  |
|  `refChange`  |  引用计数器  |  `Number`  |  -  |  -  |

## 事件

|  名称  |  说明  |  参数  |  参数说明  |
|:------:|:------:|:------:|:----------:|
|  `values-change`  |  字段值发生变化  |  `Fld`  |  `fld`: 当前触发的字段对象，`changed`: 字段值是否改变  | 