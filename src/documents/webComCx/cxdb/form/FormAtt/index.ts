import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class FormAttDocument extends AttDocument {
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
        name: 'grps',
        type: 'Array.<Grp>',
        description: '分组信息数组',
        values: [],
        default: ''
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
        name: 'border-com',
        type: 'String',
        description: '边框组件名',
        values: [],
        default: 'cx-border-group'
      },
      {
        name: 'header-com',
        type: 'String',
        description: '头组件名',
        values: [],
        default: 'cx-header-group'
      },
      {
        name: 'att-com',
        type: 'String',
        description: '属性组件名',
        values: [],
        default: 'cx-att-form'
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
        parameters: '(fld, changed) => void',
        paramsDesc: 'fld 当前触发的字段对象， changed 字段值是否改变'
      }
    ];

    super(
      'cx-form-att',
      '属性表单',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new FormAttDocument(); 