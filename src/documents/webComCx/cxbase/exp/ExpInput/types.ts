import { FldExpCfg } from '../AttExp/types';

export interface ExpInputProps {
  /** UI规格 */
  size?: 'large' | 'default' | 'small';
  /** 字段信息数组 */
  flds: FldExpCfg[];
  /** 输入框大小(像素为单位) */
  itemWidth?: number;
  /** 是否显示标签 */
  showLabel?: boolean;
  /** 是否显示more */
  showMore?: boolean;
  /** 是否可清除 */
  clearable?: boolean;
} 