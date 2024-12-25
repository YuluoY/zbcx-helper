# plugParams

根据设定的取参数的格式字符串，根据指定提供取属性的方法，得到最后的参数对象

## 方法签名
```typescript
static plugParams(str: Object, getParams: function, curNode: Object) => Object
```

## 参数说明
- `str` (Object): 取参数的格式字符串
- `getParams` (Function): 取字符串中变量的值的函数 - function(key, curNode)
- `curNode` (Object): 当前结点

## 返回值
返回类型：Object

## 功能描述
根据设定的取参数的格式字符串，根据指定提供取属性的方法，得到最后的参数对象。

## 示例
```typescript
// 定义参数获取函数
const getParams = (key, node) => {
    // 返回参数值
    return node[key];
};

// 获取参数对象
const params = cx.dc.Plug.plugParams(
    { format: '${id},${name}' },
    getParams,
    currentNode
);
``` 