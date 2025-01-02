import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class DirTreeDocument extends AttDocument {
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
        name: 'node',
        type: 'String',
        description: '树结点配置（cx_resdir 配置的 node 名）',
        values: [],
        default: ''
      },
      {
        name: 'vals',
        type: 'Object',
        description: '针对树结点配置的每一个结点，查询时需要的参数，按 name 给值',
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
        name: 'tree-handler',
        type: 'cx.dc.ITreeHandler',
        description: '树控件处理对象',
        values: [],
        default: 'new cx.dc.DirTreeHandler()'
      },
      {
        name: 'tree-atts',
        type: 'Object',
        description: '传递给 el-tree 的属性',
        values: [],
        default: '{ selectFirst: true }'
      }
    ];

    const slots = [
      {
        name: 'default',
        description: '默认插槽',
        params: 'data'
      }
    ];

    super(
      'cx-dir-tree',
      '文件目录树',
      props,
      [], // 无事件
      [], // 无方法
      __filename,
      slots
    );
  }
}

export default new DirTreeDocument(); 