# impXls

导入Excel

## 方法签名
```typescript
static impXls(params: Object) => Promise
```

## 参数说明
- `params` (Object): 参数
  - `filename` (String): 文件路径名
  - `data` (Array<SheetCfg>): 表格sheet页配置序列
  - `prj_id` (Number, optional): 工单id
  - `attachfld` (Object, optional): 附件参数，不在表格中但需要额外写入数据库中的数据，如 {"prj_name": "测试项目","reg": "120101"}

## 参数 SheetCfg 说明
- `_major` (Number): 目标表主类型
- `_minor` (Number): 目标表子类型
- `index` (Number): 表格中excel中sheet的序号，从0开始
- `header` (Object): 字段映射对象，key是sheet中从0开始的列序号，value是目标表字段，解构如 {0: dbfld1, 1: dbfld2, ...}

## 返回值
Promise 对象

## 功能描述
导入Excel表格数据到系统中。

## 示例
```typescript
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
``` 