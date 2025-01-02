import { AttDocument, MethodDoc } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class CollapseDocument extends AttDocument {
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
        name: 'container',
        type: 'String',
        description: 'tabs 组件的父路由名'
      },
      {
        name: 'accordion',
        type: 'Boolean',
        description: '是否手风琴模式，true时只能激活展开一个面板',
        default: 'false'
      },
      {
        name: 'tabs',
        type: 'Array.<TabConf>',
        description: 'tab 页定义',
        default: '[]'
      }
    ];

    const methods: MethodDoc[] = [
      {
        name: 'add',
        description: '增加 tab 项。在外部组件通过 $ref.tabs.add 方式添加 tab',
        parameters: '(tabConf: TabConf) 标签配置对象'
      },
      {
        name: 'remove',
        description: '移除 tab 页',
        parameters: '(name: String) 标签标识名'
      },
      {
        name: 'makeTabRecord',
        description: '内部函数 根据tab配置构造 tabRecord 数据，comParams 和 component 都转换为对象',
        parameters: '(tabConf: TabConf) 标签配置对象',
        returns: 'TabRecord'
      },
      {
        name: 'makeTabComponent',
        description: '内部函数 根据新增 tab 的 component 属性，获取对应的组件配置对象',
        parameters: '(com: Object|String) 组件注册名（如：CxCardDialog）,或者组件配置对象',
        returns: '检索到的 tabRecord: Object'
      },
      {
        name: 'getTabRecord',
        description: '内部函数 根据新增 tab 的 component 属性，获取对应的组件配置对象',
        parameters: '(name: String) 标签标识名',
        returns: 'TabRecord|Null'
      },
      {
        name: 'openTab',
        description: '内部函数 展开tab页',
        parameters: '(tabConf: TabRecord) TabRecord 对象'
      },
      {
        name: 'foldTab',
        description: '内部函数 折叠tab页',
        parameters: '(tabConf: TabRecord) TabRecord 对象'
      }
    ];

    super(
      'cx-collapse',
      '手风琴折叠组件',
      props,
      [],
      methods,
      __filename
    );
  }
}

export default new CollapseDocument(); 