import { AttDocument } from '../../../../../AttDocument';
import { PropDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class BorderShapeDocument extends AttDocument {
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
        name: 'shape',
        type: 'Function',
        description: '绘制函数 - function(width, height, borderRadius, borderRounds)',
        values: [],
        default: ''
      },
      {
        name: 'border-radius',
        type: 'Number',
        description: '圆角半径',
        values: [],
        default: '8'
      },
      {
        name: 'border-rounds',
        type: 'Array.<Number>',
        description: '依次标识每个角是否圆角(顺序： 左上、右上、右下、左下)',
        values: ['0', '1'],
        default: '[0,0,0,0]'
      },
      {
        name: 'folded',
        type: 'Boolean',
        description: '是否折叠',
        values: [],
        default: 'false'
      },
      {
        name: 'border-style',
        type: 'String',
        description: '列数量',
        values: [],
        default: ''
      }
    ];

    super(
      'cx-border-shape',
      'Border-自定义形状',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new BorderShapeDocument(); 