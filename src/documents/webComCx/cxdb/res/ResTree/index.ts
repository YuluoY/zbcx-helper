import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ResTreeDocument extends AttDocument {
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
        default: '{}'
      },
      {
        name: 'lazy',
        type: 'Boolean',
        description: '是否懒加载模式',
        values: [],
        default: 'true'
      },
      {
        name: 'auth',
        type: 'Object',
        description: '授权信息',
        values: [],
        default: ''
      },
      {
        name: 'tree-handler',
        type: 'Object',
        description: '树控件处理对象',
        values: [],
        default: 'cx.dc.DocTreeHandler'
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
        parameters: 'data'
      }
    ];

    super(
      'cx-res-tree',
      '资源树(基于cx_restree)',
      props,
      [], // 无事件
      [], // 无方法
      __filename,
      slots
    );
  }
}

export default new ResTreeDocument(); 