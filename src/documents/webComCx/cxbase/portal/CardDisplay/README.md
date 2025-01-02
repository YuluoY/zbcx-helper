# 卡列上下展示

`cx-card-display` 卡片列表上下展示。

## 基础用法

使用 `datas` 传递卡片数据，通过 `divHeight` 和 `cardHeight` 控制卡片的高度。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | --- | ------ | ------ |
| size | 尺寸 | String | large / default / small | default |
| datas | 传递给组件的参数 | Array<CardDisplayData> | | |
| divHeight | 卡片列表中每个盒子的高度 | String | | 1.2rem |
| cardHeight | 卡片列表中每个盒子下面内容的高度 | String | | 0.8rem |

## CardDisplayData 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ------------- | ---- | ------ | ------ | ----- |
| title | 标题 | String | | |
| content | 内容 | String | | |
| img | 图片 | String | | |
| time | 时间 | String | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---------- | --------------- | ---- | -------- |
| click-evnt | 点击查看详细内容 | data | 点击的卡片数据 |
