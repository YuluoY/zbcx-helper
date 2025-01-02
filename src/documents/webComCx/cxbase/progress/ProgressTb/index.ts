import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ProgressTbDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: '尺寸',
        values: [],
        default: ''
      },
      {
        name: 'color',
        type: 'String',
        description: '色系',
        values: [],
        default: ''
      },
      {
        name: 'position',
        type: 'String',
        description: '位置',
        values: ['top', 'overlap', 'bottom'],
        default: 'overlap'
      },
      {
        name: 'percentage',
        type: 'String',
        description: '进度',
        values: [],
        default: ''
      },
      {
        name: 'strokeWidth',
        type: ['String', 'Number'],
        description: '进度条宽度（上下高度）',
        values: [],
        default: '6'
      },
      {
        name: 'bgWidth',
        type: ['String', 'Number'],
        description: '进度条背景宽度（上下高度）',
        values: [],
        default: '6'
      },
      {
        name: 'width',
        type: ['String', 'Number'],
        description: '进度条宽度',
        values: [],
        default: '150'
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
        type: ['String', 'Object'],
        description: '文本样式',
        values: [],
        default: ''
      },
      {
        name: 'format',
        type: 'Function',
        description: '指定进度条文字内容',
        values: [],
        default: ''
      }
    ];

    super(
      'cx-progress-tb',
      '百分比进度条组件',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new ProgressTbDocument(); 