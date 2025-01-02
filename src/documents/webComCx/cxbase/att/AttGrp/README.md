# 属性分组编辑

`cx-att-grp` 对属性进行分组编辑。

## 属性

|  名称  |  说明  |  类型  |  可选值  |  默认值  |
|:------:|:------:|:------:|:--------:|:--------:|
|  `size`  |  尺寸  |  `String`  |  `large` / `default` / `small`  |  `default`  |
|  `flds`  |  字段信息数组  |  [`Array.<Fld>`](#fld-属性)  |  -  |  -  |
|  `title`  |  标题  |  `String`  |  -  |  -  |
|  `col-num`  |  列数量  |  `Number`  |  `1` / `2` / `3`  |  `2`  |
|  `mode`  |  模式  |  `Number`  |  `0`-浏览 `1`-编辑  |  `0`  |
|  `editable`  |  是否可编辑  |  `Boolean`  |  -  |  `false`  |
|  `border-com`  |  Border 组件名（边框和底纹）  |  `String`  |  -  |  `cx-border-regular`  |
|  `header-com`  |  Header 组件名（标题头）  |  `String`  |  -  |  `cx-header-attgrp`  |
|  `att-com`  |  Att 组件名（编辑属性）  |  `String`  |  -  |  `cx-att-tab`  |
|  `border`  |  组件 Border 的参数（请参考具体的组件传递）  |  `Object`  |  -  |  -  |
|  `header`  |  组件 Header 的参数 (请参考具体的组件传递)  |  `Object`  |  -  |  -  |
|  `content`  |  组件 Content 的参数 (请参考具体的组件传递)  |  `Object`  |  -  |  -  |
|  `save`  |  保存函数 - function(), 返回 Promise,true 代表成功  |  `Function`  |  -  |  -  |
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
|  `valid`  |  验证信息  |  [`Valid 属性`](#valid-属性)  |  -  |  -  |

## Valid 属性

|  名称  |  说明  |  类型  |  可选值  |  默认值  |
|:------:|:------:|:------:|:--------:|:--------:|
|  `minlen`  |  最小长度  |  `Number`  |  -  |  -  |
|  `maxlen`  |  最大长度  |  `Number`  |  -  |  -  |
|  `len`  |  固定长度  |  `Number`  |  -  |  -  |
|  `min`  |  最小值  |  `Number`  |  -  |  -  |
|  `max`  |  最大值  |  `Number`  |  -  |  -  |
|  `pattern`  |  正则表达式  |  `Pattern`  |  -  |  -  |
|  `func`  |  函数验证  |  `String`  |  -  |  -  |

## 插槽

|  名称  |  描述  |  参数  |
|:------:|:------:|:------:|
|  `header-preappend`  |  标题之前  |  -  |
|  `header-append`  |  标题之后  |  -  |
|  `header-title`  |  标题附加  |  -  | 