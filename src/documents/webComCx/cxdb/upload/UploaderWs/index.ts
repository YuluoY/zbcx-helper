import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class UploaderWsDocument extends AttDocument {
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
        name: 'tip',
        type: 'String',
        description: '提示信息',
        values: [],
        default: ''
      },
      {
        name: 'types',
        type: 'String',
        description: '支持的后缀(如: png,gif,shp)',
        values: [],
        default: ''
      },
      {
        name: 'icon',
        type: 'String',
        description: '图标',
        values: [],
        default: 'cx-fi ic-upload fi-32'
      },
      {
        name: 'showFileList',
        type: 'Boolean',
        description: '是否显示文件列表',
        values: [],
        default: 'false'
      },
      {
        name: 'checkName',
        type: 'Boolean',
        description: '检查文件名是否重复',
        values: [],
        default: 'false'
      },
      {
        name: 'files',
        type: 'Array',
        description: '已经存在的文件名',
        values: [],
        default: ''
      },
      {
        name: 'onUpload',
        type: 'Function',
        description: '成功后的回调函数 Function(ret)文件成功对象',
        values: [],
        default: ''
      },
      {
        name: 'setData',
        type: 'Function',
        description: '为上载文件准备数据 Function(ret)文件上传url信息对象',
        values: [],
        default: ''
      },
      {
        name: 'data',
        type: 'Object',
        description: '传递给 url 的附加参数',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'progress',
        description: '上载进度发生变化',
        parameters: '(pert) 上载完成进度百分比'
      }
    ];

    super(
      'cx-uploader-ws',
      'WebSocket 文件上载',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new UploaderWsDocument(); 