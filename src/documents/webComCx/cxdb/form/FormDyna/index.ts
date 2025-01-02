import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class FormDynaDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'attr',
        type: 'Object.<attr>',
        description: '属性设置',
        values: [],
        default: ''
      },
      {
        name: 'attach',
        type: 'Object.<attach>',
        description: '附件设置',
        values: [],
        default: ''
      },
      {
        name: 'upload',
        type: 'Object.<upload>',
        description: '上载设置',
        values: [],
        default: ''
      },
      {
        name: 'doc',
        type: 'Object.<doc>',
        description: '文件列表配置',
        values: [],
        default: ''
      },
      {
        name: 'params',
        type: 'Object.<params>',
        description: '其他参数',
        values: [],
        default: ''
      },
      {
        name: 'cmdbar',
        type: 'Boolean',
        description: '命令行',
        values: [],
        default: ''
      }
    ];

    const events = [
      {
        name: 'values-change',
        description: '字段值发生变化',
        parameters: '(fld, changed)',
        paramsDesc: 'fld 当前触发的字段对象， changed 字段值是否改变'
      },
      {
        name: 'doc-add',
        description: '添加附件',
        parameters: '(doc)',
        paramsDesc: 'doc 附件信息'
      },
      {
        name: 'doc-remove',
        description: '移除附件',
        parameters: '(doc)',
        paramsDesc: 'doc 附件信息'
      }
    ];

    super(
      'cx-form-dyna',
      '动态表单',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new FormDynaDocument(); 