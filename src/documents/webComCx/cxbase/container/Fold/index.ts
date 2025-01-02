import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class FoldDocument extends AttDocument {
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
        name: 'title',
        type: 'String',
        description: '标题(必传)'
      },
      {
        name: 'folded',
        type: 'Boolean',
        description: '是否支持可折叠',
        default: 'true'
      },
      {
        name: 'addable',
        type: 'Boolean',
        description: '是否显示增加按钮',
        default: 'false'
      },
      {
        name: 'icon',
        type: 'String',
        description: '标题栏图标，默认为空',
        default: 'false'
      },
      {
        name: 'data',
        type: 'PlugCfg',
        description: '插件数据'
      },
      {
        name: 'border-com',
        type: 'String',
        description: 'Border 组件名（边框和底纹）',
        default: 'cx-border-regular'
      },
      {
        name: 'header-com',
        type: 'String',
        description: 'Header 组件名（标题头）',
        default: 'cx-header-card'
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
        name: 'fold-change',
        description: '折叠状态变化',
        parameters: '(name: String) 当前折叠名称标识'
      },
      {
        name: 'add-click',
        description: '点击添加',
        parameters: '(name: String) 当前折叠名称标识'
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
      }
    ];

    super(
      'cx-fold',
      '折叠组件',
      props,
      events,
      [],
      __filename,
      slots
    );
  }
}

export default new FoldDocument(); 