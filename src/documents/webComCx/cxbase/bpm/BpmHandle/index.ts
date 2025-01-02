import { AttDocument, MethodDoc } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

export class BpmHandleDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: '尺寸',
        values: ['large', 'default', 'small'],
        default: 'default'
      }
    ];

    const events: EventDoc[] = [];

    const slots: SlotDoc[] = [];

    const methods: MethodDoc[] = [];

    super(
      'cx-bpm-handle',
      'BPM处理组件',
      props,
      events,
      methods,
      __filename,
      slots
    );
  }
} 