declare namespace cx {
    namespace form {
        interface FormCfg {
            /** 表单的目标表 */
            tabname: string;
            /** 是否用目标表的全部字段 */
            allFlds?: boolean;
            /** 自定义分组 */
            grps?: Array<any>;
            /** 自定义字段，会在allFlds后追加字段 */
            flds?: Array<any>;
            /** 要显示字段名字符串序列，逗号分隔，优先级 dispFlds > hideFlds */
            dispFlds?: string;
            /** 隐藏字段名字符串序列，逗号分隔 */
            hideFlds?: string;
            /** 表单的显示列数 */
            colNum?: number;
            /** 属性组件名 */
            attCom?: string;
            /** 属性现有值，colname: val 键值模式 */
            values?: Record<string, any>;
            /** 附件信息，需要上载附件或者关联Doc，必须有这个属性 */
            attach?: Object;
            /** 上载选项 */
            upload?: Object;
            /** 文档信息，如果关联附件，必须有这个属性 */
            doc?: Object;
            /** 命令按钮条配置 */
            cmdbar?: Object;
            /** 插件的UI设置 */
            uicfg?: Object;
            /** 配置参数 */
            params?: Object;
        }

        interface FormPlugParams {
            /** 实体主类型 */
            major: number;
            /** 实体子类型 */
            minor: number;
            /** 实体ID（id 和 att 二选一，如果没有att，则根据id取属性） */
            id?: number;
            /** 插件标题 */
            title?: string;
            /** 提示信息 */
            prompt?: string;
            /** 数据是否需要解密 */
            decode?: boolean;
            /** 返回的列 */
            cols?: string;
            /** 属性（id 和 att 二选一，如果没有att，则根据id取属性） */
            att?: Object;
            /** 提供给该属性编辑的其他属性 */
            values?: Object;
            /** 是否可编辑 */
            editable?: boolean;
            /** 默认显示模式（cx.consts.MODE_VIEW / EDIT，不设置默认根据 editable 设置） */
            mode?: number;
            /** 是否返回修改的数据 */
            retAtt?: number;
            /** ValButton 调用之前的回调函数 */
            beforeValbtn?: (fld: any, params: any) => void;
            /** ValButton 调用之后的回调函数 */
            afterValbtn?: (fld: any, flds: any, params: any) => void;
            /** 是否必须上载附件 */
            attachRequired?: boolean;
            /** 附件编辑功能是否可用 */
            attachEditable?: boolean;
            /** 是否启用关联附件功能 */
            useAttach?: boolean;
            /** 上载的时候支持多选 */
            uploadMultiple?: boolean;
            /** 回调函数 - 点击按钮 OK */
            onOK?: (att: any, attOld: any, context: any) => void;
            /** 回调函数 - 插件关闭 */
            onClose?: () => void;
            /** 执行插件之前的回调函数 */
            beforeRun?: (params: any) => void;
        }

        /**
         * 表单模式属性编辑/浏览，内置 FormEdit 插件
         * @param {string} formKey - 表单配置命名，基于 static/form/目录json的文件
         * @param {FormPlugParams} params - 运行插件的参数
         * @param {Object} [overDef] - 运行插件覆盖插件定义参数
         * @returns {Promise<any>} 构造好的标准form对象 NormalForm
         * @example
         * ```javascript
         * const formKey = 'userEdit';
         * const params = {
         *     major: 1,
         *     minor: 2,
         *     id: 100,
         *     title: '编辑用户信息',
         *     editable: true,
         *     onOK: (att, attOld, context) => {
         *         console.log('保存成功:', att);
         *     }
         * };
         * 
         * cx.form.attEdit(formKey, params, {
         *     width: 800,
         *     labelWidth: 120
         * });
         * ```
         */
        function attEdit(formKey: string, params: FormPlugParams, overDef?: Object): Promise<any>;

        /**
         * 表单模式属性输入表单模式属性编辑、浏览（无定制表单，采用默认表单）
         * @param {FormPlugParams} params - 运行插件的参数
         * @param {Object} [overDef] - 运行插件覆盖插件定义参数
         * @returns {Promise<any>} 构造好的标准form对象 NormalForm
         * @example
         * ```javascript
         * const params = {
         *     major: 1,
         *     minor: 2,
         *     id: 100,
         *     title: '编辑用户信息',
         *     editable: true,
         *     onOK: (att, attOld, context) => {
         *         console.log('保存成功:', att);
         *     }
         * };
         * 
         * cx.form.attEditNoCfg(params, {
         *     width: 800,
         *     labelWidth: 120
         * });
         * ```
         */
        function attEditNoCfg(params: FormPlugParams, overDef?: Object): Promise<any>;

