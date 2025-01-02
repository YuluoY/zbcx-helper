import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ProcCommentDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: '尺寸',
        values: ['large', 'default', 'small'],
        default: 'default'
      },
      {
        name: 'data',
        type: 'Object<data>',
        description: '传递给组件的参数',
        values: [],
        default: ''
      },
      {
        name: 'data.message',
        type: 'String',
        description: '办理详情信息，包含name（名称）、comment（意见）、task（工单环节）',
        values: [],
        default: ''
      },
      {
        name: 'data.time',
        type: 'datetime',
        description: '办理时间',
        values: [],
        default: ''
      },
      {
        name: 'apply',
        type: 'Object<apply>',
        description: '传递给组件的参数',
        values: [],
        default: ''
      },
      {
        name: 'apply.applyUser',
        type: 'String',
        description: '发起人',
        values: [],
        default: ''
      },
      {
        name: 'apply.applyTime',
        type: 'datetime',
        description: '发起时间',
        values: [],
        default: ''
      },
      {
        name: 'apply.task',
        type: 'String',
        description: '工单环节',
        values: [],
        default: ''
      }
    ];

    super(
      'cx-proc-comment',
      '审核意见',
      props,
      [], // 无事件
      [], // 无方法
      __filename
    );
  }
}

export default new ProcCommentDocument(); 