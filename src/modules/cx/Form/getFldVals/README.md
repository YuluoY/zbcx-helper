# getFldVals 方法

## 描述
获取字段值对象属性。

## 语法
```js
static getFldVals(flds)
```

## 参数
| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| flds | Array<Object> | 是 | 字段列表 |

## 返回值
Array<Object> - 字段值对象属性列表

## 示例
```js
// 定义字段列表
const flds = [
    {
        name: 'username',
        value: 'admin',
        type: 'text',
        label: '用户名'
    },
    {
        name: 'age',
        value: 25,
        type: 'number',
        label: '年龄'
    },
    {
        name: 'isActive',
        value: true,
        type: 'boolean',
        label: '是否激活'
    }
];

// 调用方法获取字段值
const fieldValues = cx.form.getFldVals(flds);

// 输出结果
console.log('字段值列表:', fieldValues);
// 输出结果示例:
// [
//     { name: 'username', value: 'admin' },
//     { name: 'age', value: 25 },
//     { name: 'isActive', value: true }
// ]

// 使用字段值
const formData = fieldValues.reduce((acc, field) => {
    acc[field.name] = field.value;
    return acc;
}, {});

console.log('表单数据:', formData);
// 输出: { username: 'admin', age: 25, isActive: true }