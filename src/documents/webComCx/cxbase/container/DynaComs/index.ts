import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DynaComsDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'plugName',
        type: 'String',
        description: '所属插件名，IPlugBase 中定义了 plugName 变量'
      },
      {
        name: 'name',
        type: 'String',
        description: '动态组件容器名，类似命名插槽支持多个动态组件容器',
        default: 'default'
      },
      {
        name: 'isSingle',
        type: 'Boolean',
        description: '是否单实例模式，容器中只能同时运行一个组件（运行新组件先删除旧组件）',
        default: 'false'
      }
    ];

    super(
      'cx-dyna-coms',
      '动态组件容器',
      props,
      [],
      [],
      __filename
    );
  }
}

export default new DynaComsDocument();