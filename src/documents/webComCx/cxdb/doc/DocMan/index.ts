import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class DocManDocument extends AttDocument {
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
        name: 'tree-com',
        type: 'String',
        description: '树组件',
        values: [],
        default: 'cx-doc-tree'
      },
      {
        name: 'tree-node',
        type: 'String',
        description: '树结点配置（cx_resdir 配置的 node 名）',
        values: [],
        default: ''
      },
      {
        name: 'tree-vals',
        type: 'Object',
        description: '针对树结点配置的每一个结点，查询时需要的参数，按 name 给值',
        values: [],
        default: ''
      },
      {
        name: 'lazy',
        type: 'Boolean',
        description: '是否懒加载模式',
        values: [],
        default: 'true'
      },
      {
        name: 'tree-handler',
        type: 'Object',
        description: '树控件处理对象',
        values: [],
        default: 'cx.dc.DocTreeHandler'
      },
      {
        name: 'tree-attrs',
        type: 'Object',
        description: '传递给 el-tree 的属性',
        values: [],
        default: '{ selectFirst: true }'
      },
      {
        name: 'tree-width',
        type: 'String',
        description: '目录树宽度',
        values: [],
        default: '1.75rem'
      },
      {
        name: 'doc-plugs',
        type: 'String',
        description: '配置插件名（cx_cmdtool 的 node）,多个用逗号分隔',
        values: [],
        default: 'DocFile'
      },
      {
        name: 'doc-exp-values',
        type: 'Object',
        description: '条件计算对象',
        values: [],
        default: 'cx.dc.DocFileValues'
      },
      {
        name: 'list-type',
        type: 'String',
        description: '文件列表方式',
        values: ['list', 'card', 'icon'],
        default: 'list'
      },
      {
        name: 'set-data',
        type: 'Function',
        description: '当上载文件的时候，根据文件设置cx_media 表其他信息',
        values: [],
        default: ''
      },
      {
        name: 'after-upload',
        type: 'Function',
        description: '上载文件完成之后的处理',
        values: [],
        default: ''
      },
      {
        name: 'upload',
        type: 'Function',
        description: '自定义的上载函数，设置这个函数，则上载由该函数完成',
        values: [],
        default: ''
      },
      {
        name: 'doc-table-cfg',
        type: 'String',
        description: '文档列表配置名（cx_tabcfg 的 name）',
        values: [],
        default: 'DocFile'
      },
      {
        name: 'docrecyb-table-cfg',
        type: 'String',
        description: '回收站文档列表配置名（cx_tabcfg 的 name）',
        values: [],
        default: 'DocRecyb'
      },
      {
        name: 'doc-card-com',
        type: 'String',
        description: '文档卡片组件',
        values: [],
        default: 'cx-doc-card'
      },
      {
        name: 'docrecyb-card-com',
        type: 'String',
        description: '文档回收站卡片组件',
        values: [],
        default: 'cx-docrecyb-card'
      },
      {
        name: 'auth-dir',
        type: 'Object',
        description: '目录授权信息',
        values: [],
        default: ''
      },
      {
        name: 'auth-file',
        type: 'Object',
        description: '文件授权信息',
        values: [],
        default: ''
      }
    ];

    const slots = [
      {
        name: 'dirtree-default',
        description: '目录树-插槽',
        params: 'data'
      },
      {
        name: 'dirfile-preappend',
        description: '目录文件组件-操作按钮之前'
      },
      {
        name: 'dirfile-append',
        description: '目录文件组件-操作按钮之后'
      }
    ];

    super(
      'cx-doc-man',
      '文档管理',
      props,
      [], // 无事件
      [], // 无方法
      __filename,
      slots
    );
  }
}

export default new DocManDocument(); 