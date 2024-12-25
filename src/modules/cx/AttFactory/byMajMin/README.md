# byMajMin

构建属性框操作对象

## 方法签名
```typescript
async byMajMin(major: number, minor: number, options?: Object) => Promise<cx.AttBase>
```

## 参数说明
- `major` (Number): 主类型
- `minor` (Number): 子类型
- `options` (Object, optional): 其他参数，直接传给 AttBase 等类
  - `tabname` (String, optional): 表名（不传的时候，根据 major、minor 取 entity 中的属性表配置）
  - `flds` (Array, optional): 字段列表
  - `fldVals` (Array, optional): 字段列表值

## 返回值
属性处理对象（cx.AttBase）

## 功能描述
构建属性框操作对象，根据主类型和子类型获取属性对象。

## 示例
```typescript
// 创建属性工厂实例
const factory = new cx.AttFactory({
  attClass: [1, 2, 'className']  // 属性类对照表(major, minor, className)
});

// 获取属性对象
const attBase = await factory.byMajMin(1, 2, {
  tabname: 'userTable',
  flds: ['name', 'age', 'gender'],
  fldVals: ['张三', 25, '男']
});
```