# makeFormForEdit 方法

## 描述
构造 数据编辑表单 的form配置对象数据。

## 语法
```js
static makeFormForEdit(formKey, params) → {Promise}
```

## 参数
| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| formKey | String | 是 | 表单配置名，基于 static/form/目录下json的文件 |
| params | Object | 是 | 运行插件的参数（参见函数: runFormPlug） |

### params 参数属性
| 属性名 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| major | Number | 是 | - | 实体主类型 |
| minor | Number | 是 | - | 实体子类型 |
| id | Number | 否 | - | 实体ID（id 和 att 二选一，如果没有att，则根据id取属性） |
| cols | String | 否 | - | 返回的列 |
| att | Object | 否 | - | 属性（id 和 att 二选一，如果没有att，则根据id取属性） |
| values | Object | 否 | - | 提供给该属性编辑的其他属性 |
| editable | Boolean | 否 | false | 是否可编辑 |
| mode | Number | 否 | - | 默认显示模式（cx.consts.MODE_VIEW / EDIT，不设置默认根据 editable 设置） |
| beforeValBtn | Function | 否 | - | ValButton 调用之前的回调函数 - function(fld, params) |
| afterValBtn | Function | 否 | - | ValButton 调用之后的回调函数 - function(fld, flds, params) |

## 返回值
Type: Promise

异步对象，返回构造好的标准form对象 NormalForm

## 示例
```js
// 创建表单配置
const formKey = 'userForm';
const params = {
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
};

// 调用方法
cx.form.makeFormForEdit(formKey, params).then(form => {
    // 处理返回的表单对象
    console.log('表单对象:', form);
    
    // 设置表单事件处理
    form.on('submit', async (data) => {
        try {
            // 处理表单提交
            await saveFormData(data);
            console.log('保存成功');
        } catch (error) {
            console.error('保存失败:', error);
        }
    });
}).catch(error => {
    console.error('表单构造失败:', error);
});