import { AttDocument } from '../../../../../AttDocument';
import { PropDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class ButtonDocument extends AttDocument {
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
        name: 'icon',
        type: 'String',
        description: '图标样式',
        values: [],
        default: ''
      },
      {
        name: 'type',
        type: 'String',
        description: '类型（参见 el-button 的 type）',
        values: [],
        default: ''
      },
      {
        name: 'disabled',
        type: 'Boolean',
        description: '是否禁能',
        values: [],
        default: 'false'
      },
      {
        name: 'el-atts',
        type: 'Object',
        description: '传递给 el-button 的属性',
        values: [],
        default: '{}'
      }
    ];

    super(
      'cx-button',
      '按钮',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new ButtonDocument(); 