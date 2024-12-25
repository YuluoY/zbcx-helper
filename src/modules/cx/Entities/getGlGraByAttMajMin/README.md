# getGlGraByAttMajMin

根据实体主、子类型取关联图形表信息，用entity表tabgrp关联。

## 语法

```javascript
entities.getGlGraByAttMajMin(major, minor)
```

## 参数

- `major` (Number) - 实体主类型
- `minor` (Number) - 实体子类型

## 返回值

- (Object|Null) - 返回匹配的图形表对象。如果未找到匹配的图形表，则返回 `null`。

## 描述

`getGlGraByAttMajMin` 方法用于根据实体的主次类型查找并返回对应的图形表对象。这个方法主要用于通过entity表的tabgrp字段建立实体和图形表之间的关联。

## 示例

```javascript
// 创建实例
const entities = new cx.Entities([/* 实体数据 */]);

// 获取实体主类型为 2001，子类型为 1 对应的图形表
const graphicTable = entities.getGlGraByAttMajMin(2001, 1);

if (graphicTable) {
    console.log('找到图形表:', graphicTable);
} else {
    console.log('未找到匹配的图形表');
}
```

## 注意事项

1. 使用前需要先创建类的实例，并传入实体数据
2. 主次类型必须对应一个有效的实体
3. 参数必须是数字类型
4. 确保entity表中的tabgrp字段已正确配置
5. 此方法仅返回图形表对象，不包含具体的图形数据 