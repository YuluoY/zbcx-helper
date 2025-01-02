import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class FormGrpDocument extends AttDocument {
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
        name: 'flds',
        type: 'Array.<Fld>',
        description: '字段信息数组',
        values: [],
        default: ''
      },
      {
        name: 'col-num',
        type: 'Number',
        description: '列数量',
        values: ['1', '2', '3'],
        default: '1'
      },
      {
        name: 'mode',
        type: 'Number',
        description: '模式',
        values: ['0-浏览', '1-编辑', '2-编辑之后做对比'],
        default: '0'
      },
      {
        name: 'inline',
        type: 'Boolean',
        description: '行内表单模式',
        values: [],
        default: 'true'
      },
      {
        name: 'border-com',
        type: 'String',
        description: '边框组件',
        values: ['见Border相关组件'],
        default: 'cx-border-group'
      },
      {
        name: 'border',
        type: 'Object',
        description: '组件 Border 的参数（请参考具体的组件传递）',
        values: [],
        default: ''
      },
      {
        name: 'header-com',
        type: 'String',
        description: '头部组件',
        values: ['见Header相关组件'],
        default: 'cx-header-group'
      },
      {
        name: 'header',
        type: 'Object',
        description: '组件 Header 的参数（请参考具体的组件传递）',
        values: [],
        default: ''
      },
      {
        name: 'att-com',
        type: 'String',
        description: '内容组件(该功能使用参数传递存在问题，如有需要，请直接使用传递组件)',
        values: ['见Content具体组件'],
        default: 'cx-att-form'
      },
      {
        name: 'content',
        type: 'Object',
        description: '组件 content 的参数（请参考具体的组件传递）',
        values: [],
        default: ''
      },
      {
        name: 'before-valbtn',
        type: 'Function',
        description: 'ValButton 插件调用之前的回调函数 - function(fld, params)',
        values: [],
        default: ''
      },
      {
        name: 'after-valbtn',
        type: 'Function',
        description: 'ValButton 插件调用之后的回调函数 - function(fld, flds, params)',
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
      }
    ];

    super(
      'cx-form-grp',
      '分组表单',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new FormGrpDocument(); 