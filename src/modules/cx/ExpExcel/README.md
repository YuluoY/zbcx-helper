# cx.ExpExcel

Excel导出工具类，提供了将数据导出为Excel文件的功能。

## 方法

### exportToExcel(param)
将JSON数据导出为Excel文件。

### exportToSheets(param)
导出多个sheet页的Excel文件。

### fillterFileName(param)
过滤文件名。

### getCharCol(param)
获取列字符。

### stringToArrayBuffer(str)
将字符串转换为字符流。

## 样式说明

### ExcelStyle 对象参数
用于定义Excel文件中的样式，包括以下属性：

#### fill - 填充样式
- patternType: 图表类型(可取值：'solid' 或 'none')
- fgColor: 填充颜色
- bgColor: 边框颜色

#### font - 字体样式
- name: 单元格内容的字体(如'宋体')
- sz: 字体大小
- color: 字体颜色
- bold: 是否加粗（默认false）
- underline: 是否加下划线（默认false）
- italic: 是否斜体（默认false）
- strike: 字体中间是否加入横划线（默认false）
- outline: 是否显示轮廓线（默认false）
- shadow: 是否有阴影
- vertAlign: 是否强制不准自动换行(默认false）

#### alignment - 对齐样式
- vertical: 单元格内字体垂直方向��齐方式（可取值:"bottom"||"center"||"top" ,默认bottom,下对齐）
- horizontal: 单元格内字体水平方向对齐方式（可取值:"bottom"||"center"||"top" ,默认bottom,左对齐）
- wrapText: 单元格内容是否自动换行（默认为false）
- readingOrder: 指定内容的阅读顺序（可取值：2（for right-to-left）...）
- textRotation: 单元格内容旋转角度（取值范围（0~255）,默认角度为0）

#### border - 边框样式
- top: 上边框的样式
  - color: 上边框的线条颜色
  - style: 上边框的线条样式
- bottom: 下边框的样式
  - color: 下边框的线条颜色
  - style: 下边框的线条样式
- left: 左边框的样式
  - color: 左边框的线条颜色
  - style: 左边框的线条样式
- right: 右边框的样式
  - color: 右边框的线条颜色
  - style: 右边框的线条样式
- diagonal: 对角线的样式
  - color: 对角线的线条颜色
  - style: 对角线的线条样式
- diagonalUp: 对角线方向
- diagonalDown: 对角线方向

### 边框样式（BORDER_STYLE）可选值
- thin
- medium
- thick
- dotted
- hair
- dashed
- mediumDashed
- dashDot
- mediumDashDot
- dashDotDot
- mediumDashDotDot
- slantDashDot 