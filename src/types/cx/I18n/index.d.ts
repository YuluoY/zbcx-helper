declare namespace cx {
  interface LocalizationConfig {
    loc?: string;
    defval?: string;
  }

  interface AttributeObject {
    [key: string]: any;
  }
  /**
   * 国际化工具类，提供多语言支持功能
   */
  class i18n {

    /**
     * 静态方法，用于获取默认的 entity 本地化信息
     * @param minor 子类型
     * @returns 本地化信息需要的实体信息
     * @description 取默认的 entity 本地化信息
     */
    static getDefLoc(minor: number): object;

    /**
     * 静态方法，用于获取词表字符串
     * @param key 字符串key
     * @param defVal 默认值
     * @param argvs 变参，要被替换的目标字符串
     * @returns 词表字符串
     * @description 取词表，如 cx.base.loc('cx.base.add')。用于获取多语言词条，支持变量替换
     */
    static loc(key: string, defVal: string, ...argvs: any[]): string;

    /**
     * 静态方法，用于根据主类型/子类型/属性获取系统表的词条
     * @param major 主类型
     * @param minor 子类型
     * @param att 属性
     * @returns 词表字���串
     * @description 根据主类型/子类型/属性取系统表的词条。用于获取系统表中特定属性的多语言翻译
     */
    static locAtt(major: number, minor: number, att: AttributeObject): string;

    /**
     * 静态方法，用于获取 cx.base.* 字词表符串
     * @param key 字符串key
     * @param defVal 默认值
     * @param argvs 变参
     * @description 取 cx.base.* 字词表符串。用于获取基础模块的多语言词条
     */
    static locBase(key: string, defVal: string, ...argvs: any[]): string;

    /**
     * 静态方法，用于根据词条配置串获取多语言词条
     * @param locCfg 词条配置
     * @param att 属性
     * @returns 词表字符串
     * @description 根据词条配置串取多语言词条。支持通过配置获取复杂的多语言词条
     */
    static locCfg(locCfg: LocalizationConfig, att: AttributeObject): string;

    /**
     * 静态方法，用于获取系统表 entity 属性的词条
     * @param major 主类型
     * @param minor 子类型
     * @param att 属性
     * @returns 词表字符串
     * @description 取系统表 entity 属性的词条。用于获取实体相关的多语言翻译
     */
    static locEntity(major: number, minor: number, att: AttributeObject): string;

    /**
     * 静态方法，用于获取系统表 fld 属性的词条
     * @param major 主类型
     * @param minor 子类型
     * @param att 属性
     * @returns 词表字符串
     * @description 取系统表 fld 属性的词条。用于获取字段相关的多语言翻译
     */
    static locFld(major: number, minor: number, att: AttributeObject): string;

    /**
     * 静态方法，用于获取系统表字段值的词条
     * @param major 主类型
     * @param minor 子类型
     * @param att 属性
     * @returns 词表字符串
     * @description 取系统表字段值的词条。用于获取字段值的多语言翻译，通常用于枚举值或选项值的翻译
     */
    static locFldvalue(major: number, minor: number, att: AttributeObject): string;

    /**
     * 静态方法，用于获取系统表函数的词条
     * @param major 主类型
     * @param minor 子类型
     * @param att 属性
     * @returns 词表字符串
     * @description 取系统表函数的词条。用于获取系统函数相关的多语言翻译
     */
    static locFunc(major: number, minor: number, att: AttributeObject): string;

    /**
     * 静态方法，用于获取系统表组织机构的词条
     * @param major 主类型
     * @param minor 子类型
     * @param att 属性
     * @returns 词表字符串
     * @description 取系统表组织机构的词条。用于获取组织机构相关的多语言翻译
     */
    static locOrgan(major: number, minor: number, att: AttributeObject): string;

    /**
     * 静态方法，用于获取系统表插件的词条
     * @param major 主类型
     * @param minor 子类型
     * @param att 属性
     * @returns 词表字符串
     * @description 取系统表插件的词条。用于获取插件相关的多语言翻译，包括插件名称、描述等信息
     */
    static locPlugin(major: number, minor: number, att: AttributeObject): string;

    /**
     * 静态方法，用于获取 cx.proc.* 字词表符串
     * @param key 字符串key
     * @param defVal 默认值
     * @param argvs 变参，要被替换的目标字符串
     * @returns 词表字符串
     * @description 取 cx.proc.* 字词表符串。用于获取流程相关的多语言词条，支持变量替换
     */
    static locProc(key: string, defVal: string, ...argvs: any[]): string;

    /**
     * 静态方法，用于获取系统表流程组的词条
     * @param major 主类型
     * @param minor 子类型
     * @param att 属性
     * @returns 词表字符串
     * @description 取系统表流程组的词条。用于获取流程组相关的多语言翻译，包括流程组名称、描述等信息
     */
    static locProcgrp(major: number, minor: number, att: AttributeObject): string;

    /**
     * 静态方法，用于获取系统表流程的词条
     * @param major 主类型
     * @param minor 子类型
     * @param att 属性
     * @returns 词表字符串
     * @description 取系统表流程的词条。用于获取流程相关的多语言翻译，包括流程名称、状态、描述等信息
     */
    static locProcs(major: number, minor: number, att: AttributeObject): string;

    /**
     * 静态方法，用于获取系统表 sysdef 属性的词条
     * @param major 主类型
     * @param minor 子类型
     * @param att 属性
     * @returns 词表字符串
     * @description 取系统表 sysdef 属性的词条。用于获取系统定义相关的多语言翻译，包括系统配置项、参数等信息
     */
    static locSysdef(major: number, minor: number, att: AttributeObject): string;
  }
} 