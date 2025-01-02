/** CmdOkCancel组件属性 */
export interface CmdOkCancelProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 是否禁止 - Ok 按钮 */
  disabledOk?: boolean;
  /** 是否禁止 - Cancel 按钮 */
  disabledCancel?: boolean;
} 