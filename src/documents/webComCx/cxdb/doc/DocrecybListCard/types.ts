/** 文档回收站卡片列表组件Props */
export interface DocrecybListCardProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 文件信息列表（cx_docrecyb） */
  files?: Array<any>;
  /** 文档卡片组件名 */
  cardCom?: string;
} 