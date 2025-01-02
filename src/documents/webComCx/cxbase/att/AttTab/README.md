# 属性表单

`cx-att-tab` 属性表单(Table 模式)，支持单、多列展示。

## 属性

|  名称  |  说明  |  类型  |  可选值  |  默认值  |
|:------:|:------:|:------:|:--------:|:--------:|
|  `size`  |  尺寸  |  `String`  |  `large` / `default` / `small`  |  `default`  |
|  `flds`  |  字段信息数组  |  [`Array.<Fld>`](#fld-属性)  |  -  |  -  |
|  `col-num`  |  列数量  |  `Number`  |  `1` / `2` / `3`  |  `2`  |
|  `mode`  |  模式  |  `Number`  |  `0`-浏览 `1`-编辑 `2`-编辑之后做对比  |  `0`  |
|  `before-valbtn`  |  ValButton 插件调用之前的回调函数  |  `Function`  |  `function(fld, params)`  |  -  |
|  `after-valbtn`  |  ValButton 插件调用之后的回调函数  |  `Function`  |  `function(fld, flds, params)`  |  -  |

## Fld 属性

> 用 `cx.AttBase` 对象的 `makeInput` 方法构造。

|  名称  |  说明  |  类型  |  可选值  |  默认值  |
|:------:|:------:|:------:|:--------:|:--------:|
|  `colname`  |  列名  |  `String`  |  -  |  -  |
|  `title`  |  显示标题  |  `String`  |  -  |  -  |
|  `value`  |  字段值  |  `String`  |  -  |  -  |
|  `disporder`  |  显示顺序  |  `Number`  |  -  |  -  |
|  `type`  |  显示类型  |  `Number`  |  `cx.const.DISP_XXX`  |  -  |
|  `isnum`  |  是否数值类型  |  `Boolean`  |  -  |  -  |
|  `editable`  |  是否可编辑(mode: 1 生效)  |  `Boolean`  |  -  |  -  |
|  `required`  |  是否必填(mode: 1 生效)  |  `Boolean`  |  -  |  -  |
|  `rows`  |  文本显示行数  |  `Number`  |  -  |  -  |
|  `options`  |  下拉选项 - [{label: String, value: String}] (type: 2 生效)  |  `Array`  |  -  |  -  |
|  `config`  |  配置信息 - (ValButton, SelDyna, SelDepPos)  |  `Object`  |  -  |  -  |
|  `refChange`  |  引用计数器  |  `Number`  |  -  |  -  |

## 事件

|  名称  |  说明  |  参数  |  参数说明  |
|:------:|:------:|:------:|:----------:|
|  `values-change`  |  字段值发生变化  |  `(fld, changed)`  |  `fld`: 当前触发的字段对象，`changed`: 字段值是否改变  | 