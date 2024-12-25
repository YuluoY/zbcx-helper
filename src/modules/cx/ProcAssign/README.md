# ProcAssign

`cx.ProcAssign` 类 - 流程指派。需要通过new操作符创建实例。

## 构造函数

```javascript
new ProcAssign(data: Array)
```

### 参数
- `data` (Array): procassi表数据数组

## 方法列表

### get
根据名字，属性取配置。

### init
初始化。

### makeParams
生成参数。

### match
根据字段名，配置的字段值，传递进来的键值对对象判断是否匹配。

## 使用示例

```javascript
// 创建实例
const procAssign = new cx.ProcAssign(data);

// 初始化
procAssign.init();

// 获取配置
const config = procAssign.get('name', {/* 属性对象 */});

// 生成参数
const params = procAssign.makeParams([/* 参数数组 */], {/* 属性对象 */});

// 判断是否匹配
const isMatch = procAssign.match('fieldName', ['value1', 'value2'], {/* 属性对象 */});
```

## 注意事项

- 必须使用new操作符创建实例
- 使用前需要先调用init方法进行初始化
- 传入的data参数为procassi表数据数组 