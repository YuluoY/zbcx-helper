# execute

运行某个具体的功能项

## 方法签名
```typescript
static execute(plugNode: Object, getPlugValue: function, curNode: Object)
```

## 参数说明
- `plugNode` (Object): 工具/菜单项
- `getPlugValue` (Function): 取字符串中的变量的值的函数 - function(key)
- `curNode` (Object): 当前结点

## 功能描述
运行某个具体的功能项。

## 示例
```typescript
// 定义获取插件值的函数
const getPlugValue = (key) => {
    // 返回对应的值
    return someValue;
};

// 执行插件功能
await cx.dc.Plug.execute(plugNode, getPlugValue, currentNode);
``` 