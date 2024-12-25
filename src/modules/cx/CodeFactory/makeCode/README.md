# makeCode

编码生成工具。

## 语法

```javascript
makeCode(opts)
```

## 参数

| 参数名 | 类型 | 是否可选 | 描述 |
|--------|------|----------|------|
| opts | Object | 否 | 编码配置对象 |
| opts.major | Number | 否 | 生成编码的目标实体主类型 |
| opts.minor | Number | 否 | 生成编码的目标实体子类型 |
| opts.atts | Object | 是 | 生成编码依赖的属性对象 |
| opts.format | Function | 是 | 编码格式化函数,function({ major, minor, rule, atts }),自定义返回结果 |

## 返回值

| 类型 | 描述 |
|------|------|
| Promise | Promise 对象,返回 {id, code} |

## 描述

`makeCode` 方法是编码工厂的核心方法,用于生成编码。它支持:

1. 基于主类型和子类型生成编码
2. 使用属性对象中的值作为编码的组成部分
3. 自定义格式化函数来控制编码的生成规则
4. 异步生成编码,返回 Promise 对象

生成的编码结果包含:
- id: 编码对应的唯一标识
- code: 生成的编码字符串

## 示例

```javascript
const factory = new cx.CodeFactory();
factory.init();

// 基本用法
factory.makeCode({
    major: 1,
    minor: 1
}).then(result => {
    console.log(result); // { id: xxx, code: 'xxx' }
});

// 使用属性对象
factory.makeCode({
    major: 1,
    minor: 1,
    atts: {
        id: 123,
        name: 'test'
    }
}).then(result => {
    console.log(result);
});

// 自定义格式化
factory.makeCode({
    major: 1,
    minor: 1,
    format: ({ major, minor, rule, atts }) => {
        return {
            id: Date.now(),
            code: `CUSTOM-${major}-${minor}-${atts.id}`
        };
    }
}).then(result => {
    console.log(result);
});
``` 