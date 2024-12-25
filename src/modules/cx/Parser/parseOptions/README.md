# parseOptions

取 DOM 里面的 data-options 键值对。

## 语法

```javascript
static parseOptions(str: string): Object
```

## 参数

| 参数名 | 类型 | 描述 |
|--------|------|------|
| str | string | 配置字符串（如 "region: center, fit:true, gutters:true, split:true, height:32"）|

## 返回值

返回解析后的配置对象。

## 示例

```javascript
// 解析简单的配置字符串
const options1 = cx.parser.parseOptions('region: center, fit: true');
console.log(options1);
// 输出: { region: 'center', fit: true }

// 解析包含多个选项的字符串
const options2 = cx.parser.parseOptions('width: 100, height: 200, split: true, gutters: false');
console.log(options2);
// 输出: {
//   width: '100',
//   height: '200',
//   split: true,
//   gutters: false
// }

// 从 DOM 元素获取并解析 data-options
const element = document.getElementById('myElement');
const optionsStr = element.getAttribute('data-options');
const options3 = cx.parser.parseOptions(optionsStr);
```

## 注意事项

- 配置项之间使用逗号分隔
- 布尔值会自动转换（'true' => true, 'false' => false）
- 数字字符串会保持字符串格式
- 支持空格，解析时会自动去除
- 无效的配置字符串可能会返回空对象
``` 