export interface ProcCommentData {
  /**
   * 办理详情信息，包含name（名称）、comment（意见）、task（工单环节）
   * @required
   */
  message: string;

  /**
   * 办理时间
   * @required
   */
  time: string;
}

export interface ProcCommentApply {
  /**
   * 发起人
   * @required
   */
  applyUser: string;

  /**
   * 发起时间
   * @required
   */
  applyTime: string;

  /**
   * 工单环节
   * @required
   */
  task: string;
}

export interface ProcCommentProps {
  /**
   * 尺寸
   * @default default
   */
  size?: 'large' | 'default' | 'small';

  /**
   * 传递给组件的参数
   * @required
   */
  data: ProcCommentData[];

  /**
   * 传递给组件的参数
   * @required
   */
  apply: ProcCommentApply;
} 