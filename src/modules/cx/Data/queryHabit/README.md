# queryHabit

查询用户习惯配置。

## 语法

```js
cx.data.queryHabit(no)
```

### 参数

- `no` (String): 用户习惯 no

### 返回值

- (Promise): 返回一个 Promise 对象，解析为用户习惯配置数据

## 示例

```js
// 查询指定用户习惯的配置
const habitConfig = await cx.data.queryHabit('myHabitNo');
```

## 相关

- [cx.data.paramsBatchHabit](../paramsBatchHabit/README.md)
- [cx.data.saveHabit](../saveHabit/README.md) 