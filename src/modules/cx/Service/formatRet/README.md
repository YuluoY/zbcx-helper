# formatRet

格式化服务返回数据对象，主要返回ret.data，如果数组就一个数据返回 ret.data[0] 注意：有一定的风险，建议按需格式化。

## 语法

```javascript
static formatRet(ret) → {Object|Array}
```

## 参数

- ret: Object - 服务器请求返回的结果对象
  - ret: Number - 请求状态，0为正常
  - data: Array.<Object> - 服务返回的目标数据序列
  - retType?: Number - 目标序列是否一个数据

## 返回值

- Object|Array - 结果对象或数组组 {ret:0, data:[数据对象1, ...], [total]: 10, [其他属性]: 值}

## 示例

```javascript
// 格式化返回结果
const ret = {
  ret: 0,
  data: [
    { id: 1, name: 'item1' },
    { id: 2, name: 'item2' }
  ],
  total: 2
};
const formatted = cx.service.formatRet(ret);
console.log('格式化后的数据:', formatted);

// 单条数据的格式化
const singleRet = {
  ret: 0,
  data: [{ id: 1, name: 'item1' }],
  retType: 1
};
const singleFormatted = cx.service.formatRet(singleRet);
console.log('格式化后的单条数据:', singleFormatted);
```

## 注意事项

- 直接通过 cx.service.formatRet 调用
- 主要用于简化返回数据的结构
- 当data只包含一个元素且retType为1时，直接返回该元素
- 使用时需要注意数据结构的变化 