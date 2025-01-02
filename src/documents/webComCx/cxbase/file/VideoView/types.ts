import { WaterMarkConfig } from '../ExcelView/types';

export interface VideoViewProps {
  /** 文件的url地址 */
  src: string;
  /** 指定视频文件类型 */
  type?: string;
  /** 是否需要默认开始播放 */
  defPlay?: boolean;
  /** 水印设置相关参数 */
  waterMark?: WaterMarkConfig;
} 