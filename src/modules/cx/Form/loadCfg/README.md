# loadCfg 方法

## 描述
加载配置表单。

## 语法
```js
static loadCfg(formKey)
```

## 参数
| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| formKey | String | 是 | 表单配置命名，基于 static/form/目录，文件格式 formKey.json |

## 返回值
Object - 表单配置 JSON 对象 

## 示例
```js
// 加载用户编辑表单配置
const formKey = 'userEdit';

// 调用方法
const formConfig = cx.form.loadCfg(formKey);

// 输出加载的配置
console.log('表单配置:', formConfig);
// 配置示例:
// {
//     attr: {
//         title: '编辑用户',
//         width: 800,
//         labelWidth: 100
//     },
//     flds: [
//         {
//             name: 'username',
//             label: '用户名',
//             type: 'text',
//             required: true
//         },
//         {
//             name: 'email',
//             label: '邮箱',
//             type: 'email',
//             validate: 'email'
//         }
//     ],
//     btns: [
//         {
//             text: '保存',
//             type: 'submit',
//             handler: 'save'
//         },
//         {
//             text: '取消',
//             type: 'cancel'
//         }
//     ]
// }

// 使用配置创建表单
if (formConfig) {
    const form = {
        ...formConfig,
        onSubmit: (data) => {
            console.log('提交的数据:', data);
        }
    };
    // 进一步处理表单...
}