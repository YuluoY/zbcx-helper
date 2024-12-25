# setParseVariable

设置解析规则字符串中的变量的函数。

## 语法

```javascript
setParseVariable(parseVariable)
```

## 参数

| 参数名 | 类型 | 是否可选 | 描述 |
|--------|------|----------|------|
| parseVariable | Function | 否 | 解析规则字符串中的变量的函数 |

## 返回值

| 类型 | 描述 |
|------|------|
| Array<String> | 待替换的引用变量字符串序列 |

## 描述

`setParseVariable` 方法用于设置自定义的变量解析函数。这个函数负责从编码规则字符串中提取变量引用。

变量解析函数应该:
1. 接收规则字符串作为参数
2. 返回一个字符串数组,包含所有找到的变量引用
3. 如果没有找到变量引用,返回空数组

默认的变量解析函数会查找形如 `{variableName}` 的变量引用。通过设置自定义的解析函数,你可以支持不同格式的变量引用语法。

## 示例

```javascript
const factory = new cx.CodeFactory();

// 设置自定义的变量解析函数
factory.setParseVariable((rule) => {
    // 自定义变量解析逻辑
    // 这个例子中识别 ${var} 格式的变量引用
    const matches = rule.match(/\${.*?}/g) || [];
    return matches.map(match => match.slice(2, -1)); // 移除 ${ 和 }
});

// 初始化
factory.init();

// 使用带有自定义变量格式的规则
factory.makeCode({
    major: 1,
    minor: 1,
    atts: {
        id: 123,
        name: 'test'
    },
    format: ({ major, minor, rule, atts }) => {
        // 使用自定义变量格式的规则
        const template = 'CODE-${id}-${name}';
        // 解析并替换变量
        const code = template.replace(/\${(\w+)}/g, (match, key) => atts[key] || '');
        return {
            id: Date.now(),
            code: code
        };
    }
}).then(result => {
    console.log(result);
    // 输出: { id: 1703142857123, code: 'CODE-123-test' }
});
``` 