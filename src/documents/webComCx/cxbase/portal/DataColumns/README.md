# 数据列展示

`cx-data-columns` 数据列展示组件。

## 基础用法

使用 `datas` 传递数据列表，通过 `componentType` 控制组件类型。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --------- | --------------------------- | ---------------- | --------------------- | ------ |
| size | 尺寸 | String | large / default / small | default |
| datas | 传递给组件的参数 | Array<DataColumnsItem> | | |
| elAtts | vue3-seamless-scroll原生属性 | Object | | null |
| attCom | 传入的组件 | Object | | null |
| componentType | 组件类型 | String | icon / num / scroll | icon |
| showTip | 是否显示悬浮文字提示 | Boolean | | false |
| showBackground | 是否显示背景 | Boolean | | false |
| bgColor | 背景颜色 | String | | #fff |

## DataColumnsItem 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --------------- | -------- | ------ | ------ | ----- |
| headType | 头部件类型 | String | index, img | |
| footType | 尾部件类型 | String | index, img, text, btn | |
| title | 标题内容 | String | | |
| headImg | 当headType为img时的图片路径 | String | | |
| footImg | 当footType为img时的图片路径 | String | | |
| rtitle | 当footType为text时的标题内容 | String | | |
| btnText | 当footType为btn时的按钮名称 | String | | |
| indexColor | 序号颜色 | String | | |
| fontColor | 字体颜色 | String | | |
| bgColor | 背景颜色 | String | | |

## 插槽

| 名称 | 说明 | 参数 |
| ---------- | --------------- | ---- |
| header | 头部插槽 | data |
| body | 中间内容插槽 | data |
| footer | 尾部插槽 | data |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---------- | --------------- | ---- | -------- |
| rec-click | 点击查看详细内容 | data | |
| btn-click | 点击按钮事件 | data | |
