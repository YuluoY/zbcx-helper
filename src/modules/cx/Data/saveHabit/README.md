# saveHabit

根据当前登录用户，系统号，保存用户习惯数据。

## 语法

```js
cx.data.saveHabit(no, value, id)
```

### 参数

- `no` (String): 用户习惯 no
- `value` (Object): 用户习惯 value
- `id` (Number, 可选): 用户习惯ID（有ID则更新数据，没有ID则添加数据）

### 返回值

- (Promise): 返回一个 Promise 对象，表示保存操作的结果

## 示例

```js
// 添加新的用户习惯
await cx.data.saveHabit('myHabitNo', {
  displayFields: ['field1', 'field2']
});

// 更新已有的用户习惯
await cx.data.saveHabit('myHabitNo', {
  displayFields: ['field1', 'field2', 'field3']
}, 123);
```

## 相关

- [cx.data.queryHabit](../queryHabit/README.md)
- [cx.data.paramsBatchHabit](../paramsBatchHabit/README.md) 