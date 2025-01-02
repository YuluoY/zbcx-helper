import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class PptViewDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'src',
        type: 'String',
        description: '文件的url地址，必传！如：\'static/test.pptx\'',
        values: [],
        default: ''
      },
      {
        name: 'waterMark',
        type: 'Object',
        description: '水印设置相关参数，不传时不加水印',
        values: [],
        default: '{}'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'loaded',
        description: '文件加载完成后的回调函数',
        parameters: '(this.$refs.file, this)'
      }
    ];

    super(
      'cx-ppt-view',
      'PPT预览组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new PptViewDocument(); 