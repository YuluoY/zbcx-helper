# setData

设置layer数据序列。

## 语法

```javascript
setData(data: Array)
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| data | Array | 实体信息数组，包含图层定义数据 |

## 返回值

无

## 示例

```javascript
const layers = new Layers();

// 设置图层数据
const layerData = [
  {
    code: '5402012101',
    name: '排水雨水弯头',
    domain: '5402',
    category: '01',
    type: '21',
    ...
  },
  // 更多图层定义...
];

layers.setData(layerData);
```

## 注意事项

- 调用此方法会覆盖之前的所有图层数据
- 数据数组中的每个对象必须包含完整的图层定义信息
- 通常在初始化或需要更新整个图层数据时使用
- 确保传入的数据格式正确，包含必要的字段（如code、name等） 