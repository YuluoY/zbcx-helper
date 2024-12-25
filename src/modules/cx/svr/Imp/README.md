# imp

数据导入服务类

## 类名
cx.svr.imp

## 功能说明
提供数据导入相关的服务，包括Excel表格导入、压缩包导入等功能。

## 方法列表
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| getXlsData | 获取表数据 | [查看详情](./getXlsData/README.md) |
| getXlsHeader | 获取表头 | [查看详情](./getXlsHeader/README.md) |
| impXls | 导入Excel | [查看详情](./impXls/README.md) |
| impZip | 导入压缩包 | [查看详情](./impZip/README.md) |
| url | 取服务对应的网址 | [查看详情](./url/README.md) |

## 使用示例
```typescript
// 获取Excel表数据
await cx.svr.imp.getXlsData({ 
  filename: 'path/to/excel.xlsx'
});

// 获取Excel表头
await cx.svr.imp.getXlsHeader({ 
  filename: 'path/to/excel.xlsx'
});

// 导入Excel数据
await cx.svr.imp.impXls({ 
  filename: 'path/to/excel.xlsx',
  data: [{
    _major: 1,
    _minor: 2,
    index: 0,
    header: {
      0: 'name',
      1: 'age',
      2: 'department'
    }
  }],
  prj_id: 123,
  attachfld: {
    prj_name: "测试项目",
    reg: "120101"
  }
});

// 导入压缩包
await cx.svr.imp.impZip('entity', 1, { 
  fld: 'name',
  filename: 'path/to/archive.zip',
  dir: 'path/to/extract'
});

// 获取服务地址
const serviceUrl = cx.svr.imp.url();