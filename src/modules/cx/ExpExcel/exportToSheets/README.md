# exportToSheets

导出多个sheet页的Excel文件。

## 参数
- param: `Object` - 导出参数对象
  - json: `Object<Array<Object>>` - 待导出的json数据。格式{'tab1': [{},{}], 'tab2': [{},{}] }
  - columns: `Object<Object>` - 列配置信息
  - filename: `String` - [可选] 待导出的文件的文件名
  - style: `Object` - [可选] excel文件的主标题、列标题、单元格等样式
    - head: `ExcelStyle` - [可选] 列标题样式
    - comm: `ExcelStyle` - [可选] 普通单元格样式

## 返回值
无

## 示例
```javascript
// 导出多个sheet页
cx.ExpExcel.exportToSheets({
  json: {
    '人员信息': [
      { name: '张三', age: 18 },
      { name: '李四', age: 20 }
    ],
    '部门信息': [
      { deptName: '技术部', manager: '张三' },
      { deptName: '销售部', manager: '李四' }
    ]
  },
  columns: {
    '人员信息': {
      name: '姓名',
      age: '年龄'
    },
    '部门信息': {
      deptName: '部门名称',
      manager: '部门经理'
    }
  },
  filename: '公司基本信息',
  style: {
    head: {
      font: {
        bold: true
      }
    }
  }
});