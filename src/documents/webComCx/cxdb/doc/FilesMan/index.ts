import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import snippets from './snippets';

class FilesManDocument extends AttDocument {
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
        default: 'cx-dirs-tree'
      },
      {
        name: 'dirs',
        type: 'Array',
        description: '目录数组',
        values: [],
        default: ''
      },
      {
        name: 'tree-plug',
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
        type: 'Object',
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
        name: 'tree-attrs',
        type: 'Object',
        description: '传递给 el-tree 的属性',
        values: [],
        default: '{ selectFirst: true, expandRoot: true }'
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
        type: 'Object',
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
        type: 'String',
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
      'cx-files-man',
      '多目录文件管理',
      props,
      [], // 无事件
      [], // 无方法
      __filename,
      slots
    );
  }
}

export default new FilesManDocument(); 