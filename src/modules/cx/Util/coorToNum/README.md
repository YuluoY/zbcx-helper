# coorToNum

将coordinate类型坐标转换成Number类型。

## 语法

```javascript
coorToNum(coor)
```

## 参数

- `coor` (ol.Coordinate): feature的coordinate

## 描述

将coordinate类型的坐标转换为Number类型。

## 示例

```javascript
const num = cx.util.coorToNum(coordinate);
console.log('Number:', num);
```

## 注意事项

- 此方法为静态方法，可以直接调用 