import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DocCardDocument extends AttDocument {
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
        description: '文件信息（cx_media）',
        values: [],
        default: ''
      },
      {
        name: 'opers',
        type: 'Array',
        description: '操作数组（参见 cx-oper-item）',
        values: [],
        default: ''
      },
      {
        name: 'oper-cfg',
        type: 'Object',
        description: '操作项设置',
        values: [],
        default: ''
      },
      {
        name: 'multiple',
        type: 'Boolean',
        description: '是否支持多选',
        values: [],
        default: 'false'
      },
      {
        name: 'plugin-state',
        type: 'Function',
        description: '计算插件的状态(visible,disabled)',
        values: [],
        default: ''
      },
      {
        name: 'before-visible',
        type: 'Function',
        description: '下拉菜单展开之前的操作',
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
        name: 'row-click',
        description: '点击',
        parameters: '(args) 操作配置, 传递给该组件的参数'
      },
      {
        name: 'plugin-click',
        description: '点击操作',
        parameters: '(oper, args) 操作配置, 传递给该组件的参数'
      },
      {
        name: 'check-change',
        description: '点击复选框',
        parameters: '(args, checked) 传递给该组件的参数, 是否选中'
      },
      {
        name: 'row-remove',
        description: '删除某行（UI层删除）',
        parameters: '(selected) 当前选择项'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'info',
        description: '文档信息'
      },
      {
        name: 'cmdbar',
        description: '命令条'
      }
    ];

    super(
      'cx-doc-card',
      '文档卡片组件',
      props,
      events,
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new DocCardDocument(); 