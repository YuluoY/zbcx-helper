import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class AttEditGrpDocument extends AttDocument {
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
        name: 'title',
        type: 'String',
        description: '标题',
        values: [],
        default: ''
      },
      {
        name: 'params',
        type: 'Object',
        description: '传递给组件的参数',
        values: [],
        default: '{}'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'fld-change',
        description: '字段值发生变化',
        parameters: '(fld, changed)'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'header-preappend',
        description: '标题之前'
      },
      {
        name: 'header-append',
        description: '标题之后'
      },
      {
        name: 'header-title',
        description: '标题附加'
      }
    ];

    super(
      'cx-att-edit-grp',
      '属性分组编辑组件',
      props,
      events,
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new AttEditGrpDocument(); 