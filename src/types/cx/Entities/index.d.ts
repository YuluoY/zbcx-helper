declare namespace cx {
    class Entities {
         
        list: Array<any>;
        mms: Record<string, any>;
        names: Record<string, any>;

        /**
         * 创建Entities实例
         * @param {Array} data - 实体数据
         * @example
         * ```javascript
         * const entities = new cx.Entities([/* 实体数据 *\/]);
         * ```
         */
        constructor(data: Array<any>);

        /**
         * 根据主次编码获取实体
         * @param {number} major - 实体主类型
         * @param {number} minor - 实体子类型
         * @returns {Object|null} 返回匹配的实体对象。如果未找到匹配的实体，则返回 null
         * @example
         * ```javascript
         * const entity = entities.byMajMin(1001, 1);
         * ```
         */
        byMajMin(major: number, minor: number): Object | null;

        /**
         * 根据名称获取实体对象
         * @param {string} name - 实体名称
         * @returns {Object|null} 返回匹配的实体对象。如果未找到匹配的实体，则返回 null
         * @example
         * ```javascript
         * const entity = entities.byName('实体1');
         * ```
         */
        byName(name: string): Object | null;

        /**
         * 根据图形表主、子类型取关联的属性表序列
         * @param {number} major - 图形表主类型
         * @param {number} minor - 图形表子类型
         * @param {Object} [filter] - 属性过滤对象
         * @returns {Array} 返回关联的属性表序列
         * @example
         * ```javascript
         * const attTables = entities.getGlAttByGraMajMin(1001, 1);
         * ```
         */
        getGlAttByGraMajMin(major: number, minor: number, filter?: Object): Array<any>;

        /**
         * 根据实体主、子类型取关联图形表信息
         * @param {number} major - 实体主类型
         * @param {number} minor - 实体子类型
         * @returns {Object|null} 返回匹配的图形表对象。如果未找到匹配的图形表，则返回 null
         * @example
         * ```javascript
         * const graphicTable = entities.getGlGraByAttMajMin(2001, 1);
         * ```
         */
        getGlGraByAttMajMin(major: number, minor: number): Object | null;

        /**
         * 取全部实体对象序列
         * @returns {Array<Object>} 返回所有实体对象的数组
         * @example
         * ```javascript
         * const allEntities = entities.getList();
         * ```
         */
        getList(): Array<Object>;

        /**
         * 判断指定实体是否为图形实体
         * @param {number} major - 实体主类型
         * @param {number} minor - 实体子类型
         * @returns {boolean} 如果是图形实体返回 true，否则返回 false
         * @example
         * ```javascript
         * if (entities.isGraEtt(1001, 1)) {
         *     console.log('这是一个图形实体');
         * }
         * ```
         */
        isGraEtt(major: number, minor: number): boolean;

        /**
         * 判断指定实体是否为线型图形实体
         * @param {number} major - 实体主类型
         * @param {number} minor - 实体子类型
         * @returns {boolean} 如果是线型图形实体返回 true，否则返回 false
         * @example
         * ```javascript
         * if (entities.isGraLinEtt(1001, 1)) {
         *     console.log('这是一个线型图形实体');
         * }
         * ```
         */
        isGraLinEtt(major: number, minor: number): boolean;

        /**
         * 判断是否线型图形表
         * @param {number} major - 图形表主类型
         * @param {number} minor - 图形表子类型
         * @returns {boolean} 如果是线型图形表返回 true，否则返回 false
         * @example
         * ```javascript
         * if (entities.isGraLinTab(1001, 1)) {
         *     console.log('这是一个线型图形表');
         * }
         * ```
         */
        isGraLinTab(major: number, minor: number): boolean;

        /**
         * 判断是否点图形实体
         * @param {number} major - 实体主类型
         * @param {number} minor - 实体子类型
         * @returns {boolean} 如果是点图形实体返回 true，否则返回 false
         * @example
         * ```javascript
         * if (entities.isGraPntEtt(1001, 1)) {
         *     console.log('这是一个点图形实体');
         * }
         * ```
         */
        isGraPntEtt(major: number, minor: number): boolean;

        /**
         * 判断是否点图形表
         * @param {number} major - 图形表主类型
         * @param {number} minor - 图形表子类型
         * @returns {boolean} 如果是点图形表返回 true，否则返回 false
         * @example
         * ```javascript
         * if (entities.isGraPntTab(1001, 1)) {
         *     console.log('这是一个点图形表');
         * }
         * ```
         */
        isGraPntTab(major: number, minor: number): boolean;

        /**
         * 判断是否面图形实体
         * @param {number} major - 实体主类型
         * @param {number} minor - 实体子类型
         * @returns {boolean} 如果是面图形实体返回 true，否则返回 false
         * @example
         * ```javascript
         * if (entities.isGraPolEtt(1001, 1)) {
         *     console.log('这是一个面图形实体');
         * }
         * ```
         */
        isGraPolEtt(major: number, minor: number): boolean;

        /**
         * 判断是否面图形表
         * @param {number} major - 图形表主类型
         * @param {number} minor - 图形表子类型
         * @returns {boolean} 如果是面图形表返回 true，否则返回 false
         * @example
         * ```javascript
         * if (entities.isGraPolTab(1001, 1)) {
         *     console.log('这是一个面图形表');
         * }
         * ```
         */
        isGraPolTab(major: number, minor: number): boolean;

        /**
         * 判断是否图形表
         * @param {number} major - 图形表主类型
         * @param {number} minor - 图形表子类型
         * @returns {boolean} 如果是图形表返回 true，否则返回 false
         * @example
         * ```javascript
         * if (entities.isGraTab(1001, 1)) {
         *     console.log('这是一个图形表');
         * }
         * ```
         */
        isGraTab(major: number, minor: number): boolean;

        /**
         * 取实体的多语言值
         * @param {Object} entity - 实体信息
         * @returns {string} 实体的多语言值
         * @example
         * ```javascript
         * const localizedText = entities.loc(entity);
         * ```
         */
        loc(entity: Object): string;
    }
}; 