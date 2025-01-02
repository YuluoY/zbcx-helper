import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ProgressBatteryDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: 'UI规格',
        values: [],
        default: ''
      },
      {
        name: 'percentage',
        type: 'Number',
        description: '进度',
        values: [],
        default: ''
      },
      {
        name: 'strokeWidth',
        type: 'String',
        description: '进度条宽度（上下高度）',
        values: [],
        default: '24'
      },
      {
        name: 'width',
        type: 'String',
        description: '进度条宽度',
        values: [],
        default: '150'
      },
      {
        name: 'color',
        type: 'String',
        description: '色系',
        values: [],
        default: ''
      },
      {
        name: 'showText',
        type: 'Boolean',
        description: '是否显示进度条文字内容',
        values: [],
        default: 'true'
      },
      {
        name: 'textStyle',
        type: 'String',
        description: '文本样式',
        values: [],
        default: ''
      },
      {
        name: 'format',
        type: 'Function',
        description: '指定进度条文字内容 - Function(percentage)',
        values: [],
        default: ''
      }
    ];

    super(
      'cx-progress-battery',
      '进度条电池组件',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new ProgressBatteryDocument(); 