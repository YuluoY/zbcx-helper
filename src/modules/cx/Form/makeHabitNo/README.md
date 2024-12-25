# makeHabitNo 方法

## 描述
构造喜好no标识，优先用 tabCfgName，否则 DataManFlds_major_minor

## 语法
```js
static makeHabitNo(params) → {String}
```

## 参数
| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| params | Object | 是 | 运行插件的参数（参见函数: runFormPlug） |

### params 参数属性
| 属性名 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| tabCfgName | String | 是 | - | cx_tabcfg表中的name，用disp的值对表单字段的显示顺序，比major、minor优先级高，配置中优先级disp > hide> fld.disporder |
| major | Number | 是 | - | 实体主类型 |
| minor | Number | 是 | - | 实体子类型 |

## 返回值
Type: String

喜好标识

## 示例
```js
// 创建配置
const params = {
    tabCfgName: 'user_list',
    major: 1,
    minor: 2
};

// 调用方法
const habitNo = cx.form.makeHabitNo(params);
console.log('喜好标识:', habitNo);