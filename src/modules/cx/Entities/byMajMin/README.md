# byMajMin

根据主次编码获取实体。

## 语法

```javascript
entities.byMajMin(major, minor)
```

## 参数

- `major` (Number) - 实体主类型
- `minor` (Number) - 实体子类型

## 返回值

- (Object|Null) - 返回匹配的实体对象。如果未找到匹配的实体，则返回 `null`。

## 描述

`byMajMin` 方法用于根据实体主类型和子类型查找并返回对应的实体对象。每个实体都有唯一的主次类型组合。

## 示例

```javascript
// 创建实例
const entities = new cx.Entities([/* 实体数据 */]);

// 获取主类型为 1001，子类型为 1 的实体
const entity = entities.byMajMin(1001, 1);

if (entity) {
    console.log('找到实体:', entity);
} else {
    console.log('未找到匹配的实体');
}
```

## 注意事项

1. 使用前需要先创建类的实例，并传入实体数据
2. 主次类型的组合在系统中必须是唯一的
3. 参数必须是数字类型
4. 使用前确保实体已经正确加载到系统中