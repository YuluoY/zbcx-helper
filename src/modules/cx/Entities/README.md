# Entities 类

`Entities` 类提供了一系列用于处理实体相关操作的方法。需要先创建实例后使用。

## 构造函数

```javascript
const entities = new cx.Entities(data);
```

### 参数

- `data` (Array) - 数据

## 方法列表

### 实体查询
- [byMajMin](byMajMin/README.md) - 根据主次编码获取实体
- [byName](byName/README.md) - 根据名称获取实体
- [getList](getList/README.md) - 获取实体列表

### 图形实体相关
- [getGlAttByGraMajMin](getGlAttByGraMajMin/README.md) - 根据图形主次编码获取属性实体
- [getGlGraByAttMajMin](getGlGraByAttMajMin/README.md) - 根据属性主次编码获取图形实体

### 实体类型判断
- [isGraEtt](isGraEtt/README.md) - 判断是否为图形实体
- [isGraLinEtt](isGraLinEtt/README.md) - 判断是否为线图形实体
- [isGraLinTab](isGraLinTab/README.md) - 判断是否为线图形表
- [isGraPntEtt](isGraPntEtt/README.md) - 判断是否为点图形实体
- [isGraPntTab](isGraPntTab/README.md) - 判断是否为点图形表
- [isGraPolEtt](isGraPolEtt/README.md) - 判断是否为面图形实体
- [isGraPolTab](isGraPolTab/README.md) - 判断是否为面图形表
- [isGraTab](isGraTab/README.md) - 判断是否为图形表

### 其他
- [loc](loc/README.md) - 获取实体的本地化文本

## 使用示例

```javascript
// 创建实例
const entities = new cx.Entities([/* 实体数据 */]);

// 根据主次编码获取实体
const myEntity = entities.byMajMin(1001, 1);

// 根据名称获取实体
const userEntity = entities.byName('User');

// 获取实体列表
const entityList = entities.getList();

// 判断实体类型
if (entities.isGraPntEtt(myEntity)) {
    console.log('这是一个点图形实体');
}

// 获取图形和属性实体
const attEntity = entities.getGlAttByGraMajMin(1001, 1);
const graEntity = entities.getGlGraByAttMajMin(2001, 1);

// 获取本地化文本
const localizedText = entities.loc(myEntity);
```

## 注意事项

1. 使用前需要先创建类的实例，并传入实体数据
2. 实体编码（主次编码）在系统中必须唯一
3. 图形实体和属性实体是一一对应的
4. 实体类型判断方法可以组合使用
5. 本地化文本需要提前置入
6. 使用前确保实体已经正确加载