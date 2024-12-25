# getCfgFlds 方法

## 描述
解析cx_tabcfg配置，构造dataman使用的字段。

## 语法
```js
static getCfgFlds(flds, tabCfg)
```

## 参数
| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| flds | Array<Object> | 是 | 原始的字段 |
| tabCfg | Object | 是 | 配置对象，属性见tabcfg表的记录，包含 flds、disp、hide等 |

### tabCfg 配置对象属性
| 属性名 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| flds | String | 否 | - | tabcfg表属性，用户自定义字段序列，如[{colname:, ref:'表名:字段'}] |
| disp | String | 否 | - | tabcfg表属性，可显示字段中初始显示的部分字段序列，也是过滤中默认为选的字段，不控制顺序 |
| hide | String | 否 | - | tabcfg表属性，不显示字段字段名序列，disporder设为0 |
| dispSel | String | 否 | - | 融合habit属性，用户喜好中的默认显示字段序列 |
| dispSelAll | String | 否 | - | 融合habit属性，用户喜好中的全部可显示字段序列，排序规则显示顺序 |

## 返回值
Array<Object> - 处理后的配置字段列表

## 示例
```js
// 定义原始字段列表
const flds = [
    { name: 'id', type: 'text', hidden: true },
    { name: 'name', type: 'text', required: true },
    { name: 'age', type: 'number' },
    { name: 'email', type: 'email' },
    { name: 'address', type: 'text' }
];

// 定义表配置
const tabCfg = {
    flds: '[{"colname":"name","ref":"user:username"},{"colname":"age","ref":"user:age"}]',
    disp: 'name,age,email',
    hide: 'id',
    dispSel: 'name,email',
    dispSelAll: 'name,age,email,address'
};

// 调用方法
const configuredFields = cx.form.getCfgFlds(flds, tabCfg);

// 输出处理后的字段列表
console.log('处理后的配置字段:', configuredFields);

// 使用处理后的字段创建表单
const form = {
    fields: configuredFields,
    // ... 其他表单配置
};