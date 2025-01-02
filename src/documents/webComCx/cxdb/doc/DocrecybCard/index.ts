import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DocrecybCardDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: '尺寸',
        values: ['small', 'default', 'large'],
        default: 'default'
      },
      {
        name: 'file',
        type: 'Object',
        description: 'cx_docrecyb',
        values: [],
        default: ''
      },
      {
        name: 'border-com',
        type: 'String',
        description: '边框组件名（边框和底纹）',
        values: [],
        default: 'cx-border-regular'
      },
      {
        name: 'border',
        type: 'Object',
        description: '边框样式',
        values: [],
        default: ''
      },
      {
        name: 'content',
        type: 'Object',
        description: '内容区样式',
        values: [],
        default: ''
      },
      {
        name: 'info',
        type: 'Object',
        description: '信息区样式',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'row-remove',
        description: '删除某行（UI层删除）',
        parameters: '(selected) 当前选择项'
      }
    ];

    super(
      'cx-docrecyb-card',
      '文档回收站卡片组件',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new DocrecybCardDocument(); 