# getZyTypes

获取category下资源类型定义对象序列，如：阀门、弯头。

## 语法

```javascript
getZyTypes(categoryCode: string, graMajMin?: Object): Array.<Object>
```

## 参数

| 参数名 | 类型 | 描述 | 是否可选 |
|--------|------|------|----------|
| categoryCode | string | 资源类别编号，无其他参数时返回该域下全部类型 | 否 |
| graMajMin | Object | 图形表主子类型对象，{major:, minor:} | 是 |

## 返回值

返回类别的layer对象序列。如果未找到匹配的资源类型，返回空数组。

## 示例

```javascript
const layers = new Layers(data);

// 获取指定类别下的所有资源类型
const allTypes = layers.getZyTypes('540201');
console.log(allTypes);
// 输出示例：
// [
//   { code: '54022101', name: '弯头', ... },
//   { code: '54022102', name: '阀门', ... },
//   ...
// ]

// 使用图形表主子类型过滤
const filteredTypes = layers.getZyTypes('540201', {
  major: 1,
  minor: 2
});
console.log(filteredTypes);
```

## 注意事项

- 资源类别编码必须是有效的6位编码
- 如果提供了graMajMin参数，将只返回匹配主子类型的资源类型
- 返回的数组按资源类型编码排序
- 如果类别编码无效或未找到匹配的资源类型，��回空数组 