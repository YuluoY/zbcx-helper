/**
 * 数据转换工具类,提供了一系列用于数据格式转换的静态方法
 */

declare namespace cx {
  declare namespace converter {
    /**
     * 数组转列表
     * @param {Array} array - 要转换的数组
     * @returns {string} 转换后的列表字符串
     * @example
     * ```javascript
     * // 基本使用
     * const list = cx.converter.array2List(['a', 'b', 'c']);
     * console.log(list); // 输出: 'a,b,c'
     * 
     * // 转换数字数组
     * const numList = cx.converter.array2List([1, 2, 3]);
     * console.log(numList); // 输出: '1,2,3'
     * 
     * // 转换混合类型数组
     * const mixedList = cx.converter.array2List(['a', 1, true]);
     * console.log(mixedList); // 输出: 'a,1,true'
     * ```
     */
    function array2List(array: any[]): string;
  
    /**
     * 对象转换成字符串
     * @param {Object} data - 要转换的对象
     * @param {boolean} [strict=false] - 是否严格类型检查
     * @returns {string} 转换后的字符串
     * @example
     * ```javascript
     * // 基本使用
     * const obj = {name: 'test', age: 25};
     * const str = cx.converter.data2String(obj);
     * console.log(str); // 输出: '{"name":"test","age":25}'
     * 
     * // 使用严格模式
     * const str2 = cx.converter.data2String(obj, true);
     * 
     * // 转换数组
     * const arr = [1, 2, 3];
     * const str3 = cx.converter.data2String(arr);
     * console.log(str3); // 输出: '[1,2,3]'
     * ```
     */
    function data2String(data: any, strict?: boolean): string;
  
    /**
     * 解析文本中的引用标记
     * @param {string} text - 要解析的文本
     * @returns {string[]} 解析出的引用数组
     * @example
     * ```javascript
     * // 基本使用
     * const text = 'Hello ${name}, your age is ${age}';
     * const refs = cx.converter.parseReference(text);
     * console.log(refs); // 输出: ['name', 'age']
     * 
     * // 解析嵌套引用
     * const nested = 'User ${user.name} lives in ${user.address.city}';
     * const nestedRefs = cx.converter.parseReference(nested);
     * console.log(nestedRefs); // 输出: ['user.name', 'user.address.city']
     * ```
     */
    function parseReference(text: string): string[];
  
    /**
     * 将文本转换为HTML格式
     * @param {string} text - 要转换的文本
     * @returns {string} 转换后的HTML字符串
     * @example
     * ```javascript
     * // 基本使用
     * const text = 'Hello\nWorld';
     * const html = cx.converter.toHtml(text);
     * console.log(html); // 输出: 'Hello<br>World'
     * 
     * // 处理特殊字符
     * const special = 'A & B < C > D';
     * const htmlSpecial = cx.converter.toHtml(special);
     * console.log(htmlSpecial); // 输出: 'A &amp; B &lt; C &gt; D'
     * ```
     */
    function toHtml(text: string): string;
  
    /**
     * 将字符串或对象转换成JSON
     * @param {string|object|null} data - 待转换数据
     * @returns {string|object|null} 转换后的JSON数据
     * @example
     * ```javascript
     * // 字符串转JSON
     * const jsonStr = '{"name": "test", "age": 25}';
     * const obj = cx.converter.toJSON(jsonStr);
     * console.log(obj); // 输出: {name: 'test', age: 25}
     * 
     * // 对象处理
     * const data = {
     *   info: '{"type": "user", "id": 1}',
     *   name: 'test',
     *   settings: '{"theme": "dark"}'
     * };
     * const converted = cx.converter.toJSON(data);
     * ```
     */
    function toJSON(data: string | object | null): string | object | null;
  } 
}
