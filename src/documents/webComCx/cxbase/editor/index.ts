import { AttDocument } from '../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../types/tag-doc';
import { snippets } from './snippets';

class EditorDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'value',
        type: 'String',
        description: '编辑器值',
        values: [],
        default: ''
      },
      {
        name: 'type',
        type: 'String',
        description: '编辑器类型',
        values: ['rich', 'markdown', 'simple'],
        default: 'rich'
      },
      {
        name: 'theme',
        type: 'String',
        description: '主题',
        values: ['light', 'dark'],
        default: 'light'
      },
      {
        name: 'lang',
        type: 'String',
        description: '语言',
        values: [],
        default: 'zh-CN'
      },
      {
        name: 'cfg',
        type: 'Object',
        description: '配置信息',
        values: [],
        default: '{}'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'change',
        description: '内容变化时触发',
        parameters: 'value: 编辑器当前值'
      },
      {
        name: 'focus',
        description: '获得焦点时触发',
        parameters: ''
      },
      {
        name: 'blur',
        description: '失去焦点时触发',
        parameters: ''
      }
    ];

    super(
      'cx-editor',
      '编辑器组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new EditorDocument(); 