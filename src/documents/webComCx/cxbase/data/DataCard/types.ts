export interface DataCardProps {
  /** 卡片标题 */
  label: string;
  /** 卡片数值 */
  value: string;
  /** 卡片数值的单位 */
  unit: string;
  /** 卡片样式 */
  cardStyle?: object;
  /** 标题样式 */
  titleStyle?: object;
  /** 数值样式 */
  valueStyle?: object;
  /** 图标图片样式 */
  iconStyle?: object;
  /** 卡片数值的单位样式 */
  unitStyle?: object;
} 