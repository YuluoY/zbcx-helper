# treeNode

得到数据中心树配置结点

## 方法签名
```typescript
static treeNode(node: String, label: String, srcType: Number, source?: Object, recursive?: Number) => {Object}
```

## 参数说明
| 参数名 | 类型 | 必填 | 默认值 | 说明 |
|--------|------|------|--------|------|
| node | String | 是 | - | 配置结点命名 |
| label | String | 是 | - | 结点标题 |
| srcType | Number | 是 | - | 数据源类型 |
| source | Object | 否 | {} | 数据源信息 |
| recursive | Number | 否 | 0 | 是否递归构造树结点 |

## 返回值
返回一个对象，包含以下属性：

### 基本属性
| 属性名 | 类型 | 说明 |
|--------|------|------|
| node | String | 配置结点命名 |
| label | String | 结点标题 |
| srcType | Number | 数据源类型 |
| source | Object | 数据源信息 |
| recursive | Number | 是否递归构造树结点 |
| children | Array | 子节点数组 |
| icon | String | 图标 |

### 数据源类型(srcType)说明
1. srcType = DCS_LABEL
   - 不需配置任何信息

2. srcType = FILESYS
   - dir: String - 服务器上目录文件路径(如: dir: 'tttt/', 如 data:tttt/, 则从数据库取; 如 tttt/ 则从临时文件夹取)

3. srcType = MEMOBJ
   - obj: Object - 数据数组
   - major: Number - 数据主类型，用于子类型及其父类型的定位 loc
   - minor: Number - 数据子类型，用于子类型及其父类型的定位 loc

4. srcType = TABLE
   - major: Number - 表的主类型
   - minor: Number - 表的子类型
   - key: String - SQL exp 查询的key
   - vals: String - SQL exp 查询的参数值

### 方法
| 方法名 | 说明 | 文档链接 |
|--------|------|----------|
| add | 增加子结点或者数据 | [查看详情](./add/README.md) |
| setCache | 设置缓存信息 | [查看详情](./setCache/README.md) |
| setCaches | 设置缓存 | [查看详情](./setCaches/README.md) |
| setFilter | 设置过滤函数或者表达式 | [查看详情](./setFilter/README.md) |
| setFilters | 设置过滤函数或者表达式 | [查看详情](./setFilters/README.md) |
| setKey | 设置Key信息 | [查看详情](./setKey/README.md) |
| setLabel | 设置标题信息 | [查看详情](./setLabel/README.md) |

## 功能描述
得到数据中心树配置结点。

## 示例
```typescript
// 创建基本节点
const node = cx.dc.Tree.treeNode('department', '部门', 1);

// 创建文件系统节点
const fileNode = cx.dc.Tree.treeNode('files', '文件', cx.consts.DCS_FILESYS, {
  dir: 'data:tttt/'
});

// 创建内存对象节点
const memNode = cx.dc.Tree.treeNode('orgList', '组织列表', cx.consts.DCS_MEMOBJ, {
  obj: {$: 'organ', major: 99, minor: 'TAB_ORGAN'}
});

// 创建表节点
const tableNode = cx.dc.Tree.treeNode('table', '表格', cx.consts.DCS_TABLE, {
  major: 99,
  minor: 'TAB_ORGAN',
  key: 'name',
  vals: 'test'
});

// 设置排序方式
tableNode.orderby = {
  key: 'name desc',
  name: 'xl-icon-star-on'
};
``` 