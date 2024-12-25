# 显示类型相关常量

## DISP_AUDIO
音频显示类型。

## DISP_AUTOCODE
自动编码显示类型。

## DISP_CHECKBOX
复选框显示类型。

## DISP_DATE
日期显示类型。

## DISP_DATEYEAR
年份显示类型。

## DISP_DROPDOWN
下拉框显示类型。

## 示例

```js
// 设置为日期显示类型
field.displayType = cx.consts.DISP_DATE;

// 设置为下拉框显示类型
field.displayType = cx.consts.DISP_DROPDOWN;

// 判断是否为复选框类型
if (field.displayType === cx.consts.DISP_CHECKBOX) {
  // 复选框特定的处理逻辑
}
``` 