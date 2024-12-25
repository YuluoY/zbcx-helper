# CodeFactory

CodeFactory 是一个编码工厂类,用于生成和管理编码。

## 构造函数参数

| 参数名 | 类型 | 是否可选 | 默认值 | 描述 |
|--------|------|----------|---------|------|
| options | Object | 是 | {} | 构造参数对象 |
| options.major | Number | 是 | - | 生成编码的目标实体主类型 |
| options.minor | Number | 是 | - | 生成编码的目标实体子类型 |
| options.parseVariable | Function | 是 | - | 解析规则字符串中的变量,返回变量表达式序列,如 [{id}, {pid}] |
| options.codeFormatter | Function | 是 | - | 编码构造器,返回 Promise 对象,结果 {id, code} |

## 方法

| 方法名 | 描述 |
|--------|------|
| [init](init) | 启动函数 |
| [makeCode](makeCode) | 编码生成工具 |
| [setCodeFormatter](setCodeFormatter) | 设置编码构造函数,不设置默认替换变量引用生成编码 |
| [setParseVariable](setParseVariable) | 设置解析规则字符串中的变量的函数 |

## 示例

```javascript
// 创建编码工厂实例
const factory = new cx.CodeFactory({
    major: 1,
    minor: 1,
    parseVariable: (rule) => {
        // 解析规则中的变量
        return rule.match(/\{.*?\}/g) || [];
    },
    codeFormatter: async ({ major, minor, rule, atts }) => {
        // 自定义编码生成逻辑
        const code = `${major}-${minor}-${Date.now()}`;
        return {
            id: Date.now(),
            code: code
        };
    }
});

// 初始化
factory.init();

// 生成编码
factory.makeCode({
    major: 1,
    minor: 1,
    atts: {
        id: 123,
        name: 'test'
    }
}).then(result => {
    console.log('生成的编码:', result.code);
    console.log('对应的ID:', result.id);
});
``` 