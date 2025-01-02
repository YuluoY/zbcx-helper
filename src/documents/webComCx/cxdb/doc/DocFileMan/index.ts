import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DocFileManDocument extends AttDocument {
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
        name: 'exp',
        type: 'Object',
        description: '查询条件(cx.svr.data.query() 查询条件)',
        values: [],
        default: ''
      },
      {
        name: 'plugs',
        type: 'String',
        description: '配置插件名（cx_cmdtool 的 node）,多个用逗号分隔',
        values: [],
        default: 'DocFile'
      },
      {
        name: 'exp-values',
        type: 'Object',
        description: '条件计算对象',
        values: [],
        default: 'cx.dc.DcDocFileValues'
      },
      {
        name: 'auth',
        type: 'Object',
        description: '授权信息',
        values: [],
        default: ''
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
        description: '文档回收站列表配置名（cx_tabcfg 的 name）',
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
      }
    ];

    const slots = [
      {
        name: 'preappend',
        description: '操作按钮之前'
      },
      {
        name: 'append',
        description: '操作按钮之后'
      }
    ];

    super(
      'cx-doc-file-man',
      '文档文件管理',
      props,
      [], // 无事件
      [], // 无方法
      __filename,
      slots
    );
  }
}

export default new DocFileManDocument(); 