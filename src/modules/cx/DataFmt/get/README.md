# get

获取数据格式化对象。

## 语法

```js
cx.datafmt.get(name)
```

### 参数

- `name` (String): 数据格式命名

### 返回值

- (IDataFmtBase): 返回指定名称的数据格式化对象

## 描述

`get` 方法用于获取已注册的数据格式化对象。如果指定名称的格式化对象不存在，将返回 undefined。

主要功能：
- 获取已注册的格式化对象
- 支持所有格式化类型
- 返回格式化对象实例

## 示例

```js
// 添加一个格式化对象
const dateFmt = new cx.FmtDate({
  format: 'YYYY-MM-DD'
});
cx.datafmt.add('myDateFormat', dateFmt);

// 获取格式化对象
const fmt = cx.datafmt.get('myDateFormat');
if (fmt) {
  // 使用格式化对象
  const result = fmt.format(new Date());
  console.log(result); // 输出: 2024-01-18
}

// 检查格式化对象是否存在
const unknownFmt = cx.datafmt.get('unknownFormat');
if (!unknownFmt) {
  console.log('格式化对象不存在');
}
```

## 相关

- [add](../add/README.md)
- [del](../del/README.md)
- [format](../format/README.md) 