# parseCfg 方法

## 描述
解析表单配置，生产标准化的表单对象

## 语法
```js
static async parseCfg(cfg, params) → {Promise}
```

## 参数
| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| cfg | FormCfg | 是 | 表单配置，结构见 defFormCfg 函数返回值 |
| params | Object | 是 | 解析的其他参数 |

### params 参数属性
| 属性名 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| id | Number | 否 | - | 本次加载数据的ID（添加数据的时候，没有该值） |
| isNew | Boolean | 否 | - | 是否是新数据 |
| mode | Number | 否 | - | 编辑/浏览模式(cx.consts.MODE_VIEW, MODE_EDIT) |
| editable | Boolean | 否 | - | 是否可以出现浏览模式切换到编辑模式 |

### 返回值对象属性
| 属性名 | 类型 | 描述 |
| --- | --- | --- |
| attr | Object | 属性配置 |
| attach | Object | 附件配置 |
| upload | Object | 上传配置 |
| doc | Object | 文档配置 |
| cmdbar | Object | 按钮条配置 |
| uicfg | Object | UI配置 |
| params | Object | 插件的配置参数 |

## 返回值
Type: Promise

异步对象，返回标准化后的配置对象 NormalForm

## 示例
```js
// 创建表单配置
const formConfig = {
    // 表单配置对象，结构见 defFormCfg 函数返回值
};

const params = {
    id: 123,
    isNew: false,
    mode: cx.consts.MODE_EDIT,
    editable: true
};

// 调用方法
cx.form.parseCfg(formConfig, params).then(form => {
    // 处理返回的标准化表单对象
    console.log('标准化表单对象:', form);
    
    // 使用表单配置
    console.log('属性配置:', form.attr);
    console.log('附件配置:', form.attach);
    console.log('按钮条配置:', form.cmdbar);
}).catch(error => {
    console.error('解析配置失败:', error);
});