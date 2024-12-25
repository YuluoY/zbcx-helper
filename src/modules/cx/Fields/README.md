# Fields 类

Fields 类提供了一系列用于处理字段(field)相关操作的方法。该类需要通过 `new cx.Fields()` 进行实例化。

## 构造函数

### init(data)

初始化 Fields 实例。

#### 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| data | Object | 初始化数据 |
| data.fld | Array | 字段列表 |
| data.fldvalue | Array | 字段取值列表 |

## 方法

### getFld(tabname, colname)
根据表名、字段名取字段信息。

### getFld2(major, minor[, colname])
根据主类型，子类型，字段名取字段信息。

### getFldValsDb(tabname, colname)
获取数据库表字段的取值列表。

### getFlds()
获取字段列表。

### getFldvalue(tabname, colname)
获取字段值。

### getFldvalues(flds, fldvalues)
获取字段值列表。

### getOptions()
获取选项列表。

### getPublicValue(tabname, colname)
用public构造tabname表colname字段的fldvalue对象序列。

### init(data)
初始化字段数据。

### isNeedFldvalue()
检查是否需要字段值。

### locFld()
定位字段。

### locFldval()
定位字段值。 