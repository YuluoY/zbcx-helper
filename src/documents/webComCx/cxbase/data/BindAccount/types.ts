export interface BindVal {
  /** 绑定名称 */
  name: string;
  /** cx_user用户表绑定字段名称 */
  colname: 'qq' | 'email' | string;
  /** 绑定图片路径 */
  imgSrc: string;
  /** cx_user用户表的绑定的字段名对应的字段值 */
  value: string;
  /** 页面显示的值 */
  valueShow: string;
  /** cx_user用户表表数据 */
  userobj: object;
}

export interface BindAccountProps {
  /** 绑定参数 */
  bindVals: BindVal[];
} 