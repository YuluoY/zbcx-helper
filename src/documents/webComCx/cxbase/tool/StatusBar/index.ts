import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class StatusBarDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'status',
        type: 'Array.StatusCfg',
        description: '状态栏显示内容,每个数据组是一组状态',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'click-status',
        description: '点击每项状态的事件',
        parameters: 'state: 状态数据对象'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'prefix',
        description: '前缀插槽'
      },
      {
        name: 'suffix',
        description: '后缀插槽'
      }
    ];

    super(
      'cx-status-bar',
      '状态栏',
      props,
      events,
      [],
      __filename,
      slots
    );
  }
}

export default new StatusBarDocument(); 