declare namespace cx {
  /**
   * CodeFactory 是一个编码工厂类,用于生成和管理编码。
   */
  interface CodeFactoryOptions {
    /** 生成编码的目标实体主类型 */
    major?: number;
    /** 生成编码的目标实体子类型 */
    minor?: number;
    /** 解析规则字符串中的变量,返回变量表达式序列,如 [{id}, {pid}] */
    parseVariable?: (rule: string) => string[];
    /** 编码构造器,返回 Promise 对象,结果 {id, code} */
    codeFormatter?: (options: {
      major: number;
      minor: number;
      rule: string;
      atts: Record<string, any>;
    }) => Promise<CodeFactoryResult>;
  }

  interface CodeFactoryResult {
    /** 生成的编码ID */
    id: number;
    /** 生成的编码字符串 */
    code: string;
  }

  interface MakeCodeOptions {
    /** 生成编码的目标实体主类型 */
    major: number;
    /** 生成编码的目标实体子类型 */
    minor: number;
    /** 生成编码依赖的属性对象 */
    atts?: Record<string, any>;
    /** 编码格式化函数,自定义返回结果 */
    format?: (options: {
      major: number;
      minor: number;
      rule: string;
      atts: Record<string, any>;
    }) => CodeFactoryResult;
  }

  declare class CodeFactory {
    /**
     * 创建一个编码工厂实例
     * @param {CodeFactoryOptions} options - 构造参数对象
     * @example
     * ```javascript
     * const factory = new cx.CodeFactory({
     *     major: 1,
     *     minor: 1,
     *     parseVariable: (rule) => {
     *         return rule.match(/\{.*?\}/g) || [];
     *     },
     *     codeFormatter: async ({ major, minor, rule, atts }) => {
     *         const code = `${major}-${minor}-${Date.now()}`;
     *         return {
     *             id: Date.now(),
     *             code: code
     *         };
     *     }
     * });
     * ```
     */
    constructor(options?: CodeFactoryOptions);

    /**
     * 启动函数，用于初始化编码工厂
     * @description 初始化过程会:
     * 1. 设置默认的变量解析函数(如果没有自定义)
     * 2. 设置默认的编码格式化函数(如果没有自定义)
     * 3. 准备编码工厂的内部状态
     * @example
     * ```javascript
     * const factory = new cx.CodeFactory({
     *     major: 1,
     *     minor: 1
     * });
     * factory.init();
     * ```
     */
    init(): void;

    /**
     * 编码生成工具
     * @param {MakeCodeOptions} options - 编码配置对象
     * @returns {Promise<CodeFactoryResult>} Promise对象,返回包含id和code的结果
     * @example
     * ```javascript
     * factory.makeCode({
     *     major: 1,
     *     minor: 1,
     *     atts: {
     *         id: 123,
     *         name: 'test'
     *     }
     * }).then(result => {
     *     console.log(result); // { id: xxx, code: 'xxx' }
     * });
     * ```
     */
    makeCode(options: MakeCodeOptions): Promise<CodeFactoryResult>;

    /**
     * 设置编码构造函数
     * @param {Function} formatter - 编码构造函数
     * @description 编码构造函数应该:
     * 1. 接收参数对象 { major, minor, rule, atts }
     * 2. 返回一个 Promise 对象
     * 3. Promise 解析为 { id, code } 格式的结果
     * @example
     * ```javascript
     * factory.setCodeFormatter(async ({ major, minor, rule, atts }) => {
     *     const prefix = `${major}-${minor}`;
     *     const timestamp = Date.now();
     *     const suffix = atts.id || 'DEFAULT';
     *
     *     return {
     *         id: timestamp,
     *         code: `${prefix}-${suffix}-${timestamp}`
     *     };
     * });
     * ```
     */
    setCodeFormatter(formatter: CodeFactoryOptions["codeFormatter"]): void;

    /**
     * 设置解析规则字符串中的变量的函数
     * @param {Function} parser - 变量解析函数
     * @returns {string[]} 待替换的引用变量字符串序列
     * @description 变量解析函数应该:
     * 1. 接收规则字符串作为参数
     * 2. 返回一个字符串数组,包含所有找到的变量引用
     * 3. 如果没有找到变量引用,返回空数组
     * @example
     * ```javascript
     * factory.setParseVariable((rule) => {
     *     const matches = rule.match(/\${.*?}/g) || [];
     *     return matches.map(match => match.slice(2, -1));
     * });
     * ```
     */
    setParseVariable(parser: CodeFactoryOptions["parseVariable"]): void;
  }
}
