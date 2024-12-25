# getLyrsByMajMin

根据主、子类型、属性对象获取实体图层对象信息。

## 语法

```javascript
getLyrsByMajMin(major: number, minor: number, att?: Object): Array
```

## 参数

| 参数名 | 类型 | 描述 | 是否可选 |
|--------|------|------|----------|
| major | number | 实体主类型 | 否 |
| minor | number | 实体子类型 | 否 |
| att | Object | 属性对象，与layer的exp进行匹配 | 是 |

## 返回值

返回匹配的图层对象数组。如果未找到匹配的图层，返回空数组。

## 示例

```javascript
const layers = new Layers(data);

// 不带属性对象查询
const layers1 = layers.getLyrsByMajMin(1, 2);

// 带属性对象查询
const layers2 = layers.getLyrsByMajMin(1, 2, {
  type: 'valve',
  status: 'open'
});

console.log(layers1);
// 输出示例：
// [
//   {
//     code: '5402012101',
//     name: '排水雨水弯头',
//     major: 1,
//     minor: 2,
//     ...
//   },
//   ...
// ]
```

## 注意事项

- 主类型和子类型必须是有效的数字
- 属性对象是可选的，用于进一步筛选匹配的图层
- 如果提供了属性对象，会与图层定义中的exp表达式进行匹配
- 返回的数组包含所有匹配条件的图层定义 