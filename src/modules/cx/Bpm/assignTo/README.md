# assignTo

指派给某人

## 参数

- `assignType` (String) - 指派类型(group/deppos/selassi/any)
- `params` (Object) - 参数(group:grp1;grp2 deppos:dep,pos1;pos2 selassi:name1 any:s)
- `variables` (Object) - 流程里面的属性
- `onSuccess` (Caller) - 选择数据-function(user)

## 示例

```javascript
// 指派给某个组
cx.Bpm.assignTo('group', 'group1;group2', {}, function(user) {
  console.log('Selected user:', user);
});

// 指派给某个部门职位
cx.Bpm.assignTo('deppos', 'dept1,pos1;pos2', {}, function(user) {
  console.log('Selected user:', user);
});

// 指派给指定人员
cx.Bpm.assignTo('selassi', 'user1', {}, function(user) {
  console.log('Selected user:', user);
});

// 任意指派
cx.Bpm.assignTo('any', 's', {}, function(user) {
  console.log('Selected user:', user);
});
``` 