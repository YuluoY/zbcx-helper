import { AttDocument } from '../../../../AttDocument';
import { PropDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ProgressStepDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'title',
        type: 'String',
        description: '标题文本',
        values: [],
        default: ''
      },
      {
        name: 'titleStyle',
        type: 'String',
        description: '标题文本样式',
        values: [],
        default: ''
      },
      {
        name: 'icon',
        type: 'String',
        description: '图标类名（使用我们自己图标库中的图标名）',
        values: [],
        default: ''
      },
      {
        name: 'iconStyle',
        type: 'String',
        description: '图标样式',
        values: [],
        default: ''
      },
      {
        name: 'dividerTitle',
        type: 'String',
        description: '分割线上的文本',
        values: [],
        default: ''
      },
      {
        name: 'dividerTitleStyle',
        type: 'String',
        description: '分隔线上文本样式',
        values: [],
        default: ''
      },
      {
        name: 'showLine',
        type: 'Boolean',
        description: '是否显示分割线',
        values: [],
        default: ''
      },
      {
        name: 'mainColor',
        type: 'String',
        description: '主题色，会应用到头部标题、图标、底部标题、分割线文本',
        values: [],
        default: ''
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'top',
        description: '头部插槽'
      },
      {
        name: 'icon',
        description: '图标位置插槽'
      },
      {
        name: 'dividertitle',
        description: '分割线文本插槽'
      },
      {
        name: 'title',
        description: '底部标题插槽'
      }
    ];

    super(
      'cx-progress-step',
      '流程步骤进度组件',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new ProgressStepDocument(); 