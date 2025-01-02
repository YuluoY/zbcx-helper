import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class GridPageDocument extends AttDocument {
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
        name: 'page',
        type: 'GridPageCfg',
        description: '数据传递',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'pagesize-change',
        description: '每页数据量发生变化',
        parameters: '(pageSize) - pageSize 每页显示数据量'
      },
      {
        name: 'current-change',
        description: '当前页发生变化',
        parameters: '(currentPage) - currentPage 当前页码'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'default',
        description: '内容部分',
        props: []
      }
    ];

    super(
      'cx-grid-page',
      '网格分页',
      props,
      events,
      [],
      __filename,
      slots
    );
  }
}

export default new GridPageDocument(); 