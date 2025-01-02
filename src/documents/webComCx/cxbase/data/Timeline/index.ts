import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class TimelineDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'data',
        type: 'Array.<ComItem>',
        description: '数据列表',
        values: [],
        default: '[]'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'click-item',
        description: '点击时间线响应',
        parameters: '(ComItem)'
      }
    ];

    super(
      'cx-timeline',
      '时间线组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new TimelineDocument(); 