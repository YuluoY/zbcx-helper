# makeComponentUrl

构造路由的组件url，统一处理成src/后的地址。

## 语法

```javascript
static makeComponentUrl(url: string): string
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| url | string | 组件路径 |

## 返回值

- string - 格式化组件url地址，统一处理成src/后的地址

## 示例

```javascript
// 格式化组件URL
const formattedUrl = cx.router.makeComponentUrl('ui/frame/Home.vue');
console.log(formattedUrl);  // 输出: src/ui/frame/Home.vue

const formattedUrl2 = cx.router.makeComponentUrl('src/ui/frame/Home.vue');
console.log(formattedUrl2);  // 输出: src/ui/frame/Home.vue
```

## 注意事项

- 直接通过 cx.router.makeComponentUrl 调用
- 会自动处理路径，确保以src/开头
- 如果输入路径已经包含src/，不会重复添加
- 用于统一组件路径的格式 