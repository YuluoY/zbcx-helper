import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ImageViewDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'src',
        type: 'String',
        description: '文件的url地址，必传！如：\'static/image.png\'',
        values: [],
        default: ''
      },
      {
        name: 'waterMark',
        type: 'Object',
        description: '水印设置相关参数，不传时不加水印',
        values: [],
        default: '{}'
      },
      {
        name: 'srcList',
        type: 'Array',
        description: '文件预览的src集合，会绑定到preview-src-list属性上，不传时会用当前this.src构造成长度为1的数组',
        values: [],
        default: '[]'
      },
      {
        name: 'elAttrs',
        type: 'Object',
        description: 'el-image组件可接收的参数对象',
        values: [],
        default: '{}'
      },
      {
        name: 'elListeners',
        type: 'Object',
        description: 'el-image组件可接收的事件注册对象',
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
      'cx-image-view',
      '图片预览组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new ImageViewDocument(); 