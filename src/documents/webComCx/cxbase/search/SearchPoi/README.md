# 兴趣点检索

`cx-search-poi` 兴趣点检索组件

## 基础用法

使用 `params` 属性传入推荐类型列表，使用插槽自定义搜索结果的展示。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| -----| --- | -----| --- | ---- |
| params | 参数对象 | Object | | {} |
| params.types | 推荐的类型列表 | Array&lt;Object&gt; | | |
| types.name | 名称 | String | | |
| types.icon | 图标 | String | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | --- | --- | -------- |
| click-tpye | 点推荐类型的卡片 | data | 返回当前选择的卡片对象 |
| searchpoi | 点击搜索按钮的事件 | searchInp | 输入的内容 |
| clear-poi | 点击清除按钮的事件 | | |

## 插槽

| 名称 | 说明 | 参数 |
| ---- | --- | --- |
| default | 搜索结果展示插槽 | |
