/** 登录组件配置参数 */
export interface LoginConfig {
  /** 是否增加图形验证 */
  addVerify?: boolean;
  /** 手机号，邮箱等用户信息加密函数 */
  encodeUser?: (key: string) => string;
  /** 登录信息加密函数 */
  encodeLogin?: (key: string) => string;
  /** 登录信息解密函数 */
  decodeLogin?: (key: string) => string;
}

/** 登录类型参数 */
export interface LoginTypeParams {
  /** 是否添加忘记密码按钮 */
  addForget?: boolean;
}

/** 登录类型配置 */
export interface LoginType {
  /** 登录类型名称 */
  name: 'AccGraphic' | 'AccSlider' | 'PhoneNum';
  /** 登录类型标签 */
  label: string;
  /** 登录类型参数 */
  params?: LoginTypeParams;
}

/** 登录组件完整配置 */
export interface LoginProps {
  /** 配置参数 */
  config: LoginConfig;
  /** 登录类型列表 */
  types: LoginType[];
} 