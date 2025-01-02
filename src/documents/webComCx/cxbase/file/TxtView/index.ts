import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class TxtViewDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'src',
        type: 'String',
        description: '文件的url地址，必传！如：\'static/test.txt\'、\'static/conf.json\'',
        values: [],
        default: ''
      },
      {
        name: 'charset',
        type: 'String',
        description: '指定文件内容的编码方式，默认为UTF-8',
        values: [],
        default: 'UTF-8'
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
      'cx-txt-view',
      '文本预览组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new TxtViewDocument(); 