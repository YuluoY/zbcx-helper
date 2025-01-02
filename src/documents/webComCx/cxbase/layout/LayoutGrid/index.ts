import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class LayoutGridDocument extends AttDocument {
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
        name: 'layout',
        type: 'Array',
        description: '栅格的初始布局',
        values: [],
        default: '[]'
      },
      {
        name: 'colNum',
        type: 'Number',
        description: '定义栅格系统的列数,其值需为自然数',
        values: [],
        default: '12'
      },
      {
        name: 'rowHeight',
        type: 'Number',
        description: '每行的高度，单位像素',
        values: [],
        default: '150'
      },
      {
        name: 'margin',
        type: 'Array',
        description: '定义栅格中的元素边距值。必须是包含两个 Number的数组，数组中第一个元素表示水平边距，第二个表示垂直边距，单位为像素',
        values: [],
        default: '[10, 10]'
      },
      {
        name: 'draggable',
        type: 'Boolean',
        description: '标识栅格中的元素是否可拖拽',
        values: [],
        default: 'false'
      },
      {
        name: 'resizable',
        type: 'Boolean',
        description: '标识栅格中的元素是否可调整大小',
        values: [],
        default: 'false'
      }
    ];

    super(
      'cx-layout-grid',
      '网格布局组件',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new LayoutGridDocument(); 