# cacheAtt 函数

## 描述
缓存属性

## 语法
```javascript
cacheAtt(major, minor, att, cols)
```

## 参数
- `major` - 主类型
- `minor` - 子类型
- `att` - 属性对象
- `cols` (可选) - 列定义

## 返回值
{Number} - 返回数值类型

## 示例
```javascript
// 缓存属性示例
cx.att.cacheAtt(1, 2, {name: "test"}, ["id", "name"]);
``` 