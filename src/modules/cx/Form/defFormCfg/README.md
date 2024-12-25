# defFormCfg 方法

## 描述
获取默认表单配置。

## 语法
```js
static defFormCfg(major, minor, cfg)
```

## 参数
| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| major | Number | 是 | 主类型 |
| minor | Number | 是 | 子类型 |
| cfg | FormCfg | 是 | 表单配置对象 |

### FormCfg 配置对象属性
| 属性名 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| tabname | String | 是 | - | 表单的目标表 |
| allFlds | Boolean | 否 | true | 是否用目标表的全部字段 |
| grps | Array | 否 | - | 自定义分组 |
| flds | Array | 否 | - | 自定义字段，会在allFlds后追加字段 |
| dispFlds | String | 否 | - | 要显示字段名字符串序列，逗号分隔，优先级 dispFlds > hideFlds |
| hideFlds | String | 否 | - | 隐藏字段名字符串序列，逗号分隔 |
| colNum | Number | 否 | - | 表单的显示列数 |
| attCom | String | 否 | - | 属性组件名 |
| values | Object | 否 | - | 属性现有值，colname: val 键值模式 |
| attach | Object | 否 | - | 附件信息，需要上载附件或者关联Doc，必须有这个属性 |
| upload | Object | 否 | - | 上载选项 |
| doc | Object | 否 | - | 文档信息，如果关联附件，必须有这个属性 |
| cmdbar | Object | 否 | - | 命令按钮条配置 |
| uicfg | Object | 否 | - | 插件的UI设置 |
| params | Object | 否 | - | 配置参数 |

## 返回值
FormCfg - 表单配置对象

## 示例
```js
// 获取用户表单的默认配置
const major = 1;
const minor = 2;
const cfg = {
    tabname: 'user_info',
    allFlds: true,
    dispFlds: 'name,age,email,phone',
    hideFlds: 'password,create_time',
    colNum: 2,
    values: {
        name: '张三',
        age: 25,
        email: 'zhangsan@example.com'
    },
    uicfg: {
        title: '用户信息',
        width: 800,
        labelWidth: 100
    }
};

// 调用方法
const formCfg = cx.form.defFormCfg(major, minor, cfg);

// 使用配置
console.log('表单配置:', formCfg);