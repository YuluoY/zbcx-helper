# isRunParamsSame

判断插件的运行参数和旧实例有没有变化。

## 语法

```javascript
static isRunParamsSame(name, newParams) → {Boolean}
```

## 参数

- name: String - 插件名
- newParams: Number - 插件新运行参数

## 返回值

- Boolean - 判断结果

## 示例

```javascript
// 判断运行参数是否相同
const name = 'myPlugin';
const newParams = 123;
const isSame = cx.run.isRunParamsSame(name, newParams);
console.log('运行参数是否相同:', isSame);
```

## 注意事项

- 直接通过 cx.run.isRunParamsSame 调用
- 用于比较新旧运行参数是否发生变化
``` 