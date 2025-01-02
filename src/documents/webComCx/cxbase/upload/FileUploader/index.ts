import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

export class FileUploaderDocument extends AttDocument {
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
        name: 'file',
        type: 'FileInfo',
        description: '文件信息',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'pause-click',
        description: '暂停上传时触发',
        parameters: 'file: FileInfo'
      },
      {
        name: 'continue-click',
        description: '继续上传时触发',
        parameters: 'file: FileInfo'
      },
      {
        name: 'abort-click',
        description: '取消上传时触发',
        parameters: 'file: FileInfo'
      }
    ];

    super(
      'cx-file-uploader',
      '文件上传信息条',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
} 