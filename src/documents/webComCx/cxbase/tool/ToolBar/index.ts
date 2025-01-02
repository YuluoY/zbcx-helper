import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ToolBarDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'tools',
        type: 'Array',
        description: '工具菜单组序列，即为二维数组。每个组由ToolConf对象序列组成',
        values: [],
        default: ''
      },
      {
        name: 'mode',
        type: 'String',
        description: '展示模式',
        values: ['horizontal', 'vertical'],
        default: 'horizontal'
      },
      {
        name: 'startHem',
        type: 'String',
        description: '工具条起始边缘，mode方向与父容器的贴边位置',
        values: ['left', 'right', 'top', 'bottom'],
        default: 'right'
      },
      {
        name: 'subToolMode',
        type: 'String',
        description: '子工具条展示模式',
        values: ['horizontal', 'vertical'],
        default: 'horizontal'
      },
      {
        name: 'subToolPlace',
        type: 'String',
        description: '子工具条显示位置',
        values: ['top', 'bottom', 'left', 'right'],
        default: 'bottom'
      },
      {
        name: 'isCloseByFold',
        type: 'Boolean',
        description: '点击父亲节点关闭子节点',
        values: [],
        default: 'false'
      },
      {
        name: 'isAutoFold',
        type: 'Boolean',
        description: '点击完自动折叠隐藏子节点',
        values: [],
        default: 'false'
      },
      {
        name: 'showTip',
        type: 'Boolean',
        description: '按钮是否显示tip，false按钮有文字且没tip; true按钮无文字有tip',
        values: [],
        default: 'false'
      },
      {
        name: 'elTooltip',
        type: 'Object',
        description: 'el中tooltip配置对象，默认使用cx.config.tooltip',
        values: [],
        default: ''
      },
      {
        name: 'textInline',
        type: 'Boolean',
        description: '文字在图标右侧同行显示，false时在图标下发显示',
        values: [],
        default: 'true'
      },
      {
        name: 'toolWidth',
        type: 'Number',
        description: '按钮宽度，单位px，默认内容自适应',
        values: [],
        default: ''
      },
      {
        name: 'toolHeight',
        type: 'Number',
        description: '按钮高度，单位px，默认内容自适应',
        values: [],
        default: ''
      },
      {
        name: 'fontSize',
        type: 'String',
        description: '文字大小',
        values: [],
        default: '.14rem'
      },
      {
        name: 'iconSize',
        type: 'String',
        description: '图标大小',
        values: [],
        default: '.16rem'
      },
      {
        name: 'grpGap',
        type: 'String',
        description: '组之间的间距',
        values: [],
        default: '.08rem'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'tool-click',
        description: '点击工具按钮事件，工具按钮有plugin时先触发tool-active事件，再次点击已激活工具先触发tool-inactive事件',
        parameters: '{ tool, pTool, oldTool } - tool是目标工具对象，pTool是父工具，oldTool是切换前的工具对象'
      },
      {
        name: 'tool-active',
        description: '工具按钮激活的事件',
        parameters: '{ tool, pTool, oldTool } - tool是目标工具对象，pTool是父工具，oldTool是切换前的工具对象'
      },
      {
        name: 'tool-inactive',
        description: '工具按钮取消激活事件',
        parameters: '{ tool, pTool, oldTool } - tool是目标工具对象，pTool是父工具，oldTool是切换前的工具对象'
      }
    ];

    super(
      'cx-tool-bar',
      '工具条',
      props,
      events,
      [],
      __filename
    );
  }
}

export default new ToolBarDocument(); 