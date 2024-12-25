# getGlAttByGraMajMin

根据图形表主、子类型取关联的属性表序列。

## 语法

```javascript
entities.getGlAttByGraMajMin(major, minor, filter)
```

## 参数

- `major` (Number) - 图形表主类型
- `minor` (Number) - 图形表子类型
- `filter` (Object) - [可选] 属性过滤对象

## 返回值

- (Array) - 返回关联的属性表序列。

## 描述

`getGlAttByGraMajMin` 方法用于根据图形表的主次类型查找并返回对应的属性表序列。可以通过filter参数对返回的属性表进行过滤。

## 示例

```javascript
// 创建实例
const entities = new cx.Entities([/* 实体数据 */]);

// 获取图形表主类型为 1001，子类型为 1 对应的属性表序列
const attTables = entities.getGlAttByGraMajMin(1001, 1);

// 使用过滤器
const filteredAttTables = entities.getGlAttByGraMajMin(1001, 1, {
    type: 'specific'  // 过滤特定类型的属性表
});

if (attTables.length > 0) {
    console.log('找到属性表:', attTables);
} else {
    console.log('未找到匹配的属性表');
}
```

## 注意事项

1. 使用前需要先创建类的实例，并传入实体数据
2. 主次类型必须对应一个有效的图形表
3. 参数必须是数字类型
4. filter参数是可选的，用于过滤返回的属性表
5. 返回值是一个数组，可能包含多个属性表
6. 如果没有找到匹配的属性表，返回空数组