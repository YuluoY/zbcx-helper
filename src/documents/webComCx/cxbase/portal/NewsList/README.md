# 新闻展示组件

`cx-news-list` 新闻展示组件，基于cx-data-sketch的基础上封装。

## 基础用法

使用 `newlist` 传递新闻数据列表。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ----| ---- | ----- | ----- |
| **newlist** | 数据 | NewsListConfig | | |

## NewsListConfig 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----------- | ---- | ------ | ------ | ----- |
| **newlist** | 数据列表 | Array<NewsItem> | | |
| **titleheight** | 上行列高(新闻标题) | String | | .3rem |
| **labelheight** | 下行列高(新闻标签) | String | | .3rem |

## NewsItem 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----------- | ---- | ------ | ------ | ----- |
| **imgUrl** | 新闻图片 | String | | |
| **name** | 新闻标题 | String | | |
| **introduce** | 新闻简介 | String | | |
| **label** | 新闻标签 | Array | | |
| **footer** | 底部数据 | Object | | |
