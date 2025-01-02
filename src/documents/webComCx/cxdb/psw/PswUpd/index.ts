import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class PswUpdDocument extends AttDocument {
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
        name: 'rules',
        type: 'String',
        description: '密码规则',
        values: [],
        default: ''
      },
      {
        name: 'type',
        type: 'String',
        description: '密码显示方式',
        values: [],
        default: 'password'
      },
      {
        name: 'highLevel',
        type: 'Boolean',
        description: '高级',
        values: [],
        default: ''
      },
      {
        name: 'encode',
        type: 'Function',
        description: '密码加密函数',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'onChange',
        description: '当前选择发生变化',
        parameters: '(value) value数据项'
      },
      {
        name: 'onEnterKey',
        description: '按下回车键',
        parameters: '(input) input数据项'
      },
      {
        name: 'click',
        description: '点击密码图标',
        parameters: '切换密码显示/隐藏'
      },
      {
        name: 'onOk',
        description: '点击确定按钮，修改密码',
        parameters: ''
      }
    ];

    super(
      'cx-psw-upd',
      '修改密码',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new PswUpdDocument(); 