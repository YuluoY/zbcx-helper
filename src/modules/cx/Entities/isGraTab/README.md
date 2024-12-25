# isGraTab

根据主类型、子类型判断是否图形表。

## 语法

```javascript
entities.isGraTab(major, minor)
```

## 参数

- `major` (Number) - 图形表主类型
- `minor` (Number) - 图形表子类型

## 返回值

- (Boolean) - 如果是图形表返回 `true`，否则返回 `false`。

## 描述

`isGraTab` 方法用于根据图形表的主类型和子类型判断是否为图形表。图形表是用于存储和管理各类几何图形数据的表格，包括点、线、面等各种类型的图形数据。

## 示例

```javascript
// 创建实例
const entities = new cx.Entities([/* 实体数据 */]);

// 判断是否为图形表
if (entities.isGraTab(1001, 1)) {
    console.log('这是一个图形表');
} else {
    console.log('这不是图形表');
}
```

## 注意事项

1. 使用前需要先创建类的实例，并传入实体数据
2. 参数必须是有效的数字类型
3. 此方法仅判断表格类型，不验证表格中的具体数据
4. 图形表是所有几何图形数据表的总称，包括点、线、面等各类图形数据表 