import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DocListCardDocument extends AttDocument {
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
        name: 'files',
        type: 'Array',
        description: '文件信息列表（cx_media）',
        values: [],
        default: ''
      },
      {
        name: 'plugs',
        type: 'String',
        description: '配置插件名（cx_cmdtool 的 node）,多个用逗号分隔',
        values: [],
        default: 'DocFile'
      },
      {
        name: 'multiple',
        type: 'Boolean',
        description: '是否多选模式',
        values: [],
        default: 'false'
      },
      {
        name: 'auth',
        type: 'Object',
        description: '授权信息',
        values: [],
        default: ''
      },
      {
        name: 'exp-values',
        type: 'Object',
        description: '条件计算对象',
        values: [],
        default: 'cx.dc.DcDocFileValues'
      },
      {
        name: 'card-com',
        type: 'String',
        description: '文档卡片组件名',
        values: [],
        default: 'cx-doc-card'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'row-click',
        description: '点击',
        parameters: '(selected) 当前选择项'
      },
      {
        name: 'selection-change',
        description: '多选发生变化',
        parameters: '(selection) 多选数组'
      },
      {
        name: 'row-remove',
        description: '删除某行（UI层删除）',
        parameters: '(selected) 当前选择项'
      }
    ];

    super(
      'cx-doc-list-card',
      '文档卡片列表组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new DocListCardDocument(); 