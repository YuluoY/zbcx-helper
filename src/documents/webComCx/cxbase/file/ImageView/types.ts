import { WaterMarkConfig } from '../ExcelView/types';

export interface ImageViewProps {
  /** 文件的url地址 */
  src: string;
  /** 水印设置相关参数 */
  waterMark?: WaterMarkConfig;
  /** 文件预览的src集合，会绑定到preview-src-list属性上 */
  srcList?: string[];
  /** el-image组件可接收的参数对象 */
  elAttrs?: Record<string, any>;
  /** el-image组件可接收的事件注册对象 */
  elListeners?: Record<string, any>;
} 