# loc

取实体的多语言值。

## 语法

```javascript
loc(lyrDef: Object): string
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| lyrDef | Object | 图层对象 |

## 返回值

返回图层对象的多语言显示文本（string）。

## 示例

```javascript
const layers = new Layers(data);
const layerDef = layers.byCode('5402012101');
const localizedName = layers.loc(layerDef);
console.log(localizedName);  // 输出当前语言环境下的图层名称
```

## 注意事项

- 输入必须是有效的图层对象
- 返回值取决于当前系统的语言设置
- 如果找不到对应的多语言值，将返回默认值 