        /**
         * 表单模式属性输入，内置 FormInput 插件
         * @param {string} formKey - 表单配置命名
         * @param {FormPlugParams} params - 运行插件的参数
         * @param {Object} [overDef] - 覆盖默认配置
         * @returns {Promise<any>} 构造好的标准form对象 NormalForm
         * @example
         * ```javascript
         * const formKey = 'userInput';
         * const params = {
         *     major: 1,
         *     minor: 2,
         *     title: '新建用户',
         *     editable: true,
         *     onOK: (att, attOld, context) => {
         *         console.log('保存成功:', att);
         *     }
         * };
         * 
         * cx.form.attInput(formKey, params, {
         *     title: '新建用户',
         *     submitText: '保存'
         * });
         * ```
         */
        function attInput(formKey: string, params: FormPlugParams & { tabCfgName: string }, overDef?: Object): Promise<any>;

        /**
         * 表单模式属性输入（无定制表单，采用默认表单）
         * @param {FormPlugParams} params - 运行插件的参数
         * @param {Object} [overDef] - 覆盖默认配置
         * @returns {Promise<any>} 构造好的标准form对象 NormalForm
         * @example
         * ```javascript
         * const params = {
         *     major: 1,
         *     minor: 2,
         *     title: '新建用户',
         *     editable: true,
         *     onOK: (att, attOld, context) => {
         *         console.log('保存成功:', att);
         *     }
         * };
         * 
         * cx.form.attInputNoCfg(params, {
         *     title: '新建用户',
         *     width: 600,
         *     submitText: '创建'
         * });
         * ```
         */
        function attInputNoCfg(params: FormPlugParams, overDef?: Object): Promise<any>;

        /**
         * 获取默认表单配置
         * @param {number} major - 主类型
         * @param {number} minor - 子类型
         * @param {FormCfg} cfg - 表单配置对象
         * @returns {FormCfg} 表单配置对象
         * @example
         * ```javascript
         * const cfg = {
         *     tabname: 'user_info',
         *     allFlds: true,
         *     dispFlds: 'name,age,email,phone',
         *     hideFlds: 'password,create_time',
         *     colNum: 2
         * };
         * const formCfg = cx.form.defFormCfg(1, 2, cfg);
         * ```
         */
        function defFormCfg(major: number, minor: number, cfg: FormCfg): FormCfg;

        /**
         * 解析cx_tabcfg���置，构造dataman使用的字段
         * @param {Array<Object>} flds - 原始的字段
         * @param {Object} tabCfg - 配置对象
         * @returns {Array<Object>} 处理后的配置字段列表
         * @example
         * ```javascript
         * const flds = [
         *     { name: 'id', type: 'text', hidden: true },
         *     { name: 'name', type: 'text', required: true }
         * ];
         * const tabCfg = {
         *     flds: '[{"colname":"name","ref":"user:username"}]',
         *     disp: 'name,age,email',
         *     hide: 'id'
         * };
         * const configuredFields = cx.form.getCfgFlds(flds, tabCfg);
         * ```
         */
        function getCfgFlds(flds: Array<Object>, tabCfg: {
            flds?: string;
            disp?: string;
            hide?: string;
            dispSel?: string;
            dispSelAll?: string;
        }): Array<Object>;

        /**
         * 获取字段值对象属性
         * @param {Array<Object>} flds - 字段列表
         * @returns {Array<Object>} 字段值对象属性列表
         * @example
         * ```javascript
         * const flds = [
         *     { name: 'username', value: 'admin', type: 'text' },
         *     { name: 'age', value: 25, type: 'number' }
         * ];
         * const fieldValues = cx.form.getFldVals(flds);
         * ```
         */
        function getFldVals(flds: Array<Object>): Array<Object>;

        /**
         * 加载配置表单
         * @param {string} formKey - 表单配置命名
         * @returns {Object} 表单配置 JSON 对象
         * @example
         * ```javascript
         * const formKey = 'userEdit';
         * const formConfig = cx.form.loadCfg(formKey);
         * ```
         */
        function loadCfg(formKey: string): Object;

