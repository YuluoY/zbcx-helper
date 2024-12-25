# byName

根据名称获取实体对象。

## 语法

```javascript
entities.byName(name)
```

## 参数

- `name` (String) - 实体名称

## 返回值

- (Object) - 返回匹配的实体对象。如果未找到匹配的实体，则返回 `null`。

## 描述

`byName` 方法用于根据实体的名称查找并返回对应的实体对象。每个实体都可以有一个唯一的名称标识。

## 示例

```javascript
// 创建实例
const entities = new cx.Entities([/* 实体数据 */]);

// 根据名称获取实体
const entity = entities.byName('实体1');

if (entity) {
    console.log('找到实体:', entity);
} else {
    console.log('未找到匹配的实体');
}
```

## 注意事项

1. 使用前需要先创建类的实例，并传入实体数据
2. 名称参数必须是字符串类型
3. 实体名称在系统中应该是唯一的
4. 名称匹配是区分大小写的