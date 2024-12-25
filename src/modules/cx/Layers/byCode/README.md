# byCode

根据图层号取实体图层定义信息。

## 语法

```javascript
byCode(code: string): LayerDef
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| code | string | 10位图层编码 |

## 返回值

返回 `LayerDef` 对象，包含图层的定义信息。如果未找到对应的图层，返回 `undefined`。

## 示例

```javascript
const layers = new Layers(data);
const layerDef = layers.byCode('5402012101');
console.log(layerDef);
```

## 注意事项

- 图层编码必须是10位数字字符串
- 编码需要符合图层编码规则
- 如果找不到对应的图层定义，将返回 undefined 