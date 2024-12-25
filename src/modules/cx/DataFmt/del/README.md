# del

删除一个数据格式化对象。

## 语法

```js
cx.datafmt.del(name)
```

### 参数

- `name` (String): 数据格式命名

### 返回值

无

## 描述

`del` 方法用于从系统中删除指定名称的数据格式化对象。当一个格式化对象不再需要时，应该调用此方法来释放资源。

主要功能：
- 删除指定的数据格式化对象
- 释放相关资源
- 清理引用计数

## 示例

```js
// 添加一个格式化对象
const dateFmt = new cx.FmtDate({
  format: 'YYYY-MM-DD'
});
cx.datafmt.add('myDateFormat', dateFmt);

// 使用格式化对象
const formattedDate = cx.datafmt.format(new Date(), 'myDateFormat');
console.log(formattedDate);

// 当不再需要时，删除格式化对象
cx.datafmt.del('myDateFormat');
```

## 相关

- [add](../add/README.md)
- [format](../format/README.md)
- [get](../get/README.md) 