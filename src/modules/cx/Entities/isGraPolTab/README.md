# isGraPolTab

根据主类型、子类型判断是否面图形表。

## 语法

```javascript
entities.isGraPolTab(major, minor)
```

## 参数

- `major` (Number) - 图形表主类型
- `minor` (Number) - 图形表子类型

## 返回值

- (Boolean) - 如果是面图形表返回 `true`，否则返回 `false`。

## 描述

`isGraPolTab` 方法用于根据图形表的主类型和子类型判断是否为面图形表。面图形表是用于存储和管理多边形、区域等二维几何图形数据的表格。

## 示例

```javascript
// 创建实例
const entities = new cx.Entities([/* 实体数据 */]);

// 判断是否为面图形表
if (entities.isGraPolTab(1001, 1)) {
    console.log('这是一个面图形表');
} else {
    console.log('这不是面图形表');
}
```

## 注意事项

1. 使用前需要先创建类的实例，并传入实体数据
2. 参数必须是有效的数字类型
3. 此方法仅判断表格类型，不验证表格中的具体数据
4. 面图形表用于管理多边形、区域等二维图形数据 