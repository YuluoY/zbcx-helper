# match

根据字段名，配置的字段值，传递进来的键值对对象判断是否匹配。

## 语法

```javascript
match(fldname: string, vals: Array, att: Object): Boolean
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| fldname | string | 字段名 |
| vals | Array | 配置的字段值 |
| att | Object | 传递进来的属性对象 |

## 返回值

- Boolean - 是否匹配(true/匹配，false/不匹配)

## 示例

```javascript
const procAssign = new cx.ProcAssign(data);
procAssign.init();

// 判断是否匹配
const isMatch = procAssign.match('fieldName', [
  // 配置的字段值数组
  'value1',
  'value2'
], {
  // 属性对象
  fieldName: 'value1',
  otherField: 'otherValue'
});

if (isMatch) {
  console.log('字段值匹配');
} else {
  console.log('字段值不匹配');
}
```

## 注意事项

- 使用前需要先初始化实例
- 返回布尔值表示是否匹配
- 会根据字段名从属性对象中获取值进行匹配判断
- 配置的字段值数组中只要有一个值匹配即返回true 