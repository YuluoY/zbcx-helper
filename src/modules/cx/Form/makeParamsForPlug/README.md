# makeParamsForPlug 方法

## 描述
构造Form插件的运行参数

## 语法
```js
static makeParamsForPlug(form, params, overDef, btn) → {Object|Object}
```

## 参数
| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| form | NormalForm | 是 | 解析后的标准Form 表单 |
| params | Object | 是 | 插件运行参数 |
| overDef | Object | 否 | 运行插件覆盖插件定义参数(参照 cx.run.runPlug) |
| btn | Object | 否 | 按钮信息 |

### params 参数属性
| 属性名 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| title | String | 否 | - | 插件标题 |
| prompt | String | 否 | - | 提示信息 |
| cmdbar | Object | 否 | - | 插件下面的cmdbar 项 |
| retAtt | Number | 否 | 0 | 是否返回修改之后的属性 |
| attachRequired | Boolean | 否 | - | 是否必须上载附件 |
| attachSaveToDoc | Boolean | 否 | - | 是否把附件存储到Doc |
| attachEditable | Boolean | 否 | - | 附件编辑功能是否可用 |
| changed | Boolean | 否 | - | 数据修改标志 |
| closable | Boolean | 否 | true | 点击OK，成功之后关闭插件 |
| noSuccess | Boolean | 否 | - | 不提示保存成功 |
| onOK | Function | 否 | - | 回调函数 - 点击按钮 OK, function(att, context) |
| afterOK | Function | 否 | - | 回调函数 - 如果 okClose = false,不关闭插件，还需要为不关闭插件的回调函数 - function(context) |
| onClose | Function | 否 | - | 回调函数 - 插件关闭 |
| beforeRun | Function | 否 | - | 执行插件之前的回调函数，提供机会给调用者，-- function(params) |

### btn 参数属性
| 属性名 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| name | String | 是 | - | 名字 |
| title | String | 否 | - | 标题 |
| type | String | 否 | - | 类型(参照 el-button) |
| icon | String | 否 | - | 图标 |
| disabled | Boolean | 否 | false | 是否禁用 |
| onClick | Function | 否 | - | 回调函数 - 点击本按钮 - function(form, context) |

## 返回值
Type: Object

合并后的新运行参数 params1

Type: Object

{params: Object, overDef: Object}

## 示例
```js
// 创建表单和参数
const form = {
    // 标准Form表单对象
};

const params = {
    title: '用户编辑',
    prompt: '请填写用户信息',
    cmdbar: {
        cmdCom: 'cx-cmd-ok-cancel',
        cmds: []
    },
    onOK: (att, context) => {
        console.log('保存成功:', att);
    }
};

const overDef = {
    width: 800,
    height: 600
};

const btn = {
    name: 'save',
    title: '保存',
    type: 'primary',
    icon: 'el-icon-check',
    onClick: (form, context) => {
        console.log('点击保存按钮');
    }
};

// 调用方法
const result = cx.form.makeParamsForPlug(form, params, overDef, btn);
console.log('运行参数:', result);