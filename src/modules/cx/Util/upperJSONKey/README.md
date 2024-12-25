# upperJSONKey

把对象的key转为大写。

## 语法

```javascript
upperJSONKey(data, isChangeSrc) → {Object}
```

## 参数

- `data` (Object): 源对象
- `isChangeSrc` (Boolean, 可选): 是否修改源对象，默认值为false

## 返回值

- Object: 修改后的数据对象

## 描述

将对象的所有键转换为大写。

## 示例

```javascript
const newData = cx.util.upperJSONKey(data);
console.log('大写键对象:', newData);
```

## 注意事项

- 此方法为静态方法，可以直接调用 