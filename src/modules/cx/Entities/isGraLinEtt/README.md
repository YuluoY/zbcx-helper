# isGraLinEtt

判断指定实体是否为线型图形实体。

## 语法

```javascript
entities.isGraLinEtt(major, minor)
```

## 参数

- `major` (Number) - 实体主类型
- `minor` (Number) - 实体子类型

## 返回值

- (Boolean) - 如果是线型图形实体返回 `true`，否则返回 `false`。

## 描述

`isGraLinEtt` 方法用于根据实体的主类型和子类型判断是否为线型图形实体。线型图形实体是指在系统中用于表示线段、折线、曲线等一维几何图形的实体类型。

## 示例

```javascript
// 创建实例
const entities = new cx.Entities([/* 实体数据 */]);

// 判断是否为线型图形实体
if (entities.isGraLinEtt(1001, 1)) {
    console.log('这是一个线型图形实体');
} else {
    console.log('这不是线型图形实体');
}
```

## 注意事项

1. 使用前需要先创建类的实例，并传入实体数据
2. 参数必须是有效的数字类型
3. 此方法仅判断实体是否为线型，不验证实体的具体几何数据
4. 线型图形包括直线、折线、曲线等一维图形