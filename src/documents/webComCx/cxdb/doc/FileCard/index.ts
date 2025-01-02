import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class FileCardDocument extends AttDocument {
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
        description: '文件信息（文件系统）',
        values: [],
        default: ''
      },
      {
        name: 'opers',
        type: 'Array.<OperItem>',
        description: '操作数组（参见 cx-oper-item）',
        values: [],
        default: ''
      },
      {
        name: 'oper-cfg',
        type: 'OperCfg',
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

    const events = [
      {
        name: 'row-click',
        description: '点击',
        parameters: '(args: any) => void',
        paramsDesc: '操作配置, 传递给该组件的参数'
      },
      {
        name: 'plugin-click',
        description: '点击操作',
        parameters: '(oper: any, args: any) => void',
        paramsDesc: '操作配置, 传递给该组件的参数'
      },
      {
        name: 'check-change',
        description: '点击复选框',
        parameters: '(args: any, checked: boolean) => void',
        paramsDesc: '传递给该组件的参数, 是否选中'
      }
    ];

    const slots = [
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
      'cx-file-card',
      '文件卡片',
      props,
      events,
      [], // 无方法
      __filename,
      slots
    );
  }
}

export default new FileCardDocument(); 