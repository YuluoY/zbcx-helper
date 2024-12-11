执行数据库查询操作。

参数说明：
- major: 实体（主表）主类型
- minor: 实体（主表）子类型
- params: 查询参数对象，包含以下可选属性：
  - _key: 表达式名字，对应sqlexp表name，该搜索库中exec字段配置条件语句
  - vals: 替换sql中有 ? 变量，以separator分隔依次替换
  - separator: vals的分隔符（字符串中可能有,可以设置特殊分隔符）
  - args: 自定义SQL条件件对象数组 [[fld1,oper,val,连接符]]
  - tables: 联合查询表名，如 a:b:cx_entity;c:cx_fld
  - cols: 返回的列名，默认查询所有字段
  - geometry: 是否返回空间数据
  - geom: 范围查询 {type, coordinates}
  - r: 基于geom的缓冲区半径
  - orderby: 排序规则
  - init: 分页标记
  - pageno: 页码
  - pagesize: 每页数据条数

示例：
```javascript
cx.svr.data.query(101, 1, {
  args: [['id', '>', 0], ['name', '=', '测试', 'AND']],
  pagesize: '10'
})
```