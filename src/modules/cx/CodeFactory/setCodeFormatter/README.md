# setCodeFormatter

设置编码构造函数,不设置默认替换变量引用生成编码。

## 语法

```javascript
setCodeFormatter(codeFormatter)
```

## 参数

| 参数名 | 类型 | 是否可选 | 描述 |
|--------|------|----------|------|
| codeFormatter | Function | 否 | 解析规则的函数 |

## 描述

`setCodeFormatter` 方法用于设置自定义的编码构造函数。这个函数会在生成编码时被调用,用于确定如何根据给定的规则和属性生成最终的编码。

编码构造函数应该:
1. 接收参数对象 { major, minor, rule, atts }
2. 返回一个 Promise 对象
3. Promise 解析为 { id, code } 格式的结果

如果不设置自定义的编码构造函数,则使用默认的实现,即简单替换规则中的变量引用。

## 示例

```javascript
const factory = new cx.CodeFactory();

// 设置自定义的编码构造函数
factory.setCodeFormatter(async ({ major, minor, rule, atts }) => {
    // 自定义编码生成逻辑
    const prefix = `${major}-${minor}`;
    const timestamp = Date.now();
    const suffix = atts.id || 'DEFAULT';
    
    return {
        id: timestamp,
        code: `${prefix}-${suffix}-${timestamp}`
    };
});

// 初始化
factory.init();

// 使用自定义的编码构造函数生成编码
factory.makeCode({
    major: 1,
    minor: 1,
    atts: {
        id: 'TEST'
    }
}).then(result => {
    console.log(result);
    // 输出类似: { id: 1703142857123, code: '1-1-TEST-1703142857123' }
});
``` 