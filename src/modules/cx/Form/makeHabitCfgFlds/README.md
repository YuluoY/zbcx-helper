# makeHabitCfgFlds 方法

## 描述
查询实体表的喜好配置，并构造配置字段。喜好no标识优先用tabCfgName，否则DataManFlds_major_minor

## 语法
```js
static makeHabitCfgFlds(params) → {Promise}
```

## 参数
| 参数名 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| params | Object | 是 | 参数对象 |

### params 参数属性
| 属性名 | 类型 | 必填 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| tabCfgName | String | 是 | - | cx_tabcfg表中的name，比major、minor优先级高，配置中优先级disp > hide> fld.disporder |
| major | Number | 是 | - | 实体主类型 |
| minor | Number | 是 | - | 实体子类型 |

## 返回值
Type: Promise

异步对象，返回处理后的字段序列

## 示例
```js
// 创建配置
const params = {
    tabCfgName: 'user_list',
    major: 1,
    minor: 2
};

// 调用方法
cx.form.makeHabitCfgFlds(params).then(fields => {
    // 处理返回的字段序列
    console.log('配置字段:', fields);
}).catch(error => {
    console.error('获取配置失败:', error);
});