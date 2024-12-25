# loc 方法

取实体的多语言值。

## 语法

```javascript
loc(entity)
```

## 参数

- `entity` (Object) - 实体信息

## 返回值

- (String) - 实体的多语言值

## 描述

该方法用于获取指定实体的多语言文本值。它会根据当前系统的语言设置，返回相应的本地化文本。

## 示例

```javascript
const entities = new cx.Entities(data);
const entity = entities.byMajMin(1001, 1);
const localizedText = entities.loc(entity);
console.log(localizedText); // 输出实体的本地化文本
```

## 注意事项

1. 确保实体对象包含了多语言相关的属性
2. 如果找不到对应的多语言文本，可能会返回默认值或空字符串
3. 多语言文本的返回值依赖于系统当前的语言设置 