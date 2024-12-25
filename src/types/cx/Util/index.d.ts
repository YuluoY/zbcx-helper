declare namespace cx {
  /**
   * 实用工具类
   */
  class util {
    /**
     * 创建 Util 实例
     * @example
     * ```typescript
     * const utilInstance = new cx.util();
     * ```
     */
    constructor();

    /**
     * 10进制转换为16进制(2位)
     * @param comp 10进制数
     * @returns 16进制数
     * @example
     * ```typescript
     * const hex = cx.util.compToHex(255);
     * console.log('16进制:', hex);
     * ```
     */
    static compToHex(comp: number): string;

    /**
     * 将coordinate类型坐标转换成Number类型
     * @param coor feature的coordinate
     * @example
     * ```typescript
     * const num = cx.util.coorToNum(coordinate);
     * console.log('Number:', num);
     * ```
     */
    static coorToNum(coor: any): number;

    /**
     * 删除对象里面的属性
     * @param dest 目标对象
     * @param obj 待删除的属性
     * @returns 删除属性后的对象
     * @example
     * ```typescript
     * const newObj = cx.util.delAtts(dest, obj);
     * console.log('新对象:', newObj);
     * ```
     */
    static delAtts(dest: Record<string, any>, obj: Record<string, any>): Record<string, any>;

    /**
     * 去除重复数据（支持多个字段消除）
     * @param data 数据
     * @param colnames 字段列名（支持多个列名，用逗号分隔）
     * @example
     * ```typescript
     * const uniqueData = cx.util.delDuplicate(data, 'name,age');
     * console.log('去重数据:', uniqueData);
     * ```
     */
    static delDuplicate(data: any[], colnames: string): any[];

    /**
     * 等数量分组，返回每组成员数量的数组
     * @param itemNum 目标对象的个数
     * @param grpNum 分成num组
     * @returns 分组数组，每个值是该组中元素的个数
     * @example
     * ```typescript
     * const groups = cx.util.equalAmount(10, 3);
     * console.log('分组:', groups);
     * ```
     */
    static equalAmount(itemNum: number, grpNum: number): number[];

    /**
     * 等数量分组，返回每组成员数量的数组
     * @param values 数组
     * @param keyFld key字段
     * @param partNum 等分数
     * @returns 分组后的数据
     * @example
     * ```typescript
     * const result = cx.util.equalValAmount(values, 'key', 3);
     * console.log('分组结果:', result);
     * ```
     */
    static equalValAmount(values: any[], keyFld: string, partNum: number): {
      nums: number[];
      vals: any[];
      items: any[];
    };

    /**
     * 根据数据对象数组values和关键字段的值进行开序排序，并把keyFld字段的值等间距分层partNum组
     * @param values 数组
     * @param keyFld key字段
     * @param partNum 等分数
     * @returns 分组后的数据
     * @example
     * ```typescript
     * const result = cx.util.equalValGap(values, 'key', 3);
     * console.log('分组结果:', result);
     * ```
     */
    static equalValGap(values: any[], keyFld: string, partNum: number): {
      nums: number[];
      vals: any[];
      items: any[];
    };

    /**
     * 数组中值去重
     * @param list 字符数组
     * @returns 去重后的数组
     * @example
     * ```typescript
     * const uniqueList = cx.util.filterRepeat(['a', 'b', 'a']);
     * console.log('去重数组:', uniqueList);
     * ```
     * @deprecated 使用 cx.array.derepeat 下的接口
     */
    static filterRepeat(list: (string | number)[]): (string | number)[];

    /**
     * 对象数组去重
     * @param list 字符数组
     * @param key 要根据哪个属性进行去重，默认为id
     * @returns 去重后的数组
     * @example
     * ```typescript
     * const uniqueObjects = cx.util.filterRepeatObj(objects, 'name');
     * console.log('去重��象:', uniqueObjects);
     * ```
     * @deprecated 使用 cx.array.derepeatByKey 下的接口
     */
    static filterRepeatObj(list: Record<string, any>[], key?: string): Record<string, any>[];

    /**
     * 对象数组去重
     * @param list 字符数组
     * @param keys 属性字段集合，也是判断重复的组合标识
     * @returns 去重后的数组
     * @example
     * ```typescript
     * const uniqueObjects = cx.util.filterRepeatObjByKeys(objects, ['name', 'age']);
     * console.log('去重对象:', uniqueObjects);
     * ```
     * @deprecated 使用 cx.array.derepeatByKeys 接口
     */
    static filterRepeatObjByKeys(list: Record<string, any>[], keys: string[]): Record<string, any>[];

    /**
     * 将指定的自然数转换为26进制表示
     * @param num 自然数
     * @returns 26进制表示
     */
    static getCharCol(num: number): string;

    /**
     * 取对象长度
     * @param obj 对象
     * @returns 对象的长度
     * @example
     * ```typescript
     * const length = cx.util.getObjLength({a: 1, b: 2});
     * console.log('对象长度:', length);
     * ```
     */
    static getObjLength(obj: Record<string, any>): number;

    /**
     * 根据字体大小获取字符串的宽度
     * @param textStr 字符串文本
     * @param fontSize 字体大小，默认值为10
     * @returns 字符串的宽度
     * @example
     * ```typescript
     * const width = cx.util.getStrWidth('Hello', 12);
     * console.log('字符串宽度:', width);
     * ```
     */
    static getStrWidth(textStr: string, fontSize?: number): number;

    /**
     * 多级数据分组(支持多个字段逐级递归分组)
     * @param data 待分组数据
     * @param groups 分组信息 - [{ colname: String, type: cx.consts.GROUP_***, [values: []] }]
     * @returns 分组后的数据结构
     * @example
     * ```typescript
     * const groupedData = cx.util.group(data, groups);
     * console.log('分组数据:', groupedData);
     * ```
     */
    static group(data: any[], groups: Array<{
      colname: string;
      type: number;
      values?: any[];
    }>): Record<string, any>;

    /**
     * 根据分组值域valRange和数据对象序列values的关键字段的值进行分组
     * @param values 数组
     * @param keyFld key字段
     * @param valRange 分组的值域序列
     * @returns 分组后的数据
     * @example
     * ```typescript
     * const result = cx.util.grpByValRange(values, 'key', [0, 10, 20]);
     * console.log('分组结果:', result);
     * ```
     */
    static grpByValRange(values: any[], keyFld: string, valRange: number[]): {
      nums: number[];
      vals: any[];
      items: any[];
    };

    /**
     * 将对象键转换为小写
     * @param data 源对象
     * @param isChangeSrc 是否修改源对象，默认值为false
     * @returns 修改后的数据对象
     * @example
     * ```typescript
     * const newData = cx.util.lowerJSONKey(data);
     * console.log('小写键对象:', newData);
     * ```
     */
    static lowerJSONKey(data: Record<string, any>, isChangeSrc?: boolean): Record<string, any>;

    /**
     * 生成等间距数值序列
     * @param values 数组
     * @param keyFld key字段
     * @param partNum 等分数
     * @returns 等间距的数值序列
     * @example
     * ```typescript
     * const intervals = cx.util.partEqual(values, 'key', 5);
     * console.log('等间距序列:', intervals);
     * ```
     */
    static partEqual(values: any[], keyFld: string, partNum: number): number[];

    /**
     * 数据排序（支持多字段、多数据类型、升序/降序）
     * @param data 排序数据
     * @param sorts 排序信息数组 - [{ colname: String, desc: Boolean(是否降序), type: Number(cx.consts.TYPE_***) }]
     * @example
     * ```typescript
     * const sortedData = cx.util.sort(data, sorts);
     * console.log('排序数据:', sortedData);
     * ```
     */
    static sort(data: any[], sorts: Array<{
      colname: string;
      desc?: boolean;
      type: number;
    }>): void;

    /**
     * 数据排序（根据主子类型、列名，根据配置的字段信息确定采用的数据排序）
     * @param data 排序数据
     * @param major 主类型
     * @param minor 子类型
     * @param colname 字段列名
     * @param sort 排序方式 (ASC / DESC)
     * @example
     * ```typescript
     * const sortedData = cx.util.sortData(data, major, minor, 'name', 'ASC');
     * console.log('排序数据:', sortedData);
     * ```
     */
    static sortData(data: any[], major: number, minor: number, colname: string, sort: 'ASC' | 'DESC'): void;

    /**
     * 日期排序
     * @param data 数据数组
     * @param colname 排序字段名
     * @param desc 是否降序，默认值为false
     * @returns 排序后的数据数组
     * @example
     * ```typescript
     * const sortedData = cx.util.sortDate(data, 'date', true);
     * console.log('排序后的数据:', sortedData);
     * ```
     */
    static sortDate(data: any[], colname: string, desc?: boolean): any[];

    /**
     * 日期+时间排序
     * @param data 数据数组
     * @param colname 排序字段名
     * @param desc 是否降序，默认值为false
     * @returns 排序后的数据数组
     * @example
     * ```typescript
     * const sortedData = cx.util.sortDatetime(data, 'datetime', true);
     * console.log('排序后的数据:', sortedData);
     * ```
     */
    static sortDatetime(data: any[], colname: string, desc?: boolean): any[];

    /**
     * 数值排序
     * @param data 数据数组
     * @param colname 排序字段名
     * @param desc 是否降序，默认值为false
     * @returns 排序后的数据数组
     * @example
     * ```typescript
     * const sortedData = cx.util.sortNum(data, 'value', true);
     * console.log('排序后的数据:', sortedData);
     * ```
     */
    static sortNum(data: any[], colname: string, desc?: boolean): any[];

    /**
     * 字符串排序
     * @param data 数据数组
     * @param colname 排序字段名
     * @param desc 是否降序，默认值为false
     * @returns 排序后的数据数组
     * @example
     * ```typescript
     * const sortedData = cx.util.sortString(data, 'name', true);
     * console.log('排序后的数据:', sortedData);
     * ```
     */
    static sortString(data: any[], colname: string, desc?: boolean): any[];

    /**
     * 统计(支持按照数组统计，或者按照分组的结果进行统计)
     * @param data 待统计数据（数组 / 对象 - 分组结果）
     * @param colname 统计列列��
     * @param type 统计方式 (cx.consts.STAT_***)
     * @returns 数据统计返回 - { stat: *** }, 对象 (分组结果) - 按照分组的对象结构增加 stat 存放统计结果
     * @example
     * ```typescript
     * const result = cx.util.stat(data, 'column', cx.consts.STAT_SUM);
     * console.log('统计结果:', result);
     * ```
     */
    static stat(data: any[] | Record<string, any>, colname: string, type: number): Record<string, any>;

    /**
     * 将对象键转换为大写
     * @param data 源对象
     * @param isChangeSrc 是否修改源对象，默认值为false
     * @returns 修改后的数据对象
     * @example
     * ```typescript
     * const newData = cx.util.upperJSONKey(data);
     * console.log('大写键对象:', newData);
     * ```
     */
    static upperJSONKey(data: Record<string, any>, isChangeSrc?: boolean): Record<string, any>;
  }
} 