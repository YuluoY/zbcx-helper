# PPT预览组件

`cx-ppt-view` PPT预览组件

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| src | 文件的url地址，必传！如：'static/test.pptx' | String | | |
| waterMark | 水印设置相关参数，不传时不加水印 | Object | | |

## config 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ----- | ----- | ----- | ----- | ----- |
| watermark_txt | 水印的内容 | String | | |
| watermark_color | 水印字体颜色 | String | | |
| watermark_parent_node | 属性，所以需要在外面创建好dom的id。 | String | | |
| watermark_x | 水印起始位置x轴坐标 | Number | | |
| watermark_y | 水印起始位置Y轴坐标 | Number | | |
| watermark_rows | 水印行数 | Number | | |
| watermark_cols | 水印列数 | Number | | |
| watermark_x_space | 水印x轴间隔 | Number | | |
| watermark_y_space | 水印y轴间隔 | Number | | |
| watermark_font | 水印字体 | String | | |
| watermark_fontsize | 水印字体大小 | String | | |
| watermark_alpha | 水印透明度，要求设置在大于等于0.005 | Number | | |
| watermark_width | 水印宽度 | Number | | |
| watermark_height | 水印长度 | Number | | |
| watermark_angle | 水印倾斜度数 | Number | | |
| watermark_parent_width | 水印的总体宽度（默认值：body的scrollWidth和clientWidth的较大值） | Number | | |
| watermark_parent_height | 水印的总体高度（默认值：body的scrollHeight和clientHeight的较大值） | Number | | |
| watermark_id | 水印总体的id | String | | |
| watermark_prefix | 小水印的id前缀 | String | | |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ----- | ----- | ----- | ----- |
| loaded | 文件加载完成后的回调函数 | (this.$refs.file, this) | |
