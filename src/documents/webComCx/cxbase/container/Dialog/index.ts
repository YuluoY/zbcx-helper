import { AttDocument, MethodDoc } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DialogDocument extends AttDocument {
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
        name: 'dlg',
        type: 'dlgCfg',
        description: '对话框参数'
      },
      {
        name: 'active',
        type: 'Boolean',
        description: '当前激活',
        default: 'false'
      },
      {
        name: 'border',
        type: 'Object',
        description: '组件 Border 的参数（请参考具体的组件传递）'
      },
      {
        name: 'header',
        type: 'Object',
        description: '组件 Header 的参数（请参考具体的组件传递）'
      },
      {
        name: 'content',
        type: 'Object',
        description: '组件 Content 的参数（请参考具体的组件传递）'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'min-change',
        description: '最小化状态发生变化',
        parameters: ''
      },
      {
        name: 'max-change',
        description: '最大化状态发生变化',
        parameters: ''
      },
      {
        name: 'close',
        description: '关闭对话框',
        parameters: ''
      },
      {
        name: 'dlg-active',
        description: '对话框激活',
        parameters: '(dlg: component) 对话框组件对象'
      },
      {
        name: 'DlgResizeEnd',
        description: '对话框大小变化消息，通过 cx.evnets.publish(\'DlgResizeEnd\', this)',
        parameters: '(dlg: component) 对话框组件对象'
      }
    ];

    const methods: MethodDoc[] = [
      {
        name: 'close',
        description: '关闭对话框',
        parameters: ''
      },
      {
        name: 'show',
        description: '是否显示对话框',
        parameters: '(visible: Boolean) 是否显示'
      },
      {
        name: 'setZIndex',
        description: '是否显示对话框',
        parameters: '(index: Number) 叠加的z_index 值'
      },
      {
        name: 'minimize',
        description: '最小化对话框',
        parameters: '(newVal: Boolean) 是否最小化'
      },
      {
        name: 'maximize',
        description: '最大化对话框',
        parameters: '(newVal: Boolean) 是否最大化'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'default',
        description: '内容部分'
      },
      {
        name: 'header-preappend',
        description: '标题之前'
      },
      {
        name: 'header-append',
        description: '标题之后'
      },
      {
        name: 'header-title',
        description: '标题附加'
      },
      {
        name: 'min-title',
        description: '最小化时的面板内容'
      }
    ];

    super(
      'cx-dialog',
      '对话框组件',
      props,
      events,
      methods,
      __filename,
      slots
    );
  }
}

export default new DialogDocument(); 