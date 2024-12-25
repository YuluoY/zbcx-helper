# load 方法

加载图片。

## 语法

```typescript
static load(key: string, url: string) → {Promise<Image>}
```

## 参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| key | String | 缓存的KEY |
| url | String | 图片URL |

## 返回值

(Promise<Image>) - 返回一个 Promise 对象，resolve 时返回加载的图片对象

## 描述

加载指定 URL 的图片，并将其缓存到指定的 key 中。如果该 key 已经存在缓存，则直接返回缓存的图片。

## 示例

```javascript
// 加载并缓存图片
cx.ImageLoader.load('logo', '/images/logo.png')
  .then(image => {
    // 使用加载的图片
    document.body.appendChild(image);
  })
  .catch(error => {
    console.error('图片加载失败:', error);
  });

// 再次加载相同的图片会从缓存返回
cx.ImageLoader.load('logo', '/images/logo.png')
  .then(image => {
    // 直接从缓存获取图片
    console.log('从缓存获取图片');
  });
```

## 注意事项

1. 图片加载失败时会 reject Promise
2. 相同的 key 会覆盖之前缓存的图片
3. URL 必须是有效的图片地址
4. 建��使用有意义的 key 便于管理缓存 