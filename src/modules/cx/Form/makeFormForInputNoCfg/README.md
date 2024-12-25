# makeFormForInputNoCfg 方法

## 描述
表单模式属性输入,表单模式属性编辑，浏览（无定制表单，采用默认表单）

## 语法
```js
static makeFormForInputNoCfg(params) → {Promise}
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
Type: Promise

异步对象，返回构造好的标准form对象 NormalForm

## 示例
```js
// 创建表单配置
const params = {
    tabCfgName: 'user_info',
    major: 1,
    minor: 2,
    id: 123,
    cols: 'name,age,email',
    editable: true,
    mode: cx.consts.MODE_EDIT,
    beforeValBtn: (fld, params) => {
        console.log('字段验证前:', fld);
        // 在验证前进行一些处理
        if (fld.name === 'age' && fld.value < 18) {
            console.warn('年龄不能小于18岁');
        }
    },
    afterValBtn: (fld, flds, params) => {
        console.log('字段验证后:', fld);
        // 在验证后进行一些处理
        if (fld.name === 'email' && !fld.value.includes('@')) {
            console.error('邮箱格式不正确');
        }
    }
};

// 调用方法
cx.form.makeFormForInputNoCfg(params).then(form => {
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