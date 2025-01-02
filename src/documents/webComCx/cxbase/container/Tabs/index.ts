import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, MethodDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class TabsDocument extends AttDocument {
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
        name: 'type',
        type: 'String',
        description: 'tab的风格',
        values: ['card', 'plain-card', 'plain'],
        default: 'card'
      },
      {
        name: 'position',
        type: 'String',
        description: '菜单栏的摆放位置',
        values: ['top', 'right', 'bottom', 'left'],
        default: 'top'
      },
      {
        name: 'container',
        type: 'String',
        description: 'tabs组件的父路由名'
      },
      {
        name: 'allRender',
        type: 'Boolean',
        description: 'container为空组件形式运行tab页时，是否全部运行页面组件',
        default: 'false'
      },
      {
        name: 'tabs',
        type: 'Array<TabConf>',
        description: 'tab页定义',
        default: '[]'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'click',
        description: '选中tab',
        parameters: '({ curTab , oldTab }, component)'
      }
    ];

    const methods: MethodDoc[] = [
      {
        name: 'add',
        description: '增加tab项。在外部组件通过$ref.tabs.add方式添加tab',
        parameters: '(tabConf: TabConf)'
      },
      {
        name: 'remove',
        description: '移除tab页',
        parameters: '(name: string)'
      },
      {
        name: 'makeTabRecord',
        description: '内部函数 根据tab配置构造tabRecord数据，comParams和component都转换为对象',
        parameters: '(tabConf: TabConf)',
        returns: 'TabRecord'
      },
      {
        name: 'makeTabComponent',
        description: '内部函数 根据新增tab的component属性，获取对应的组件配置对象',
        parameters: '(com: Object|string)',
        returns: 'Object'
      },
      {
        name: 'getTabRecord',
        description: '内部函数 根据新增tab的component属性，获取对应的组件配置对象',
        parameters: '(name: string)',
        returns: 'TabRecord|null'
      },
      {
        name: 'setCurrentTab',
        description: '内部函数 设置当前选中的tab页',
        parameters: '(tabConf: TabRecord)'
      },
      {
        name: 'showCloseIcon',
        description: '内部函数 设置标签关闭图标是否显示',
        parameters: '(name: string)',
        returns: 'boolean'
      }
    ];

    super(
      'cx-tabs',
      '选项卡组件',
      props,
      events,
      methods,
      __filename
    );
  }
}

export default new TabsDocument(); 