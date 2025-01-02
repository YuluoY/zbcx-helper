import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ReadExcelDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'size',
        type: 'String',
        description: 'UI规格',
        values: [],
        default: 'default'
      },
      {
        name: 'elAtts',
        type: 'Object',
        description: 'el-upload组件可接收的参数对象',
        values: [],
        default: '{}'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'after-read',
        description: '文件内容解析成功后的回调函数 - Function(jsonData, fileList, this)',
        parameters: ''
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'default',
        description: '内容部分'
      }
    ];

    super(
      'cx-read-excel',
      '解析excel文件',
      props,
      events,
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new ReadExcelDocument(); 