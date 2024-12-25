# Upload

`cx.upload` 类 - 上传文件的辅助对象。

## 构造函数

```javascript
new Upload()
```

## 静态方法

- **getDefVal()** → {Object}: 取上传对象默认字段

## 使用示例

```javascript
// 获取上传对象默认字段
const defVal = cx.upload.getDefVal();
console.log('默认字段:', defVal);

// 创建Upload实例
const uploadInstance = new cx.upload();
```

## 注意事项

- 静态方法可以直接通过 `cx.upload` 调用
- 实例方法需要通过 `new cx.upload()` 创建实例后使用 