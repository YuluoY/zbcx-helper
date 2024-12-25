# getDefVal

取上传对象默认字段。

## 语法

```javascript
getDefVal() → {Object}
```

## 返回值

- Object - 默认字段对象

## 描述

获取上传对象的默认字段配置。

## 示例

```javascript
const defVal = cx.upload.getDefVal();
console.log('默认字段:', defVal);
```

## 注意事项

- 此方法为静态方法，可以直接调用
- 返回的对象包含上传对象的默认字段信息 