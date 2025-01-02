/** 方式一参数 */
export interface FormInputParamsOne {
  /** 表单配置命名 */
  formKey: string;
  /** 运行插件的参数（参见函数: runFormPlug） */
  params: {
    /** 默认属性设置,会合并到attr.att中 */
    values?: Record<string, any>;
  };
}

/** 方式二参数 */
export interface FormInputParamsTwo {
  /** 运行插件的参数（参见函数: runFormPlug） */
  params: {
    /** 默认属性设置,会合并到attr.att中 */
    att?: Record<string, any>;
  };
  /** 实体主类型 */
  major: number;
  /** 实体子类型 */
  minor: number;
}

/** 公共参数 */
export interface CommonParams {
  /** 是否需要关联附件功能（具体附件和上传参数配置attach和upload） */
  useAttach?: boolean;
  /** 参照 cx-form-dyna */
  attr?: Record<string, any>;
  /** 参照 cx-form-dyna */
  attach?: Record<string, any>;
  /** 参照 cx-form-dyna */
  upload?: Record<string, any>;
  /** 参照 cx-form-dyna */
  doc?: Record<string, any>;
  /** 参照 cx-form-dyna */
  params?: Record<string, any>;
}

/** 录入表单组件Props */
export type FormInputProps = (FormInputParamsOne | FormInputParamsTwo) & CommonParams; 