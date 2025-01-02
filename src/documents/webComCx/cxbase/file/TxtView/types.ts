import { WaterMarkConfig } from '../ExcelView/types';

export interface TxtViewProps {
  /** 文件的url地址 */
  src: string;
  /** 指定文件内容的编码方式 */
  charset?: string;
  /** 水印设置相关参数 */
  waterMark?: WaterMarkConfig;
} 