        /**
         * 生成字段的配置和选项
         * @param {Array} flds - 字段列表
         * @example
         * ```javascript
         * const fields = [
         *     {
         *         name: 'status',
         *         type: 'select',
         *         options: [
         *             { value: 'active', text: '激活' },
         *             { value: 'inactive', text: '未激活' }
         *         ]
         *     }
         * ];
         * cx.form.makeCfgOpt(fields);
         * ```
         */
        function makeCfgOpt(flds: Array<any>): void;

        /**
         * 构造 数据编辑表单 的form配置对象数据
         * @param {string} formKey - 表单配置名
         * @param {FormPlugParams} params - 运行插件的参数
         * @returns {Promise<any>} 构造好的标准form对象 NormalForm
         * @example
         * ```javascript
         * const formKey = 'userForm';
         * const params = {
         *     major: 1,
         *     minor: 2,
         *     id: 123,
         *     cols: 'name,age,email',
         *     editable: true,
         *     mode: cx.consts.MODE_EDIT
         * };
         * 
         * cx.form.makeFormForEdit(formKey, params).then(form => {
         *     console.log('表单对象:', form);
         * });
         * ```
         */
        function makeFormForEdit(formKey: string, params: FormPlugParams): Promise<any>;

        /**
         * 创建表单配置（不使用tabcfg配置）
         * @param {FormPlugParams} params - 运行插件的参数
         * @returns {Object} 表单配置对象
         * @example
         * ```javascript
         * const params = {
         *     tabCfgName: 'user_info',
         *     major: 1,
         *     minor: 2,
         *     id: 123,
         *     cols: 'name,age,email',
         *     editable: true
         * };
         * const formConfig = cx.form.makeFormForEditNoCfg(params);
         * ```
         */
        function makeFormForEditNoCfg(params: FormPlugParams & { tabCfgName: string }): Object;

        /**
         * 构造 数据录入表单 的form配置对象数据
         * @param {string} formKey - 表单配置名
         * @param {Object} params - 表单参数
         * @returns {Promise<any>} 返回构造好的标准form对象 NormalForm
         * @example
         * ```javascript
         * const formKey = 'userInputForm';
         * const params = {
         *     values: {
         *         defaultAge: 18,
         *         defaultRole: 'user'
         *     },
         *     beforeValBtn: (fld, params) => {
         *         console.log('字段验证前:', fld);
         *     }
         * };
         * 
         * cx.form.makeFormForInput(formKey, params).then(form => {
         *     console.log('输入表单对象:', form);
         * });
         * ```
         */
        function makeFormForInput(formKey: string, params: {
            values?: Object;
            beforeValBtn?: (fld: any, params: any) => void;
            afterValBtn?: (fld: any, flds: any, params: any) => void;
        }): Promise<any>;

        /**
         * 表单模式属性输入,表单模式属性编辑，浏览（无定制表单，采用默认表单）
         * @param {FormPlugParams} params - 运行插件的参数
         * @returns {Promise<any>} 构造好的标准form对象 NormalForm
         * @example
         * ```javascript
         * const params = {
         *     tabCfgName: 'user_info',
         *     major: 1,
         *     minor: 2,
         *     editable: true,
         *     mode: cx.consts.MODE_EDIT
         * };
         * 
         * cx.form.makeFormForInputNoCfg(params).then(form => {
         *     console.log('表单对象:', form);
         * });
         * ```
         */
        function makeFormForInputNoCfg(params: FormPlugParams & { tabCfgName: string }): Promise<any>;

        /**
         * 查询实体表的喜好配置，并构造配置字段
         * @param {Object} params - 参数对象
         * @returns {Promise<Array<Object>>} 处理后的字段序列
         * @example
         * ```javascript
         * const params = {
         *     tabCfgName: 'user_list',
         *     major: 1,
         *     minor: 2
         * };
         * 
         * cx.form.makeHabitCfgFlds(params).then(fields => {
         *     console.log('配置字段:', fields);
         * });
         * ```
         */
        function makeHabitCfgFlds(params: {
            tabCfgName: string;
            major: number;
            minor: number;
        }): Promise<Array<Object>>;

