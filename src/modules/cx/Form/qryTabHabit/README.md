# qryTabHabit 方法

## 描述
查询实体表的喜好配置，包括cx_habit中的私有喜好和cx_tabcfg中的公有喜好

## 语法
```js
static qryTabHabit(params) → {Promise}
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

异步请求，返回 { habit: {}, tabCfg: {} } 私有喜好和公有喜好

## 示例
```js
// 创建配置
const params = {
    tabCfgName: 'user_list',
    major: 1,
    minor: 2
};

// 调用方法
cx.form.qryTabHabit(params).then(result => {
    // 处理返回的喜好配置
    console.log('私有喜好:', result.habit);
    console.log('公有喜好:', result.tabCfg);
}).catch(error => {
    console.error('查询喜好配置失败:', error);
});
``` 