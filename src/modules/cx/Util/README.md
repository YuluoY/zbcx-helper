# Util

`cx.util` 类 - 实用工具类

## 构造函数

```javascript
new Util()
```

## 静态方法

- **compToHex(comp)** → {string}: 10进制转换为16进制(2位)
- **coorToNum(coor)**: 将coordinate类型坐标转换成Number类型
- **delAtts(dest, obj)** → {Object}: 删除对象里面的属性
- **delDuplicate(data, colnames)**: 去除重复数据（支持多个字段消除）
- **equalAmount(itemNum, grpNum)** → {Array}: 等数量分组，返回每组成员数量的数组
- **equalValAmount(values, keyFld, partNum)** → {Object}: 等数量分组，返回每组成员数量的数组
- **equalValGap(values, keyFld, partNum)** → {Object}: 根据数据对象数组values和关键字段的值进行开序排序，并把keyFld字段的值等间距分层partNum组
- **filterRepeat(list)** → {Array.<(String|Number)>}: 数组中值去重
- **filterRepeatObj(list, key)** → {Array.<Object>}: 对象数组去重
- **filterRepeatObjByKeys(list, keys)** → {Array.<Object>}: 对象数组去重
- **getCharCol(num)** → {String}: 将指定的自然数转换为26进制表示
- **getObjLength(obj)** → {Number}: 取对象长度
- **getStrWidth(textStr, fontSize)** → {Number}: 根据字体大小获取字符串的宽度
- **group(data, groups)**: 多级数据分组
- **grpByValRange(values, keyFld, valRange)**: 根据值域分组
- **lowerJSONKey(data, isChangeSrc)**: 将对象键转换为小写
- **partEqual(values, keyFld, partNum)**: 生成等间距数值序列
- **sort(data, sorts)**: 数据排序
- **sortData(data, major, minor, colname, sort)**: 根据字段信息排序
- **sortDate(data, colname, desc)**: 日期排序
- **sortDatetime(data, colname, desc)**: 日期+时间排序
- **sortNum(data, colname, desc)**: 数值排序
- **sortString(data, colname, desc)**: 字符串排序
- **stat(data, colname, type)**: 数据统计
- **upperJSONKey(data, isChangeSrc)**: 将对象键转换为大写

## 使用示例

```javascript
// 10进制转换为16进制
const hex = cx.util.compToHex(255);
console.log('16进制:', hex);

// 坐标转换
const num = cx.util.coorToNum(coordinate);
console.log('Number:', num);

// 删除对象属性
const newObj = cx.util.delAtts(dest, obj);
console.log('新对象:', newObj);

// 去除重复数据
const uniqueData = cx.util.delDuplicate(data, 'name,age');
console.log('去重数据:', uniqueData);

// 等数量分组
const groups = cx.util.equalAmount(10, 3);
console.log('分组:', groups);

// 数组去重
const uniqueList = cx.util.filterRepeat(['a', 'b', 'a']);
console.log('去重数组:', uniqueList);

// 获取对象长度
const length = cx.util.getObjLength({a: 1, b: 2});
console.log('对象长度:', length);

// 获取字符串宽度
const width = cx.util.getStrWidth('Hello', 12);
console.log('字符串宽度:', width);
```

## 注意事项

- 静态方法可以直接通过 `cx.util` 调用
- 实例方法需要通过 `new cx.util()` 创建实例后使用 