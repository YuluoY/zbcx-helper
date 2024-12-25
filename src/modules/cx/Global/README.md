# Global 类

全局变量管理类，提供了全局变量的存取功能。可以通过 `cx.Global` 或简写 `$g` 来访问。

## 静态属性

### 系统对象
- `$g.access` - 访问控制对象
- `$g.attFactory` - 属性工厂对象
- `$g.codeFactory` - 代码工厂对象
- `$g.entity` - 实体对象
- `$g.field` - 字段对象
- `$g.func` - 函数对象
- `$g.indexDb` - 索引数据库对象
- `$g.layer` - 层对象
- `$g.message` - 消息对象
- `$g.plugin` - 插件对象
- `$g.prosAssi` - 流程助手对象
- `$g.service` - 服务对象
- `$g.syscfg` - 系统配置对象
- `$g.user` - 用户对象

## 方法

### 时间相关
- `getCurTime()` - 获取当前时间
- `setCurTime()` - 设置当前时间

## 使用示例

```js
// 访问静态属性
const userInfo = $g.user.info;
const sysConfig = $g.syscfg.config;

// 调用方法
const currentTime = $g.getCurTime();
$g.setCurTime(new Date());

// 访问子对象的方法
$g.entity.getById(1001);
$g.message.show('Hello World');
```

## 注意事项

1. 所有以 # 开头的属性都是静态属性对象，可以直接通过 $g 访问
2. 每个静态属性对象都有其特定的功能和方法
3. 建议查看各个对象的具体文档了解详细用法
4. 这些对象在整个应用程序中是单例的 