import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class FileManDocument extends AttDocument {
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
        type: 'String / Object',
        description: '树组件',
        values: [],
        default: 'cx-dir-tree'
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
        name: 'tree-handler',
        type: 'cx.dc.ITreeHandler',
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
      },
      {
        name: 'tree-width',
        type: 'String',
        description: '目录树宽度',
        values: [],
        default: '1.75rem'
      },
      {
        name: 'file-plugs',
        type: 'String',
        description: '配置插件名（cx_cmdtool 的 node）,多个用逗号分隔',
        values: [],
        default: 'File'
      },
      {
        name: 'file-exp-values',
        type: 'String / cx.dc.IDcValuesBase',
        description: '条件计算对象',
        values: [],
        default: 'cx.dc.FileValues'
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
        name: 'file-card-com',
        type: 'String / Object',
        description: '文档卡片组件',
        values: [],
        default: 'cx-file-card'
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
      'cx-file-man',
      '文件管理',
      props,
      [], // 无事件
      [], // 无方法
      __filename,
      slots
    );
  }
}

export default new FileManDocument(); 