# setInitSys

保存初始化的系统号。

## 基本信息

- 功能说明：保存初始化的系统号
- 所属类：cx.InitRunenv
- 静态方法：不需要实例化

## 参数说明

- sys: String - 系统号
- time: Number - 有效时长，单位分钟（可选，默认值为 0）

## 返回值

无返回值。

## 使用示例

```javascript
// 保存初始化的系统号
const sysId = 'system123';
cx.InitRunenv.setInitSys(sysId, 60);
console.log('系统号已保存');
```

## 注意事项

- 确保传入的系统号正确
- 有效时长为可选参数，默认值为 0 表示永久有效
- 该方法用于设置系统标识的有效期
- 如果需要临时系统号，可以设置有效时长 