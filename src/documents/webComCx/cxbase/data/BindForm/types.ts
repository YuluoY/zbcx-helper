export interface BindAtt {
  /** 是否是绑定模式 */
  isbind: boolean;
  /** 绑定名称 */
  name: string;
  /** 用户信息 */
  info: object;
}

export interface BindFormProps {
  /** 尺寸 */
  type: number;
  /** 绑定参数 */
  bindAtt: BindAtt;
  /** 发送验证码函数 */
  sendCode: (form: any) => Promise<any>;
  /** 获取规则校验函数 */
  getRules: () => any;
} 