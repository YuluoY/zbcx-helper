export interface ItemProps {
  /** 名称 */
  name: string;
  /** 图标地址 */
  imgSrc: string;
  /** 内容值是否不为空 */
  value: boolean;
  /** 内容值，用于展示使用 */
  valueShow: string;
}

export interface BindCardProps {
  /** 账户安全数组子项 */
  item: ItemProps;
} 