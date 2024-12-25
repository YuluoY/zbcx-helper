# ImageLoader 类

图片加载器类，提供图片加载和缓存功能。可以通过 `cx.ImageLoader` 访问。

## 静态属性

### #cache
- 类型：`cx.ICache`
- 描述：缓存对象，用于存储已加载的图片

## 方法

### 静态方法

- [load](load/README.md) - 加载图片

## 使用示例

```javascript
// 加载图片
cx.ImageLoader.load('myImage', 'http://example.com/image.jpg')
  .then(image => {
    console.log('图片加载成功:', image);
  })
  .catch(error => {
    console.error('图片加载失败:', error);
  });

// 访问缓存对象
const cache = cx.ImageLoader.cache;
```

## 注意事项

1. 图片加载是异步操作，返回 Promise 对象
2. 加载的图片会被缓存，相同的 key 再次加载时会直接从缓存返回
3. 建议为不同的图片使用唯一的 key 值
4. 缓存对象是静态的，在整个应用程序中共享 