/**
 * Consts 类提供了系统中使用的各种常量定义
 */

declare namespace cx {
  declare const consts: {

    /** 数据库类型常量 */
    DB_ORACLE: 1;
    DB_MYSQL: 2;
    DB_POSTGRESQL: 3;
    DB_MSSQL: 4;

    /** 显示控件类型常量 */
    DISP_TEXTBOX: 1;
    DISP_LIST: 2;
    DISP_DATE: 3;
    DISP_RICHTEXT: 4;
    DISP_TIMESTAMP: 5;
    DISP_DROPDOWN: 6;
    DISP_VALBUTTON: 7;
    DISP_SELDEPPOS: 8;
    DISP_SELDYNA: 9;
    DISP_AUTOCODE: 11;
    DISP_TIME: 12;
    DISP_DATEYEAR: 13;
    DISP_MULTISEL: 21;
    DISP_RADIO: 22;
    DISP_SWITCH: 23;
    DISP_CHECKBOX: 24;
    DISP_LOCATE: 31;
    DISP_TAKEPHOTO: 32;
    DISP_HANDDRAW: 33;
    DISP_AUDIO: 34;
    DISP_VIDEO: 35;
    DISP_IMAGE: 36;
    DISP_URL: 37;

    /** 实体类型常量 */
    ENTITY_TABLE: 1;
    ENTITY_PNT: 2;
    ENTITY_LIN: 3;
    ENTITY_REG: 4;
    ENTITY_NOTE: 5;

    /** 要素类型常量 */
    FEATURE_PNT: 12;
    FEATURE_LIN: 13;
    FEATURE_REG: 14;

    /** UI类型常量 */
    UI_NONE: 0;
    UI_DIALOG: 1;
    UI_TABPAGE: 2;
    UI_ROUTE: 3;
    UI_COM: 4;
    UI_SINGLEPAGE: 5;

    /** 地图符号类型常量 */
    MAPS_SYMBOL: 1;
    MAPS_VECTOR: 2;
    MAPS_ICON: 3;
    MAPS_MODEL: 4;

    /** 文件类型常量 */
    FILE_DOC: 1;
    FILE_IMG: 2;
    FILE_VIDEO: 3;
    FILE_AUDIO: 4;

    /** 数据类型常量 */
    DT_NONE: 0;
    DT_INT: 1;
    DT_REAL: 2;
    DT_STRING: 3;
    DT_DATE: 4;
    DT_DATETIME: 5;
    DT_BOOL: 6;

    /** 规则类型常量 */
    RULE_INITNEW: 1;
    RULE_INITOLD: 2;
    RULE_INIT: 3;
    RULE_CHANGE: 4;
    RULE_FINISH: 8;

    /** 流程类型常量 */
    PROC_START: 1;
    PROC_HANDLE: 2;
    PROC_TRACE: 4;

    /** 操作类型常量 */
    ATT_EDIT: 5;
    ATT_VIEW: 6;
    ATT_ADD: 7;

    /** 对齐方式常量 */
    ALIGN_LEFT: -1;
    ALIGN_CENTER: 0;
    ALIGN_RIGHT: 1;
    ALIGN_TOP: -1;
    ALIGN_MIDDLE: 0;
    ALIGN_BOTTOM: 1;

    /** 运行环境常量 */
    RUN_VUE: 1;

    /** 场景类型常量 */
    SCENE_2D: 1;
    SCENE_3D: 2;
    SCENE_23D: 3;

    /** 月份常量 */
    THISMONTH: 1;
    LASTMONTH: 2;
    NEXTMONTH: 3;

    /** 级别常量 */
    LEVEL_NORMAL: 1;
    LEVEL_SAFE: 2;
    LEVEL_WARN: 3;
    LEVEL_DANGER: 4;
    LEVEL_EMPHASIZE: 5;

    /** 分配类型常量 */
    ASSIGN_FUNC: 1;
    ASSIGN_BTN: 2;
    ASSIGN_REGION: 3;
    ASSIGN_LAYER: 4;
    ASSIGN_MAPLAYER: 5;
    ASSIGN_AUTHETT: 7;
    ASSIGN_AUTHEXP: 8;

    /** 文档节点类型常量 */
    DCN_NODE: 1;
    DCN_LEAF: 2;
    DCS_LABEL: 1;
    DCS_FILESYS: 2;
    DCS_MEMOBJ: 3;
    DCS_TABLE: 4;

    /** 服务类型常量 */
    SVR_ADD: 1;
    SVR_DEL: 2;
    SVR_UPD: 3;
    SVR_QRY: 4;
    SVR_STAT: 5;
    SVR_PROC: 6;
    SVR_QRYID: 7;
    SVR_QRYID0: 8;

    /** 登录类型常量 */
    LOGIN_ACCOUNT: 1;
    LOGIN_MAIL: 2;
    LOGIN_CELL: 3;
    LOGIN_SCAN: 4;
    LOGIN_QQ: 5;
    LOGIN_WX: 6;

    /** 模式常量 */
    MODE_VIEW: 0;
    MODE_EDIT: 1;
    FLDMODE: 0;
    ATTMODE: 1;

    /** 保存位置常量 */
    SAVETO_FILESYS: "FileSys";
    SAVETO_DOC: "Doc";

    /** 系统表常量 */
    SYSTAB: 99;
    TAB_SYSDEF: 1;
    TAB_ENTITY: 4;
    TAB_FLD: 5;
    TAB_FLDVALUE: 6;
    TAB_DATAFMT: 7;
    TAB_PLUGIN: 8;
    TAB_DATAVSL: 9;
    TAB_FUNC: 10;
    TAB_TABCFG: 11;
    TAB_ORGAN: 12;
    TAB_USER: 13;
    TAB_SYSUSER: 14;
    TAB_SYSROLE: 15;
    TAB_USERROLE: 16;
    TAB_USERDEP: 17;
    TAB_SYSROLEOBJ: 18;
    TAB_DEPADM: 19;
    TAB_DOCDIR: 20;
    TAB_DOCDIRTMPL: 21;
    TAB_TRAIN: 22;
    TAB_VALIDATOR: 23;
    TAB_FEEDBACK: 24;
    TAB_UPDATE: 26;
    TAB_DATAFLD: 28;
    TAB_DATASET: 29;
    TAB_RESREL: 31;
    TAB_MAPLAYER: 32;
    TAB_MAPSERVICE: 33;
    TAB_VIEWPORT: 34;
    TAB_REGION: 35;
    TAB_LAYER: 36;
    TAB_MAPARA: 37;
    TAB_LOGINLOG: 38;
    TAB_OPERLOG: 39;
    TAB_SYSGROUP: 40;
    TAB_USERGROUP: 41;
    TAB_DOCRECYB: 44;
    TAB_MEDIA: 45;
    TAB_URLMAP: 46;
    TAB_USERSQL: 47;
    TAB_CODERULE: 48;
    TAB_ZYTREE: 49;
    TAB_AUTHETT: 53;
    TAB_CMDTOOL: 54;
    TAB_RESDIR: 55;
    TAB_USERHABIT: 56;
    TAB_PROCGRP: 60;
    TAB_PROCS: 61;
    TAB_DELEGATE: 62;
    TAB_PROCASSI: 63;
    TAB_PROCCOMP: 65;
    TAB_RESTREE: 70;
    TAB_BFNODE: 71;
    TAB_BFFLOW: 72;

    /** 组织机构相关常量 */
    ORGAN: 12;
    USER: 13;
    SYSUSER: 14;
    SYSROLE: 15;
    USERROLE: 16;
    USERDEP: 17;
    ROLEOBJ: 18;
    SYSGROUP: 19;
    USERGROUP: 41;
    MEDIA: 45;

    /** 分组类型常量 */
    GROUP_VALUE: 1;
    GROUP_YEAR: 2;
    GROUP_MONTH: 3;
    GROUP_DATE: 4;
    GROUP_TIME: 5;
    GROUP_RANGE: 6;
    GROUP_IN: 7;

    /** 统计类型常量 */
    STAT_NUM: 1;
    STAT_SUM: 2;

    /** 排序常量 */
    SORT_ASC: "ASC";
    SORT_DESC: "DESC";

    /** 数据类型常量 */
    TYPE_NUMBER: "number";
    TYPE_STRING: "string";
    TYPE_FUNCTION: "function";
    TYPE_OBJECT: "object";
    TYPE_BOOLEAN: "boolean";

    /** 形状类型常量 */
    SHAPE_ICON: "icon";
    SHAPE_RECT: "rect";

    /** 状态常量 */
    ST_DEFAULT: "default";
    ST_LOADING: "loading";
    ST_SUCCESS: "success";
    ST_FAIL: "fail";

    /** 文本常量 */
    TEXT_SEPARATOR: ":@:";
    TEXT_NULLVAL: "null";
    TEXT_COMPLETED: "■";

    /** 分页常量 */
    PAGE_SIZE: 20;
    PAGE_SIZES: [20, 50, 100];

    /** 其他常量 */
    NULL: 0;
    PX: "px";
    MILLISECOND_DAY: 864e5;

    /** 对齐相关常量 */
    /**
     * 底部对齐
     * @example
     * ```js
     * element.style.verticalAlign = cx.consts.ALIGN_BOTTOM;
     * ```
     */
      ALIGN_BOTTOM: string;

    /**
     * 水平居中对齐
     * @example
     * ```js
     * element.style.textAlign = cx.consts.ALIGN_CENTER;
     * ```
     */
      ALIGN_CENTER: string;

    /**
     * 左对齐
     * @example
     * ```js
     * element.style.textAlign = cx.consts.ALIGN_LEFT;
     * ```
     */
      ALIGN_LEFT: string;

    /**
     * 垂直居中对齐
     * @example
     * ```js
     * element.style.verticalAlign = cx.consts.ALIGN_MIDDLE;
     * ```
     */
      ALIGN_MIDDLE: string;

    /**
     * 右对齐
     * @example
     * ```js
     * element.style.textAlign = cx.consts.ALIGN_RIGHT;
     * ```
     */
      ALIGN_RIGHT: string;

    /**
     * 顶部对齐
     * @example
     * ```js
     * element.style.verticalAlign = cx.consts.ALIGN_TOP;
     * ```
     */
      ALIGN_TOP: string;
  
    /** 数据库相关常量 */
      /**
       * Microsoft SQL Server 数据库
       * @example
       * ```js
       * if (dbType === cx.consts.DB_MSSQL) {
       *   // MSSQL 特定的处理逻辑
       * }
       * ```
       */
      DB_MSSQL: string;
  
      /**
       * MySQL 数据库
       * @example
       * ```js
       * if (dbType === cx.consts.DB_MYSQL) {
       *   // MySQL 特定的处理逻辑
       * }
       * ```
       */
      DB_MYSQL: string;
  
      /**
       * Oracle 数据库
       * @example
       * ```js
       * if (dbType === cx.consts.DB_ORACLE) {
       *   // Oracle 特定的处理逻辑
       * }
       * ```
       */
      DB_ORACLE: string;
  
      /**
       * PostgreSQL 数据库
       * @example
       * ```js
       * if (dbType === cx.consts.DB_POSTGRESQL) {
       *   // PostgreSQL 特定的处理逻辑
       * }
       * ```
       */
      DB_POSTGRESQL: string;
  
    /** 显示类型相关常量 */
      /**
       * 音频显示类型
       * @example
       * ```js
       * field.displayType = cx.consts.DISP_AUDIO;
       * ```
       */
      DISP_AUDIO: string;
  
      /**
       * 自动编码显示类型
       * @example
       * ```js
       * field.displayType = cx.consts.DISP_AUTOCODE;
       * ```
       */
      DISP_AUTOCODE: string;
  
      /**
       * 复选框显示类型
       * @example
       * ```js
       * if (field.displayType === cx.consts.DISP_CHECKBOX) {
       *   // 复选框特定的处理逻辑
       * }
       * ```
       */
      DISP_CHECKBOX: string;
  
      /**
       * 日期显示类型
       * @example
       * ```js
       * field.displayType = cx.consts.DISP_DATE;
       * ```
       */
      DISP_DATE: string;
  
      /**
       * 年份显示类型
       * @example
       * ```js
       * field.displayType = cx.consts.DISP_DATEYEAR;
       * ```
       */
      DISP_DATEYEAR: string;
  
      /**
       * 下拉框显示类型
       * @example
       * ```js
       * field.displayType = cx.consts.DISP_DROPDOWN;
       * ```
       */
      DISP_DROPDOWN: string;
  
    /** 实体类型相关常量 */
      /**
       * 线实体类型
       * @example
       * ```js
       * if (entity.type === cx.consts.ENTITY_LIN) {
       *   // 线实体特定的处理逻辑
       * }
       * ```
       */
      ENTITY_LIN: string;
  
      /**
       * 注记实体类型
       * @example
       * ```js
       * if (entity.type === cx.consts.ENTITY_NOTE) {
       *   // 注记实体特定的处理逻辑
       * }
       * ```
       */
      ENTITY_NOTE: string;
  
      /**
       * 点实体类型
       * @example
       * ```js
       * if (entity.type === cx.consts.ENTITY_PNT) {
       *   // 点实体特定的处理逻辑
       * }
       * ```
       */
      ENTITY_PNT: string;
  
      /**
       * 面实体类型
       * @example
       * ```js
       * if (entity.type === cx.consts.ENTITY_REG) {
       *   // 面实体特定的处理逻辑
       * }
       * ```
       */
      ENTITY_REG: string;
  
      /**
       * 表格实体类型
       * @example
       * ```js
       * if (entity.type === cx.consts.ENTITY_TABLE) {
       *   // 表格实体特定的处理逻辑
       * }
       * ```
       */
      ENTITY_TABLE: string;
  
    /** 文件类型相关常量 */
      /**
       * 音频文件类型
       * @example
       * ```js
       * if (file.type === cx.consts.FILE_AUDIO) {
       *   // 音频文件特定的处理逻辑
       * }
       * ```
       */
      FILE_AUDIO: string;
  
      /**
       * 文档文件类型
       * @example
       * ```js
       * if (file.type === cx.consts.FILE_DOC) {
       *   // 文档文件特定的处理逻辑
       * }
       * ```
       */
      FILE_DOC: string;
  
      /**
       * 图片文件类型
       * @example
       * ```js
       * if (file.type === cx.consts.FILE_IMG) {
       *   // 图片文件特定的处理逻辑
       * }
       * ```
       */
      FILE_IMG: string;
  
      /**
       * 视频文件类型
       * @example
       * ```js
       * if (file.type === cx.consts.FILE_VIDEO) {
       *   // 视频文件特定的处理逻辑
       * }
       * ```
       */
      FILE_VIDEO: string;
  
    /** 分组相关常量 */
      /**
       * 按日期分组
       * @example
       * ```js
       * data.groupBy(cx.consts.GROUP_DATE);
       * ```
       */
      GROUP_DATE: string;
  
      /**
       * 按包含关系分组
       * @example
       * ```js
       * data.groupBy(cx.consts.GROUP_IN);
       * ```
       */
      GROUP_IN: string;
  
      /**
       * 按月份分组
       * @example
       * ```js
       * data.groupBy(cx.consts.GROUP_MONTH);
       * ```
       */
      GROUP_MONTH: string;
  
      /**
       * 按范围分组
       * @example
       * ```js
       * data.groupBy(cx.consts.GROUP_RANGE);
       * ```
       */
      GROUP_RANGE: string;
  
      /**
       * 按时间分组
       * @example
       * ```js
       * data.groupBy(cx.consts.GROUP_TIME);
       * ```
       */
      GROUP_TIME: string;
  
      /**
       * 按值分组
       * @example
       * ```js
       * data.groupBy(cx.consts.GROUP_VALUE);
       * ```
       */
      GROUP_VALUE: string;
  
      /**
       * 按年份分组
       * @example
       * ```js
       * data.groupBy(cx.consts.GROUP_YEAR);
       * ```
       */
      GROUP_YEAR: string;
  
    /** 级别相关常量 */
      /**
       * 危险级别
       * @example
       * ```js
       * message.level = cx.consts.LEVEL_DANGER;
       * // 根据级别显示不同样式
       * if (message.level === cx.consts.LEVEL_DANGER) {
       *   // 显示红色样式
       * }
       * ```
       */
      LEVEL_DANGER: string;
  
      /**
       * 强调级别
       * @example
       * ```js
       * message.level = cx.consts.LEVEL_EMPHASIZE;
       * // 根据级别显示不同样式
       * if (message.level === cx.consts.LEVEL_EMPHASIZE) {
       *   // 显示加粗样式
       * }
       * ```
       */
      LEVEL_EMPHASIZE: string;
  
      /**
       * 普通级别
       * @example
       * ```js
       * message.level = cx.consts.LEVEL_NORMAL;
       * // 根据级别显示不同样式
       * if (message.level === cx.consts.LEVEL_NORMAL) {
       *   // 显示默认样式
       * }
       * ```
       */
      LEVEL_NORMAL: string;
  
      /**
       * 警告级别
       * @example
       * ```js
       * message.level = cx.consts.LEVEL_WARN;
       * // 根据级别显示不同样式
       * if (message.level === cx.consts.LEVEL_WARN) {
       *   // 显示黄色样式
       * }
       * ```
       */
      LEVEL_WARN: string;
  
    /** 登录相关常量 */
      /**
       * 账号密码登录
       * @example
       * ```js
       * if (loginType === cx.consts.LOGIN_ACCOUNT) {
       *   // 账号密码登录处理
       * }
       * ```
       */
      LOGIN_ACCOUNT: string;
  
      /**
       * 手机号登录
       * @example
       * ```js
       * if (loginType === cx.consts.LOGIN_CELL) {
       *   // 手机号登录处理
       * }
       * ```
       */
      LOGIN_CELL: string;
  
      /**
       * 邮箱登录
       * @example
       * ```js
       * if (loginType === cx.consts.LOGIN_MAIL) {
       *   // 邮箱登录处理
       * }
       * ```
       */
      LOGIN_MAIL: string;
  
      /**
       * QQ登录
       * @example
       * ```js
       * if (loginType === cx.consts.LOGIN_QQ) {
       *   // QQ登录处理
       * }
       * ```
       */
      LOGIN_QQ: string;
  
      /**
       * 扫码登录
       * @example
       * ```js
       * if (loginType === cx.consts.LOGIN_SCAN) {
       *   // 扫码登录处理
       * }
       * // 检查是否支持扫码登录
       * if (supportedLoginTypes.includes(cx.consts.LOGIN_SCAN)) {
       *   // 显示扫码登录选项
       * }
       * ```
       */
      LOGIN_SCAN: string;
  
      /**
       * 微信登录
       * @example
       * ```js
       * if (loginType === cx.consts.LOGIN_WX) {
       *   // 微信登录处理
       * }
       * ```
       */
      LOGIN_WX: string;
  
    /** 地图相关常量 */
      /**
       * 图标类型地图元素
       * @example
       * ```js
       * if (element.type === cx.consts.MAPS_ICON) {
       *   // 图标类型处理
       * }
       * // 创建图标类型地图元素
       * const icon = map.createElement(cx.consts.MAPS_ICON);
       * ```
       */
      MAPS_ICON: string;
  
      /**
       * 模型类型地图元素
       * @example
       * ```js
       * if (element.type === cx.consts.MAPS_MODEL) {
       *   // 模型类型处理
       * }
       * // 创建模型类型地图元素
       * const model = map.createElement(cx.consts.MAPS_MODEL);
       * ```
       */
      MAPS_MODEL: string;
  
      /**
       * 符号类型地图元素
       * @example
       * ```js
       * if (element.type === cx.consts.MAPS_SYMBOL) {
       *   // 符号类型处理
       * }
       * // 创建符号类型地图元素
       * const symbol = map.createElement(cx.consts.MAPS_SYMBOL);
       * ```
       */
      MAPS_SYMBOL: string;
  
      /**
       * 矢量类型地图元素
       * @example
       * ```js
       * if (element.type === cx.consts.MAPS_VECTOR) {
       *   // 矢量类型处理
       * }
       * // 创建矢量类型地图元素
       * const vector = map.createElement(cx.consts.MAPS_VECTOR);
       * ```
       */
      MAPS_VECTOR: string;
  
    /** 模式相关常量 */
      /**
       * 编辑模式
       * @example
       * ```js
       * // 设置表单模式
       * form.mode = cx.consts.MODE_EDIT;
       * 
       * // 根据模式显示不同的按钮
       * if (form.mode === cx.consts.MODE_EDIT) {
       *   // 显示保存、取消按钮
       *   showEditButtons();
       * }
       * 
       * // 判断是否可编辑
       * const isEditable = form.mode === cx.consts.MODE_EDIT;
       * ```
       */
      MODE_EDIT: string;
  
      /**
       * 查看模式
       * @example
       * ```js
       * // 设置表单模式
       * form.mode = cx.consts.MODE_VIEW;
       * 
       * // 根据模式显示不同的按钮
       * if (form.mode === cx.consts.MODE_VIEW) {
       *   // 显示编辑按钮
       *   showViewButtons();
       * }
       * ```
       */
      MODE_VIEW: string;
  
    /** 流程相关常量 */
      /**
       * 流程处理
       * @example
       * ```js
       * if (operationType === cx.consts.PROC_HANDLE) {
       *   // 处理流程
       *   handleProcess();
       * }
       * // 判断是否为流程处理操作
       * const isHandleOperation = type === cx.consts.PROC_HANDLE;
       * ```
       */
      PROC_HANDLE: string;
  
      /**
       * 流程进度
       * @example
       * ```js
       * if (operationType === cx.consts.PROC_PROGRESS) {
       *   // 查看流程进度
       *   showProgress();
       * }
       * ```
       */
      PROC_PROGRESS: string;
  
      /**
       * 流程启动
       * @example
       * ```js
       * if (operationType === cx.consts.PROC_START) {
       *   // 启动流程
       *   startProcess();
       * }
       * // 判断是否为流程启动操作
       * const isStartOperation = type === cx.consts.PROC_START;
       * ```
       */
      PROC_START: string;
  
      /**
       * 流程追踪
       * @example
       * ```js
       * if (operationType === cx.consts.PROC_TRACE) {
       *   // 追踪流程
       *   traceProcess();
       * }
       * ```
       */
      PROC_TRACE: string;
  
    /** 规则相关常量 */
      /**
       * 规则变更
       * @example
       * ```js
       * if (ruleStatus === cx.consts.RULE_CHANGE) {
       *   // 处理规则变更
       *   handleRuleChange();
       * }
       * ```
       */
      RULE_CHANGE: string;
  
      /**
       * 规则完成
       * @example
       * ```js
       * if (ruleStatus === cx.consts.RULE_FINISH) {
       *   // 处理规则完成
       *   handleRuleFinish();
       * }
       * ```
       */
      RULE_FINISH: string;
  
      /**
       * 规则初始化
       * @example
       * ```js
       * if (ruleStatus === cx.consts.RULE_INIT) {
       *   // 初始化规则
       *   initRule();
       * }
       * ```
       */
      RULE_INIT: string;
  
      /**
       * 新规则初始化
       * @example
       * ```js
       * if (type === cx.consts.RULE_INITNEW) {
       *   // 执行新规则初始化逻辑
       * }
       * ```
       */
      RULE_INITNEW: string;
  
      /**
       * 旧规则初始化
       * @example
       * ```js
       * if (type === cx.consts.RULE_INITOLD) {
       *   // 执行旧规则初始化逻辑
       * }
       * ```
       */
      RULE_INITOLD: string;
  
    /** 场景相关常量 */
      /**
       * 2D/3D混合场景
       * @example
       * ```js
       * if (sceneType === cx.consts.SCENE_23D) {
       *   // 初始化2D/3D混合渲染器
       *   init23DRenderer();
       * }
       * // 判断是否为混合场景
       * const isMixedScene = sceneType === cx.consts.SCENE_23D;
       * ```
       */
      SCENE_23D: string;
  
      /**
       * 2D场景
       * @example
       * ```js
       * if (sceneType === cx.consts.SCENE_2D) {
       *   // 初始化2D渲染器
       *   init2DRenderer();
       * }
       * // 判断是否为2D场景
       * const is2DScene = sceneType === cx.consts.SCENE_2D;
       * ```
       */
      SCENE_2D: string;
  
      /**
       * 3D场景
       * @example
       * ```js
       * if (sceneType === cx.consts.SCENE_3D) {
       *   // 初始化3D渲染器
       *   init3DRenderer();
       * }
       * // 判断是否为3D场景
       * const is3DScene = sceneType === cx.consts.SCENE_3D;
       * ```
       */
      SCENE_3D: string;
  
    /** 状态相关常量 */
      /**
       * 默认状态
       * @example
       * ```js
       * if (status === cx.consts.ST_DEFAULT) {
       *   // 处理默认状态
       *   handleDefaultStatus();
       * }
       * ```
       */
      ST_DEFAULT: string;
      ST_FAIL: string;
      ST_LOADING: string;
      ST_SUCCESS: string;
  
    /** 服务相关常量 */
      /**
       * AJAX服务类型
       * @example
       * ```js
       * if (serviceType === cx.consts.SERVICE_AJAX) {
       *   // 初始化AJAX服务
       *   initAjaxService();
       * }
       * // 判断是否为AJAX服务
       * const isAjaxService = serviceType === cx.consts.SERVICE_AJAX;
       * ```
       */
      SERVICE_AJAX: string;
  
      /**
       * 模拟数据服务类型
       * @example
       * ```js
       * if (serviceType === cx.consts.SERVICE_MOCK) {
       *   // 初始化模拟数据服务
       *   initMockService();
       * }
       * // 判断是否为模拟数据服务
       * const isMockService = serviceType === cx.consts.SERVICE_MOCK;
       * ```
       */
      SERVICE_MOCK: string;
  
      /**
       * WebSocket服务类型
       * @example
       * ```js
       * if (serviceType === cx.consts.SERVICE_SOCKET) {
       *   // 初始化WebSocket服务
       *   initWebSocketService();
       * }
       * // 判断是否为WebSocket服务
       * const isWebSocketService = serviceType === cx.consts.SERVICE_SOCKET;
       * ```
       */
      SERVICE_SOCKET: string;
  
    /** UI相关常量 */
      /**
       * 组件类型
       * @example
       * ```js
       * if (uiType === cx.consts.UI_COM) {
       *   // 显示组件
       *   showComponent();
       * }
       * // 判断是否为组件类型
       * const isComponent = type === cx.consts.UI_COM;
       * ```
       */
      UI_COM: string;
  
      /**
       * 对话框类型
       * @example
       * ```js
       * if (uiType === cx.consts.UI_DIALOG) {
       *   // 显示对话框
       *   showDialog();
       * }
       * // 判断是否为对话框类型
       * const isDialog = type === cx.consts.UI_DIALOG;
       * ```
       */
      UI_DIALOG: string;
  
      /**
       * 无UI类型
       * @example
       * ```js
       * if (uiType === cx.consts.UI_NONE) {
       *   // 不显示UI
       * }
       * // 判断是否显示UI
       * const shouldShowUI = type !== cx.consts.UI_NONE;
       * ```
       */
      UI_NONE: string;
  
      /**
       * 路由类型
       * @example
       * ```js
       * if (uiType === cx.consts.UI_ROUTE) {
       *   // 显示路由页面
       *   showRoutePage();
       * }
       * // 判断是否为路由类型
       * const isRoute = type === cx.consts.UI_ROUTE;
       * ```
       */
      UI_ROUTE: string;
  }
}
