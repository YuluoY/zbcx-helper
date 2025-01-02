import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class FormInputDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'formKey',
        type: 'String',
        description: '表单配置命名',
        values: [],
        default: ''
      },
      {
        name: 'params',
        type: 'Object',
        description: '运行插件的参数（参见函数: runFormPlug）',
        values: [],
        default: ''
      },
      {
        name: 'params.values',
        type: 'Object',
        description: '默认属性设置,会合并到attr.att中',
        values: [],
        default: ''
      },
      {
        name: 'major',
        type: 'Number',
        description: '实体主类型',
        values: [],
        default: ''
      },
      {
        name: 'minor',
        type: 'Number',
        description: '实体子类型',
        values: [],
        default: ''
      },
      {
        name: 'params.att',
        type: 'Object',
        description: '默认属性设置,会合并到attr.att中',
        values: [],
        default: ''
      },
      {
        name: 'useAttach',
        type: 'Boolean',
        description: '是否需要关联附件功能（具体附件和上传参数配置attach和upload）',
        values: [],
        default: ''
      },
      {
        name: 'attr',
        type: 'Object',
        description: '参照 cx-form-dyna',
        values: [],
        default: ''
      },
      {
        name: 'attach',
        type: 'Object',
        description: '参照 cx-form-dyna',
        values: [],
        default: ''
      },
      {
        name: 'upload',
        type: 'Object',
        description: '参照 cx-form-dyna',
        values: [],
        default: ''
      },
      {
        name: 'doc',
        type: 'Object',
        description: '参照 cx-form-dyna',
        values: [],
        default: ''
      },
      {
        name: 'params',
        type: 'Object',
        description: '参照 cx-form-dyna',
        values: [],
        default: ''
      }
    ];

    super(
      'cx-form-input',
      '录入表单',
      props,
      [], // 无事件
      [], // 无方法
      __filename
    );
  }
}

export default new FormInputDocument(); 