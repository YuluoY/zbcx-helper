# makeFormForInput 方法

## 描述
构造 数据录入表单 的form配置对象数据。

## 语法
```js
static makeFormForInput(formKey, params) → {Promise}
```

## 参数
| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| formKey | String | 是 | 表单配置名，基于 static/form/目录下json的文件 |
| params | Object | 是 | 表单参数，会对它做修改 |

### params 参数属性
| 属性名 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| values | Object | 否 | - | 提供给该属性编辑的其他属性 |
| beforeValBtn | Function | 否 | - | ValButton 调用之前的回调函数 - function(fld, params) |
| afterValBtn | Function | 否 | - | ValButton 调用之后的回调函数 - function(fld, flds, params) |

## 返回值
Promise - 返回构造好的标准form对象 NormalForm

## 示例
```js
// 创建输入表单配置
const formKey = 'userInputForm';
const params = {
    values: {
        defaultAge: 18,
        defaultRole: 'user'
    },
    beforeValBtn: (fld, params) => {
        console.log('字段验证前:', fld);
        // 在验证前进行一些处理
        if (fld.name === 'age' && params.values.defaultAge) {
            fld.value = params.values.defaultAge;
        }
    },
    afterValBtn: (fld, flds, params) => {
        console.log('字段验证后:', fld);
        // 在验证后进行一些处理
        if (fld.name === 'role' && !fld.value) {
            fld.value = params.values.defaultRole;
        }
    }
};

// 调用方法
cx.form.makeFormForInput(formKey, params).then(form => {
    // 处理返回的表单对象
    console.log('输入表单对象:', form);
    
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