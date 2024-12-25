declare namespace cx {
  /**
   * 属性基类，提供了属性相关的基础功能
   */
  class AttBase {
    /**
     * 计算属性函数，用于处理和计算对象的属性值
     * @param att 需要计算的属性对象
     * @returns 返回计算后的属性对象
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     value: 100
     * };
     * cx.AttBase.calcAtt(att);
     * ```
     */
    static calcAtt(att: Record<string, any>): Record<string, any>;

    /**
     * 变更处理函数
     * @param att 属性对象
     * @param value 新值
     * @param oldValue 旧值
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     type: 'number'
     * };
     * cx.AttBase.changed(att, 100, 50);
     * ```
     */
    static changed(att: Record<string, any>, value: any, oldValue: any): void;

    /**
     * 检查属性值
     * @param att 属性对象
     * @param value 需要检查的值
     * @returns 检查结果
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     type: 'number'
     * };
     * cx.AttBase.checkValue(att, 100);
     * ```
     */
    static checkValue(att: Record<string, any>, value: any): boolean;

    /**
     * 解码函数，用于将编码后的值解码为原始值
     * @param att 属性对象
     * @param value 需要解码的值
     * @returns 返回解码后的值
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     type: 'string',
     *     encoding: 'base64'
     * };
     * const decodedValue = cx.AttBase.decode(att, 'SGVsbG8gV29ybGQ=');
     * ```
     */
    static decode(att: Record<string, any>, value: any): any;

    /**
     * 编码函数，用于将原始值编码为特定格式
     * @param att 属性对象
     * @param value 需要编码的值
     * @returns 返回编码后的值
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     type: 'string',
     *     encoding: 'base64'
     * };
     * const encodedValue = cx.AttBase.encode(att, 'Hello World');
     * ```
     */
    static encode(att: Record<string, any>, value: any): any;

    /**
     * 过滤选项函数，用于根据条件过滤属性的选项列表
     * @param att 属性对象
     * @param filter 过滤条件
     * @returns 返回过滤后的选项列表
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     options: [
     *         {value: 1, label: 'Option 1'},
     *         {value: 2, label: 'Option 2'},
     *         {value: 3, label: 'Option 3'}
     *     ]
     * };
     * const filter = {
     *     label: 'Option'
     * };
     * const filteredOptions = cx.AttBase.filterOptions(att, filter);
     * ```
     */
    static filterOptions(att: Record<string, any>, filter: Record<string, any>): Array<Record<string, any>>;

    /**
     * 获取默认值
     * @param att 属性对象
     * @returns 返回属性的默认值
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     defaultValue: 100
     * };
     * const defaultValue = cx.AttBase.getDefVal(att);
     * ```
     */
    static getDefVal(att: Record<string, any>): any;

    /**
     * 获取默认值表达式函数，用于获取属性的默认值表达式
     * @param att 属性对象
     * @returns 返回属性的默认值表达式
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     type: 'number',
     *     defaultExp: 'value * 2'
     * };
     * const defaultExp = cx.AttBase.getDefValExp(att);
     * ```
     */
    static getDefValExp(att: Record<string, any>): string | Function;

    /**
     * 获取显示值函数，用于获取属性的显示值
     * @param att 属性对象
     * @param value 需要显示的值
     * @returns 返回格式化后的显示值
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     type: 'number',
     *     format: '0.00'
     * };
     * const displayValue = cx.AttBase.getDisp(att, 123.456);
     * ```
     */
    static getDisp(att: Record<string, any>, value: any): string;

    /**
     * 获取显示字段
     * @returns 返回显示字段
     * @example
     * ```typescript
     * cx.AttBase.getDispFld();
     * ```
     */
    static getDispFld(): any;

    /**
     * 获取字段值
     * @param att 属性对象
     * @returns 返回字段值列表
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     fields: ['id', 'name']
     * };
     * const values = cx.AttBase.getFldVals(att);
     * ```
     */
    static getFldVals(att: Record<string, any>): Array<any>;

    /**
     * 初始化字段函数，用于初始化属性的字段
     * @param att 属性对象
     * @returns 返回初始化后的属性对象
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     fields: {
     *         id: { type: 'number' },
     *         name: { type: 'string' }
     *     }
     * };
     * cx.AttBase.initFlds(att);
     * ```
     */
    static initFlds(att: Record<string, any>): Record<string, any>;

    /**
     * 生成属性函数，用于创建新的属性对象
     * @param config 属性配置对象
     * @returns 返回新创建的属性对象
     * @example
     * ```typescript
     * const config = {
     *     name: 'test',
     *     type: 'string',
     *     defaultValue: '',
     *     required: true
     * };
     * const att = cx.AttBase.makeAtt(config);
     * ```
     */
    static makeAtt(config: Record<string, any>): Record<string, any>;

    /**
     * 生成编辑器函数，用于创建属性的编辑器
     * @param att 属性对象
     * @param options 编辑器选项
     * @returns 返回编辑器对象
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     type: 'string',
     *     editorType: 'text'
     * };
     * const editor = cx.AttBase.makeEdit(att, {
     *     placeholder: '请输入'
     * });
     * ```
     */
    static makeEdit(att: Record<string, any>, options: Record<string, any>): Record<string, any>;

    /**
     * 生成表达式
     * @param att 属性对象
     * @returns 返回生成的表达式
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     expression: 'value + 1'
     * };
     * const exp = cx.AttBase.makeExp(att);
     * ```
     */
    static makeExp(att: Record<string, any>): string | Function;

    /**
     * 生成输入框函数，用于创建属性的输入框
     * @param att 属性对象
     * @param options 输入框选项
     * @returns 返回输入框对象
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     type: 'string'
     * };
     * const input = cx.AttBase.makeInput(att, {
     *     placeholder: '请输入',
     *     maxLength: 100
     * });
     * ```
     */
    static makeInput(att: Record<string, any>, options: Record<string, any>): Record<string, any>;

    /**
     * 数值化处理
     * @param att 属性对象
     * @param value 需要处理的值
     * @returns 返回数值化后的值
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     type: 'number'
     * };
     * const numValue = cx.AttBase.numberize(att, '123.45');
     * ```
     */
    static numberize(att: Record<string, any>, value: any): number;

    /**
     * 变更事件函数，用于处理属性值变更事件
     * @param att 属性对象
     * @param value 新值
     * @param oldValue 旧值
     * @example
     * ```typescript
     * const att = {
     *     name: 'test',
     *     type: 'number'
     * };
     * cx.AttBase.onChange(att, 100, 50);
     * ```
     */
    static onChange(att: Record<string, any>, value: any, oldValue: any): void;
  }
} 