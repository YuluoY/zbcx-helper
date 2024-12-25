# makeParams

生成参数。

## 语法

```javascript
makeParams(params: Array, att: Object): Array
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| params | Array | 配置的参数数组 |
| att | Object | 传递进来的属性对象 |

## 返回值

- Array - 返回参数数组

## 示例

```javascript
const procAssign = new cx.ProcAssign(data);
procAssign.init();

// 生成参数
const params = procAssign.makeParams([
  // 配置的参数数组
  'param1',
  'param2'
], {
  // 属性对象
  attr1: 'value1',
  attr2: 'value2'
});
```

## 注意事项

- 使用前需要先初始化实例
- 返回的是处理后的参数数组
- 参数数组和属性对象会被用来生成最终的参数 