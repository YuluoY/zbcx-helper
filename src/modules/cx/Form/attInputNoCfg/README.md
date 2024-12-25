# attInputNoCfg 方法

## 描述
表单模式属性输入（无定制表单，采用默认表单），params参数结构见 FormInput 插件。

## 语法
```js
static attInputNoCfg(params, overDef)
```

## 参数
| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| params | Object | 是 | 运行插件的参数，可附加 FormCfg 参数 |
| overDef | Object | 否 | 覆盖默认配置 |

### params 参数属性
| 属性名 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| major | Number | 是 | - | 实体主类型 |
| minor | Number | 是 | - | 实体子类型 |
| id | Number | 否 | - | 实体ID（id 和 att 二选一，如果没有att，则根据id取属性） |
| title | String | 否 | - | 插件标题 |
| prompt | String | 否 | - | 提示信息 |
| decode | Boolean | 否 | - | 数据是否需要解密 |
| cols | String | 否 | - | 返回的列 |
| att | Object | 否 | - | 属性（id 和 att 二选一，如果没有att，则根据id取属性） |
| values | Object | 否 | - | 提供给该属性编辑的其他属性 |
| editable | Boolean | 否 | false | 是否可编辑 |
| mode | Number | 否 | - | 默认显示模式（cx.consts.MODE_VIEW / EDIT，不设置默认根据 editable 设置） |
| retAtt | Number | 否 | 0 | 是否返回修改的数据 |
| beforeValbtn | function | 否 | - | ValButton 调用之前的回调函数 - function(fld, params) |
| afterValbtn | function | 否 | - | ValButton 调用之后的回调函数 - function(fld, flds, params) |
| attachRequired | Boolean | 否 | - | 是否必须上载附件 |
| attachEditable | Boolean | 否 | - | 附件编辑功能是否可用 |
| useAttach | Boolean | 否 | - | 是否启用关联附件功能 |
| uploadMultiple | Boolean | 否 | - | 上载的时候支持多选 |
| onOK | function | 否 | - | 回调函数 - 点击按钮 OK, function(att, attOld, context) |
| onClose | function | 否 | - | 回调函数 - 插件关闭 |
| beforeRun | function | 否 | - | 执行插件之前的回调函数，提供机会给调用者，-- function(params) |

## 返回值
Promise - 构造好的标准form对象 NormalForm

## 示例
```js
// 使用默认表单创建新用户
const params = {
    major: 1,
    minor: 2,
    title: '新建用户',
    prompt: '请填写用户信息',
    editable: true,
    defaultValues: {
        status: 'active',
        type: 'normal'
    },
    onOK: function(att, attOld, context) {
        console.log('保存成功:', att);
    }
};
const overDef = {
    title: '新建用户',
    width: 600,
    submitText: '创建'
};

// 调用方法
cx.form.attInputNoCfg(params, overDef).then(form => {
    // 处理返回的表单对象
    console.log('默认输入表单对象:', form);
    
    // 监听表单提交
    form.on('submit', (data) => {
        console.log('提交的数据:', data);
    });
}).catch(error => {
    console.error('表单加载失败:', error);
});