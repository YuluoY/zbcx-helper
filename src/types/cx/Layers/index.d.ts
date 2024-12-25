declare namespace cx {
  /**
   * Layers 类用于管理图层分类，提供了一套完整的图层编码和管理系统
   */
  class Layers {
    /**
     * 构造函数
     * @param data 可选的初始化数据
     * @example
     * ```ts
     * // 创建实例
     * const layers = new Layers(data);
     * ```
     */
    constructor(data?: any[]);

    /**
     * 根据图层号取实体图层定义信息
     * @param code 10位图层编码
     * @returns LayerDef对象，包含图层的定义信息
     * @example
     * ```ts
     * const layers = new Layers(data);
     * const layerDef = layers.byCode('5402012101');
     * console.log(layerDef);
     * ```
     */
    byCode(code: string): LayerDef | undefined;

    /**
     * 取资源类别定义对象
     * @param code 资源类别编码（6位）
     * @returns CategoryDef对象，包含资源类别的定义信息
     * @example
     * ```ts
     * const layers = new Layers(data);
     * const categoryDef = layers.getCategory('540201');  // 例如：排水-雨水
     * console.log(categoryDef);
     * ```
     */
    getCategory(code: string): CategoryDef | undefined;

    /**
     * 获取资源类别编码
     * @param code 图层编码（10位）或资源类型编码（8位）
     * @returns 资源类别编码（6位字符串）
     * @example
     * ```ts
     * const layers = new Layers(data);
     * // 从10位图层编码获取类别编码
     * const categoryCode1 = layers.getCategoryCode('5402012101');  // 返回：'540201'
     * // 从8位资源类型编码获取类别编码
     * const categoryCode2 = layers.getCategoryCode('54022101');    // 返回：'540201'
     * ```
     */
    getCategoryCode(code: string): string;

    /**
     * 获取domain下的资源类别定义对象序列
     * @param domainCode 资源域编码（4位）
     * @returns CategoryDef数组
     * @example
     * ```ts
     * const layers = new Layers(data);
     * // 获取排水域（5402）下的所有资源类别
     * const categories = layers.getCategorys('5402');
     * console.log(categories);
     * // 输出示例：
     * // [
     * //   { code: '540201', name: '雨水', ... },
     * //   { code: '540202', name: '污水', ... },
     * //   ...
     * // ]
     * ```
     */
    getCategorys(domainCode: string): CategoryDef[];

    /**
     * 获取域定义对象
     * @param code 资源域编码（4位）或更长的编码
     * @returns DomainDef对象，包含资源域的定义信息
     * @example
     * ```ts
     * const layers = new Layers(data);
     * // 使用4位域编码
     * const domain1 = layers.getDomain('5402');  // 排水域
     * console.log(domain1);
     * // 使用10位图层编码，自动提取域部分
     * const domain2 = layers.getDomain('5402012101');  // 同样返回排水域
     * ```
     */
    getDomain(code: string): DomainDef | undefined;

    /**
     * 获取域编码
     * @param code 图层编码（10位）或资源类型编码（8位）或资源类别编码（6位）
     * @returns 资源域编码（4位字符串）或 null
     */
    getDomainCode(code: string): string | null;

    /**
     * 获取资源域定义对象序列
     * @returns 域定义对象数组
     */
    getDomains(): DomainDef[];

    /**
     * 根据图层号获取关联图形表信息
     * @param code 图层编码
     * @returns 关联图形表entity信息对象或null
     */
    getGraTabByCode(code: string): Record<string, any> | null;

    /**
     * 取全部图层对象序列
     * @returns 图层定义对象数组
     */
    getList(): LayerDef[];

    /**
     * 根据图形表主、子类型取关联的图层定义
     * @param graMajor 图形表主类型
     * @param graMinor 图形表子类型
     * @returns 图层定义对象数组
     */
    getLyrsByGraMajMin(graMajor: number, graMinor: number): LayerDef[];

    /**
     * 根据主、子类型、属性对象获取实体图层对象信息
     * @param major 实体主类型
     * @param minor 实体子类型
     * @param att 属性对象，与layer的exp进行匹配
     * @returns 图层对象数���
     */
    getLyrsByMajMin(major: number, minor: number, att?: Record<string, any>): LayerDef[];

    /**
     * 获取资源类别定义对象
     * @param zyTypeCode 资源类型编码
     * @returns 资源类别layer对象或null
     */
    getZyType(zyTypeCode: string): LayerDef | null;

    /**
     * 获取资源类型编码
     * @param lyrCode 图层编码子串
     * @returns 资源类型编码（8位字符串）或null
     */
    getZyTypeCode(lyrCode: string): string | null;

    /**
     * 获取category下资源类型定义对象序列
     * @param categoryCode 资源类别编号
     * @param graMajMin 图形表主子类型对象
     * @returns 类别的layer对象序列
     */
    getZyTypes(categoryCode: string, graMajMin?: { major: number; minor: number }): LayerDef[];

    /**
     * 取实体的多语言值
     * @param lyrDef 图层对象
     * @returns 图层对象的多语言显示文本
     */
    loc(lyrDef: LayerDef): string;

    /**
     * 设置layer数据序列
     * @param data 实体信息数组
     * @example
     * ```ts
     * const layers = new Layers();
     * // 设置图层数据
     * const layerData = [
     *   {
     *     code: '5402012101',
     *     name: '排水雨水弯头',
     *     domain: '5402',
     *     category: '01',
     *     type: '21',
     *     ...
     *   },
     *   // 更多图层定义...
     * ];
     * layers.setData(layerData);
     * ```
     */
    setData(data: any[]): void;
  }

  interface LayerDef {
    code: string;
    name: string;
    domain: string;
    category: string;
    type: string;
    [key: string]: any;
  }

  interface CategoryDef {
    code: string;
    name: string;
    [key: string]: any;
  }

  interface DomainDef {
    code: string;
    name: string;
    [key: string]: any;
  }
} 