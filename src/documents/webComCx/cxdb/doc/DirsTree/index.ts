import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DirsTreeDocument extends AttDocument {
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
        name: 'dirs',
        type: 'Array',
        description: '目录数组',
        values: [],
        default: ''
      },
      {
        name: 'plug',
        type: 'String',
        description: '插件配置结点（cx_cmdtool 配置的 node 名）',
        values: [],
        default: 'FileDir'
      },
      {
        name: 'root-label',
        type: 'String',
        description: '根目录标题，如果设置该属性，则产生一个根结点，否则直接用目录作为根节点',
        values: [],
        default: ''
      },
      {
        name: 'draggable',
        type: 'Boolean',
        description: '是否可以拖拽目录',
        values: [],
        default: 'false'
      },
      {
        name: 'tree-values',
        type: 'String',
        description: '条件计算提供值的对象',
        values: [],
        default: 'cx.dc.FileDirValues'
      },
      {
        name: 'tree-handler',
        type: 'Object',
        description: '树控件处理对象',
        values: [],
        default: 'new cx.dc.DirsTreeHandler()'
      },
      {
        name: 'tree-atts',
        type: 'Object',
        description: '传递给 el-tree 的属性',
        values: [],
        default: '{ selectFirst: true, expandRoot: true }'
      }
    ];

    super(
      'cx-dirs-tree',
      '多目录文件树组件',
      props,
      [], // 无事件
      [], // 无方法
      __filename
    );
  }
}

export default new DirsTreeDocument(); 