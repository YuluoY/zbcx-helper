declare namespace cx.data {
    /**
     * 登录信息增加登录时间
     * @param {Object} params - 登录参数对象
     * @param {Function} [encode] - 登录信息加密函数
     * @example
     * ```javascript
     * // 添加登录时间（不加密）
     * const loginParams = {
     *     username: 'admin',
     *     password: '123456'
     * };
     * cx.data.addLoginTime(loginParams);
     * 
     * // 添加登录时间（需要加密）
     * const loginParamsWithEncode = {
     *     username: 'admin',
     *     password: '123456'
     * };
     * cx.data.addLoginTime(loginParamsWithEncode, (time) => {
     *     // 对时间进行加密处理
     *     return encryptTime(time);
     * });
     * ```
     */
    function addLoginTime(params: Record<string, any>, encode?: (time: number) => any): void;

    /**
     * 取操作人员的部门和职务
     * @returns {Promise<{organ: string, position: string}>} 返回一个 Promise 对象，解析为操作人员的部门和职务信息
     * @example
     * ```javascript
     * // 获取当前用户的部门和职务信息
     * cx.data.getMyOrgPos()
     *   .then(info => {
     *     console.log('部门:', info.organ);
     *     console.log('职务:', info.position);
     *   })
     *   .catch(err => {
     *     console.error('获取部门职务信息失败:', err);
     *   });
     * ```
     */
    function getMyOrgPos(): Promise<{organ: string, position: string}>;

    /**
     * 判断账号是否为手机号或邮箱
     * @param {string} account - 待验证的账号字符串
     * @returns {boolean} 如果账号是手机号或邮箱返回 true，否则返回 false
     * @example
     * ```javascript
     * // 验证手机号
     * console.log(cx.data.isCellOrEmail('13812345678')); // true
     * 
     * // 验证邮箱
     * console.log(cx.data.isCellOrEmail('user@example.com')); // true
     * 
     * // 验证无效格式
     * console.log(cx.data.isCellOrEmail('invalid-format')); // false
     * 
     * // 在表单验证中使用
     * function validateAccount(account) {
     *     if (!cx.data.isCellOrEmail(account)) {
     *         throw new Error('账号必须是手机号或邮箱格式');
     *     }
     *     return true;
     * }
     * ```
     */
    function isCellOrEmail(account: string): boolean;

    /**
     * 根据当前用户（系统号，登录用户ID）及用户习惯的 no，取批处理的查询参数
     * @param {string} no - 用户习惯 no
     * @returns {Promise<Record<string, any>>} cx.svr.data.batch 的查询参数
     * @example
     * ```javascript
     * // 获取指定用户习惯的批处理查询参数
     * const params = await cx.data.paramsBatchHabit('myHabitNo');
     * ```
     */
    function paramsBatchHabit(no: string): Promise<Record<string, any>>;

    /**
     * 查询用户习惯配置
     * @param {string} no - 用户习惯 no
     * @returns {Promise<Record<string, any>>} 返回一个 Promise 对象，解析为用户习惯配置数据
     * @example
     * ```javascript
     * // 查询指定用户习惯的配置
     * const habitConfig = await cx.data.queryHabit('myHabitNo');
     * ```
     */
    function queryHabit(no: string): Promise<Record<string, any>>;

    /**
     * 手机号规则验证
     * @param {Object} context - 验证上下文对象
     * @returns {Array<Rule>} 返回手机号验证规则数组
     * @example
     * ```javascript
     * // 获取手机号验证规则
     * const rules = cx.data.rulesCell({
     *   required: true // 是否必填
     * });
     * ```
     */
    function rulesCell(context: { required?: boolean }): Array<Record<string, any>>;

    /**
     * 邮箱规则验证
     * @param {Object} context - 验证上下文对象
     * @returns {Array<Rule>} 返回邮箱验证规则数组
     * @example
     * ```javascript
     * // 获取邮箱验证规则
     * const rules = cx.data.rulesEmail({
     *   required: true // 是否必填
     * });
     * ```
     */
    function rulesEmail(context: { required?: boolean }): Array<Record<string, any>>;

    /**
     * 验证码规则验证
     * @param {Object} context - 验证上下文对象
     * @returns {Array<Rule>} 返回验证码验证规则数组
     * @example
     * ```javascript
     * // 获取验证码验证规则
     * const rules = cx.data.rulesVCode({
     *   required: true // 是否必填
     * });
     * ```
     */
    function rulesVCode(context: { required?: boolean }): Array<Record<string, any>>;

    /**
     * 根据当前登录用户，系统号，保存用户习惯数据
     * @param {string} no - 用户习惯 no
     * @param {Object} value - 用户习惯 value
     * @param {number} [id] - 用户习惯ID（有ID则更新数据，没有ID则添加数据）
     * @returns {Promise<any>} 返回一个 Promise 对象，表示保存操作的结果
     * @example
     * ```javascript
     * // 添加新的用户习惯
     * await cx.data.saveHabit('myHabitNo', {
     *   displayFields: ['field1', 'field2']
     * });
     * 
     * // 更新已有的用户习惯
     * await cx.data.saveHabit('myHabitNo', {
     *   displayFields: ['field1', 'field2', 'field3']
     * }, 123);
     * ```
     */
    function saveHabit(no: string, value: Record<string, any>, id?: number): Promise<any>;
} 