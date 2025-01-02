import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class BreadCrumbDocument extends AttDocument {
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
        name: 'separator',
        type: 'String',
        description: '分隔符',
        values: [],
        default: ''
      },
      {
        name: 'separator-icon',
        type: 'String / Component',
        description: '图标分隔符的组件或组件名',
        values: [],
        default: ''
      },
      {
        name: 'lists',
        type: 'Array',
        description: '面包屑对象列表',
        values: [],
        default: '[]'
      }
    ];

    super(
      'cx-bread-crumb',
      '面包屑组件',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new BreadCrumbDocument(); 