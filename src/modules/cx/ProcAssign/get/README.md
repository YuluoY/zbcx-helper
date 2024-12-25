# get

根据名字，属性取配置。

## 语法

```javascript
get(name: string, att: Object): Object
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| name | string | 名字 |
| att | Object | 属性配置对象 |

## 返回值

- Object - 返回配置对象

## 示例

```javascript
const procAssign = new cx.ProcAssign(data);
procAssign.init();

// 获取指定名称和属性的配置
const config = procAssign.get('configName', {
  // 属性配置
  property1: 'value1',
  property2: 'value2'
});
```

## 注意事项

- 使用前需要先初始化实例
- 返回的是配置对象
- 如果找不到对应的配置，返回undefined 