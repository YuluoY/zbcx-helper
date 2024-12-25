# Layers

`Layers` 类用于管理图层分类，提供了一套完整的图层编码和管理系统。

## 图层编码规则

layer表code采用10位编码，结构如下：
- x-大码：国家基础地信要素分类，管线5
- x-中码：国家基础地信要素分类，城市管线4
- xx-小码：区分资源域，与domains同级
- xx-子码：区分资源类别，与category同级
- x-要素码
- x-几何码：点-1、线-3、面-5
- xx-序号

示例：5402 01 2101（排水 雨水 弯头）

## 层级结构和码位

- 资源域(domain) = 小码（排水/给水）5402
- 资源类别(Category) = 子码（雨水/污水）540201
- 资源类型(ZyType) = 前4位+后4位（弯头/排口），相同域内唯一 54022101

## 构造函数

```javascript
new Layers(data?)
```

### 参数
- `data` (Array, optional): 数据

## 方法列表

### byCode
根据图层号取实体图层定义信息。

### getCategory
取资源类别定义对象。

### getCategoryCode
获取资源类别编码。

### getCategorys
获取domain下的资源类别定义对象序列。

### getDomain
获取域定义对象。

### getDomainCode
获取域编码。

### getDomains
获取资源域定义对象序列。

### getGraTabByCode
根据图层号获取关联图形表信息。

### getList
取全部图层对象序列。

### getLyrsByGraMajMin
根据图形主、子类型取关联的图层定义。

### getLyrsByMajMin
根据主、子类型、属性对象获取实体图层对象信息。

### getZyType
获取资源类别定义对象。

### getZyTypeCode
获取资源类型编码。

### getZyTypes
获取category下资源类型定义对象序列。

### loc
取实体的多语言值。

### setData
设置layer数据序列。

## 使用示例

```javascript
// 创建实例
const layers = new Layers(data);

// 根据图层号获取图层定义
const layerDef = layers.byCode('5402012101');

// 获取资源域列表
const domains = layers.getDomains();
```

## 注意事项

- 使用前需要通过构造函数或setData方法初始化数据。
- 编码规则严格遵循10位编码规范。
- 图层分类遵循域-类别-类型的三级结构。 