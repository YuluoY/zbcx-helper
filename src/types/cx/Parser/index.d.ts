declare namespace cx {
  /**
   * Parser 类提供了一系列解析和处理字符串的静态工具方法
   */
  namespace parser {
    /**
     * 解析 CSS 字符串
     * @param str CSS 字符串（如 "margin:0 2px;font-family:Microsoft Yahei;height:.32rem"）
     * @returns 解析后的 CSS 对象
     * @example
     * ```ts
     * // 解析简单的 CSS 字符串
     * const css1 = cx.parser.parseCss('margin: 0; padding: 10px');
     * console.log(css1);
     * // 输出: { margin: '0', padding: '10px' }
     * 
     * // 解析复杂的 CSS 字符串
     * const css2 = cx.parser.parseCss('font-family: Microsoft Yahei; font-size: 14px');
     * console.log(css2);
     * // 输出: {
     * //   'font-family': 'Microsoft Yahei',
     * //   'font-size': '14px'
     * // }
     * ```
     */
    function parseCss(str: string | Record<string, any>): Record<string, string>;

    /**
     * 取 DOM 里面的 data-options 键值对
     * @param str 配置字符串（如 "region: center, fit:true, gutters:true, split:true, height:32"）
     * @returns 解析后的配置对象
     * @example
     * ```ts
     * // 解析简单的配置字符串
     * const options1 = cx.parser.parseOptions('region: center, fit: true');
     * console.log(options1);
     * // 输出: { region: 'center', fit: true }
     * 
     * // 解析包含多个选项的字符串
     * const options2 = cx.parser.parseOptions('width: 100, height: 200, split: true');
     * console.log(options2);
     * // 输出: {
     * //   width: '100',
     * //   height: '200',
     * //   split: true
     * // }
     * ```
     */
    function parseOptions(str: string): Record<string, any>;

    /**
     * 设置键值对
     * @param obj 目标对象
     * @param key 键名
     * @param value 值
     * @param bStr 是否是引号括起来('...')格式的字符串
     * @example
     * ```ts
     * const target = {};
     * 
     * // 设置普通字符串值
     * cx.parser.setKeyVal(target, 'name', 'John', false);
     * 
     * // 设置带引号的字符串值
     * cx.parser.setKeyVal(target, 'description', "'A developer'", true);
     * ```
     */
    function setKeyVal(obj: any, key: string, value: string, bStr: boolean): void;

    /**
     * 去除字符串两端的空格
     * @param str 需要处理的字符串
     * @returns 处理后的字符串
     * @example
     * ```ts
     * // 去除两端空格
     * const text1 = cx.parser.trim('  Hello World  ');
     * console.log(text1); // 输出: "Hello World"
     * 
     * // 处理中间有空格的字符串（中间空格会保留）
     * const text2 = cx.parser.trim('  Hello   World  ');
     * console.log(text2); // 输出: "Hello   World"
     * ```
     */
    function trim(str: string): string;
  }
} 