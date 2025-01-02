import { AttDocument, MethodDoc } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

export class ExpMoreDocument extends AttDocument {
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
        name: 'Fld',
        type: 'Array',
        description: '字段信息数组'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'values-change',
        description: '字段值发生变化',
        parameters: 'fld: Fld, changed: boolean'
      }
    ];

    const slots: SlotDoc[] = [];

    const methods: MethodDoc[] = [];

    super(
      'cx-exp-more',
      '展开更多组件',
      props,
      events,
      methods,
      __filename,
      slots
    );
  }
} 