        /**
         * 构造喜好no标识
         * @param {Object} params - 运行插件的参数
         * @returns {string} 喜好标识
         * @example
         * ```javascript
         * const params = {
         *     tabCfgName: 'user_list',
         *     major: 1,
         *     minor: 2
         * };
         * const habitNo = cx.form.makeHabitNo(params);
         * ```
         */
        function makeHabitNo(params: {
            tabCfgName: string;
            major: number;
            minor: number;
        }): string;

        /**
         * 构造Form插件的运行参数
         * @param {Object} form - 解析后的标准Form表单
         * @param {Object} params - 插件运行参数
         * @param {Object} [overDef] - 运行插件覆盖插件定义参数
         * @param {Object} [btn] - 按钮信息
         * @returns {Object} 合并后的新运行参数
         * @example
         * ```javascript
         * const form = {/* 标准Form表单对象 *\/};
         * const params = {
         *     title: '用户编辑',
         *     prompt: '请填写用户信息',
         *     onOK: (att, context) => {
         *         console.log('保存成功:', att);
         *     }
         * };
         * const overDef = { width: 800 };
         * const btn = {
         *     name: 'save',
         *     title: '保存',
         *     type: 'primary'
         * };
         * 
         * const result = cx.form.makeParamsForPlug(form, params, overDef, btn);
         * ```
         */
        function makeParamsForPlug(
            form: Object,
            params: Object,
            overDef?: Object,
            btn?: {
                name: string;
                title?: string;
                type?: string;
                icon?: string;
                disabled?: boolean;
                onClick?: (form: any, context: any) => void;
            }
        ): { params: Object; overDef: Object };

        /**
         * 解析表单配置，生成标准化的表单对象
         * @param {FormCfg} cfg - 表单配置
         * @param {Object} params - 解析的其他参数
         * @returns {Promise<any>} 标准化后的配置对象 NormalForm
         * @example
         * ```javascript
         * const formConfig = {/* 表单配置对象 *\/};
         * const params = {
         *     id: 123,
         *     isNew: false,
         *     mode: cx.consts.MODE_EDIT,
         *     editable: true
         * };
         * 
         * cx.form.parseCfg(formConfig, params).then(form => {
         *     console.log('标准化表单对象:', form);
         * });
         * ```
         */
        function parseCfg(cfg: FormCfg, params: {
            id?: number;
            isNew?: boolean;
            mode?: number;
            editable?: boolean;
        }): Promise<any>;

        /**
         * 查询实体表的喜好配置
         * @param {Object} params - 参数对象
         * @returns {Promise<{habit: Object, tabCfg: Object}>} 私有喜好和公有喜好
         * @example
         * ```javascript
         * const params = {
         *     tabCfgName: 'user_list',
         *     major: 1,
         *     minor: 2
         * };
         * 
         * cx.form.qryTabHabit(params).then(result => {
         *     console.log('私有喜好:', result.habit);
         *     console.log('公有喜好:', result.tabCfg);
         * });
         * ```
         */
        function qryTabHabit(params: {
            tabCfgName: string;
            major: number;
            minor: number;
        }): Promise<{
            habit: Object;
            tabCfg: Object;
        }>;

        /**
         * 运行Form插件
         * @param {string} plugName - 插件名
         * @param {Object} form - 解析后的标准Form表单
         * @param {Object} params - 插件运行参数
         * @param {Object} [overDef] - 运行插件覆盖插件定义参数
         * @param {Object} [btn] - 按钮信息
         * @returns {Promise<any>} 运行的Promise对象
         * @example
         * ```javascript
         * const plugName = 'FormEdit';
         * const form = {/* 标准Form表单对象 *\/};
         * const params = {
         *     title: '用户编辑',
         *     onOK: (att, context) => {
         *         console.log('保存成功:', att);
         *     }
         * };
         * 
         * cx.form.runFormPlug(plugName, form, params).then(runInfo => {
         *     console.log('插件运行信息:', runInfo);
         * });
         * ```
         */
        function runFormPlug(
            plugName: string,
            form: Object,
            params: Object,
            overDef?: Object,
            btn?: {
                name: string;
                title?: string;
                type?: string;
                icon?: string;
                disabled?: boolean;
                onClick?: (form: any, context: any) => void;
            }
        ): Promise<any>;
    }
} 