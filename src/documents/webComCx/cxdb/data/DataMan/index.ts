import { AttDocument } from '../../../../AttDocument';
import { PropDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DataManDocument extends AttDocument {
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
        name: 'params',
        type: 'Object',
        description: '传递给组件的参数',
        values: [],
        default: '{}'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'exp-preappend',
        description: '筛选框前插槽'
      },
      {
        name: 'exp-append',
        description: '筛选框后插槽'
      },
      {
        name: 'page-append',
        description: '分页后插槽'
      }
    ];

    super(
      'cx-data-man',
      '数据管理组件',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new DataManDocument(); 