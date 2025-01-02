/** HeaderGroup组件属性 */
export interface HeaderGroupProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 标题 */
  title?: string;
  /** 传递给 cx-header 组件的 v-bind 参数 */
  header?: Record<string, any>;
} 