# makeFormForEditNoCfg 方法

## 描述
创建表单配置（不使用tabcfg配置）。

## 语法
```js
static makeFormForEditNoCfg(params)
```

## 参数
| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| params | Object | 是 | 运行插件的参数，可附加 FormCfg 参数 |

### params 参数属性
| 属性名 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| tabCfgName | String | 是 | - | cx_tabcfg表中的name，用disp的值对表单字段的显示顺序，比major、minor优先级高，配置中优先级disp > hide> fld.disporder |
| major | Number | 是 | - | 实体主类型 |
| minor | Number | 是 | - | 实体子类型 |
| att | Object | 否 | - | 属性（id 和 att 二选一，如果没有att，则根据id取属性） |
| id | Number | 否 | - | 实体ID（id 和 att 二选一，如果没有att，则根据id取属性） |
| cols | String | 否 | - | 用major、minor、id查询数据返回的列名 |
| editable | Boolean | 否 | false | 是否可编辑 |
| mode | Number | 否 | - | 默认显示模式（cx.consts.MODE_VIEW / EDIT，不设置默认根据 editable 设置） |
| beforeValBtn | Function | 否 | - | ValButton 调用之前的回调函数 - function(fld, params) |
| afterValBtn | Function | 否 | - | ValButton 调用之后的回调函数 - function(fld, flds, params) |

## 返回值
Object - 表单配置对象

## 示例
```js
// 创建表单配置
const formConfig = cx.form.makeFormForEditNoCfg({
    tabCfgName: 'user_info',
    major: 1,
    minor: 2,
    id: 123,
    cols: 'name,age,email',
    editable: true,
    mode: cx.consts.MODE_EDIT,
    beforeValBtn: (fld, params) => {
        console.log('字段验证前:', fld);
    },
    afterValBtn: (fld, flds, params) => {
        console.log('字段验证后:', fld);
    }
});

// 使用表单配置
const form = {
    ...formConfig,
    // 其他表单配置
};