import { WaterMarkConfig } from '../ExcelView/types';

export interface PptViewProps {
  /** 文件的url地址 */
  src: string;
  /** 水印设置相关参数 */
  waterMark?: WaterMarkConfig;
} 