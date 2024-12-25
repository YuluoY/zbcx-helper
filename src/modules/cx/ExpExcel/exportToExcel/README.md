# exportToExcel

将JSON数据导出为Excel文件。

## 参数
- param: `Object` - 导出参数对象
  - data: `Array<Object>` - 待导出的数据，内部需要改变，（json / data）二选一
  - json: `Array<Object>` - 待导出的json数据，不会破坏数据，内部深拷贝，（json / data）二选一
  - columns: `Object | Array` - 列字段及别名的map集合。格式：{column1: column1title, column2: column2title, ...} / [{name: String, title: String}，...]
  - title: `Object` - [可选] 主标题。不传的话不显示。
  - filename: `String` - [可选] 待导出的文件的文件名，默认值为 'mySheet'
  - style: `Object` - [可选] excel文件的主标题、列标题、单元格等样式
    - title: `ExcelStyle` - [可选] 主标题样式
      - fill: `Object` - [可选] 主标题填充样式
      - font: `Object` - [可选] 主标题字体样式
      - alignment: `Object` - [可选] 主标题对齐样式
      - border: `Object` - [可选] 主标题边框样式
    - head: `ExcelStyle` - [可选] 列标题样式
    - comm: `ExcelStyle` - [可选] 普通单元格样式

## 返回值
无

## 示例
```javascript
// 导出简单数据
cx.ExpExcel.exportToExcel({
  json: [
    { name: '张三', age: 18 },
    { name: '李四', age: 20 }
  ],
  columns: {
    name: '姓名',
    age: '年龄'
  },
  filename: '人员信息'
});

// 使用数组形式的columns
cx.ExpExcel.exportToExcel({
  json: [
    { name: '张三', age: 18 },
    { name: '李四', age: 20 }
  ],
  columns: [
    { name: 'name', title: '姓名' },
    { name: 'age', title: '年龄' }
  ],
  filename: '人员信息'
});

// 带样式的导出
cx.ExpExcel.exportToExcel({
  json: [
    { name: '张三', age: 18 },
    { name: '李四', age: 20 }
  ],
  columns: {
    name: '姓名',
    age: '年龄'
  },
  filename: '人员信息',
  title: '人员基本信息表',
  style: {
    title: {
      font: { 
        name: '宋体',
        sz: 16,
        bold: true
      },
      alignment: {
        horizontal: 'center'
      }
    },
    head: {
      font: {
        bold: true
      }
    }
  }
});