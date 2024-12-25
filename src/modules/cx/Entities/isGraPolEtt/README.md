# isGraPolEtt

根据主类型、子类型判断是否面图形实体。

## 语法

```javascript
entities.isGraPolEtt(major, minor)
```

## 参数

- `major` (Number) - 实体主类型
- `minor` (Number) - 实体子类型

## 返回值

- (Boolean) - 如果是面图形实体返回 `true`，否则返回 `false`。

## 描述

`isGraPolEtt` 方法用于根据实体的主类型和子类型判断是否为面图形实体。面图形实体是指在系统中用于表示多边形、区域等二维几何图形的实体类型。

## 示例

```javascript
// 创建实例
const entities = new cx.Entities([/* 实体数据 */]);

// 判断是否为面图形实体
if (entities.isGraPolEtt(1001, 1)) {
    console.log('这是一个面图形实体');
} else {
    console.log('这不是面图形实体');
}
```

## 注意事项

1. 使用前需要先创建类的实例，并传入实体数据
2. 参数必须是有效的数字类型
3. 此方法仅判断实体是否为面型，不验证实体的具体几何数据
4. 面图形包括多边形、区域等二维图形 