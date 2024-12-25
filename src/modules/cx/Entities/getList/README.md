# getList

取全部实体对象序列。

## 语法

```javascript
entities.getList()
```

## 参数

无

## 返回值

- (Array<Object>) - 返回所有实体对象的数组。

## 描述

`getList` 方法用于获取当前实例中所有的实体对象。返回的数组包含了所有已加载的实体对象。

## 示例

```javascript
// 创建实例
const entities = new cx.Entities([/* 实体数据 */]);

// 获取所有实体
const allEntities = entities.getList();

console.log('实体总数:', allEntities.length);
allEntities.forEach((entity, index) => {
    console.log(`实体 ${index + 1}:`, entity);
});
```

## 注意事项

1. 使用前需要先创建类的实例，并传入实体数据
2. 返回的是一个数组，包含所有实体对象
3. 如果没有实体数据，将返回空数组
4. 此方法不接受任何参数