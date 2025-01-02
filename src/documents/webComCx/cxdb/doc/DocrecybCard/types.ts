/** 文档回收站卡片组件Props */
export interface DocrecybCardProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** cx_docrecyb */
  file?: object;
  /** 边框组件名（边框和底纹） */
  borderCom?: string;
  /** 边框样式 */
  border?: object;
  /** 内容区样式 */
  content?: object;
  /** 信息区样式 */
  info?: object;
} 