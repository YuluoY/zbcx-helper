/** HeaderAttgrp组件属性 */
export interface HeaderAttgrpProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 标题 */
  title?: string;
  /** 是否可编辑 */
  editable?: boolean;
  /** 展现模式 */
  mode?: 0 | 1;
  /** 是否改变 */
  changed?: boolean;
  /** 传递给 Header 组件的 v-bind 参数 */
  header?: Record<string, any>;
} 