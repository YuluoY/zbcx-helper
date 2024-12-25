# delDuplicate

去除重复数据（支持多个字段消除）。

## 语法

```javascript
delDuplicate(data, colnames)
```

## 参数

- `data` (Array): 数据
- `colnames` (String): 字段列名（支持多个列名，用逗号分隔）

## 描述

从数据中去除重复项，支持按多个字段进行去重。

## 示例

```javascript
const uniqueData = cx.util.delDuplicate(data, 'name,age');
console.log('去重数据:', uniqueData);
```

## 注意事项

- 此方法为静态方法，可以直接调用 