# getInitSys

获取初始化的系统号。

## 基本信息

- 功能说明：获取初始化的系统号
- 所属类：cx.InitRunenv
- 静态方法：不需要实例化

## 参数说明

此方法不需要参数。

## 返回值

- String | null - 返回系统号或 null

## 使用示例

```javascript
// 获取初始化的系统号
const sysId = cx.InitRunenv.getInitSys();
console.log('系统号:', sysId);
```

## 注意事项

- 如果系统号未初始化，返回 null
- 该方法用于获取当前环境的系统标识
- 系统号可以用于环境配置和识别 