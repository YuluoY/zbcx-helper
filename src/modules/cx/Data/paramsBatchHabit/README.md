# paramsBatchHabit

根据当前用户（系统号，登录用户ID）及用户习惯的 no，取批处理的查询参数。

## 语法

```js
cx.data.paramsBatchHabit(no)
```

### 参数

- `no` (String): 用户习惯 no

### 返回值

- (Object): cx.svr.data.batch 的查询参数

## 示例

```js
// 获取指定用户习惯的批处理查询参数
const params = await cx.data.paramsBatchHabit('myHabitNo');
```

## 相关

- [cx.data.queryHabit](../queryHabit/README.md)
- [cx.data.saveHabit](../saveHabit/README.md) 