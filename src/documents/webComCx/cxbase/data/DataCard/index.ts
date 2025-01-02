import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DataCardDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'label',
        type: 'String',
        description: '卡片标题',
        values: [],
        default: ''
      },
      {
        name: 'value',
        type: 'String',
        description: '卡片数值',
        values: [],
        default: ''
      },
      {
        name: 'unit',
        type: 'String',
        description: '卡片数值的单位',
        values: [],
        default: ''
      },
      {
        name: 'cardStyle',
        type: 'Object',
        description: '卡片样式',
        values: [],
        default: '{}'
      },
      {
        name: 'titleStyle',
        type: 'Object',
        description: '标题样式',
        values: [],
        default: '{}'
      },
      {
        name: 'valueStyle',
        type: 'Object',
        description: '数值样式',
        values: [],
        default: '{}'
      },
      {
        name: 'iconStyle',
        type: 'Object',
        description: '图标图片样式',
        values: [],
        default: '{}'
      },
      {
        name: 'unitStyle',
        type: 'Object',
        description: '卡片数值的单位样式',
        values: [],
        default: '{}'
      }
    ];

    const slots = [
      {
        name: 'unit',
        description: '单位插槽，默认使用传入的单位字符串'
      },
      {
        name: 'icon',
        description: '图标插槽，默认使用传入的图标串'
      },
      {
        name: 'footer',
        description: '底部插槽，默认使用传入的字符串'
      }
    ];

    super(
      'cx-data-card',
      '数据卡片组件',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new DataCardDocument(); 