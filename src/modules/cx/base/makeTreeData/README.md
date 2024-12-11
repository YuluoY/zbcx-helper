构造树形结构数据。

**说明**: 
- 将扁平数据转换为树形结构
- opts参数可以配置多个选项来控制转换过程

Example:
```javascript
// 基本使用
const data = [
  { id: 1, name: '节点1', parentId: 0 },
  { id: 2, name: '节点2', parentId: 1 },
  { id: 3, name: '节点3', parentId: 1 }
]
const tree = cx.base.makeTreeData(data, {
  idField: 'id',
  pidField: 'parentId',
  rootPid: 0
})
```