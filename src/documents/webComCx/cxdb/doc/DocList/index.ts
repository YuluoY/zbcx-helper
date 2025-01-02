import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DocListDocument extends AttDocument {
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
        name: 'viewable',
        type: 'Boolean',
        description: '是否可以浏览',
        values: [],
        default: 'true'
      },
      {
        name: 'downloadable',
        type: 'Boolean',
        description: '是否可以下载',
        values: [],
        default: 'true'
      },
      {
        name: 'editable',
        type: 'Boolean',
        description: '是否可以编辑',
        values: [],
        default: 'false'
      },
      {
        name: 'removable',
        type: 'Boolean',
        description: '是否可以删除',
        values: [],
        default: 'true'
      },
      {
        name: 'uploadable',
        type: 'Boolean',
        description: '是否可以上载',
        values: [],
        default: 'true'
      },
      {
        name: 'workflow',
        type: 'String',
        description: '流程环节',
        values: [],
        default: ''
      },
      {
        name: 'bustype',
        type: 'String',
        description: '文件的业务类型，对应cx_media表的bustype字段',
        values: [],
        default: ''
      },
      {
        name: 'saveto',
        type: 'String',
        description: '文件存储（取值: FileSys - 文件系统, Doc - 存media表及后端确定存放方式（file / fastdfs / miniio））',
        values: [],
        default: 'FileSys'
      },
      {
        name: 'dir',
        type: 'String / Object',
        description: '存储的相对路径（当 saveto = FileSys 时生效，如果不设置，系统自动分配路径）（当 saveto = FileSys时，路径前面可以带文件系统根目录，不带则指向临时文件夹,如: data: tttt/, data: , :tttt/, : ,都是合法的）',
        values: [],
        default: ''
      },
      {
        name: 'set-data',
        type: 'Function',
        description: '设置参数 - function(data, file)',
        values: [],
        default: ''
      },
      {
        name: 'upload-attrs',
        type: 'Object',
        description: '自定义传入el-upload组件的原生参数对象',
        values: [],
        default: ''
      },
      {
        name: 'need-grp',
        type: 'Boolean',
        description: '是否需要分组',
        values: [],
        default: 'false'
      },
      {
        name: 'grp-fld',
        type: 'String',
        description: '分组字段（cx_media表的字段）例如传入task,可以将附件按照流程阶段分组',
        values: [],
        default: ''
      },
      {
        name: 'grp-fld-values',
        type: 'Object',
        description: '字段映射, 将分组字段的值映射为需要显示的名称 如`{ mpg: \'图片\', vedio: \'视频\', yx: \'音频\' }`',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'doc-click',
        description: '点击文件',
        parameters: '(doc) 当前选择项'
      },
      {
        name: 'doc-view',
        description: '浏览文件',
        parameters: '(doc) 当前选择项'
      },
      {
        name: 'doc-download',
        description: '下载文件',
        parameters: '(doc) 当前选择项'
      },
      {
        name: 'doc-edit',
        description: '编辑文件',
        parameters: '(doc) 当前选择项'
      },
      {
        name: 'doc-remove',
        description: '删除文件',
        parameters: '(doc) 当前选择项'
      },
      {
        name: 'doc-add',
        description: '增加文件',
        parameters: '(doc) 当前选择项'
      }
    ];

    super(
      'cx-doc-list',
      '文档列表组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new DocListDocument(); 