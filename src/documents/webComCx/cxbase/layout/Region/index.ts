import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class RegionDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'region',
        type: 'String',
        description: '布局的区域',
        values: ['north', 'west', 'center', 'east', 'south'],
        default: ''
      },
      {
        name: 'width',
        type: 'String',
        description: '宽度, east、west 两个 region 定义宽度，不传时根据内容自动填充，高度自适应父容器',
        values: [],
        default: ''
      },
      {
        name: 'height',
        type: 'String',
        description: '高度, north、south 两个 region 定义高度，不传时根据内容自动填充，宽度自适应父容器',
        values: [],
        default: ''
      },
      {
        name: 'style',
        type: 'String',
        description: '区域的附加样式',
        values: [],
        default: ''
      },
      {
        name: 'class',
        type: 'String',
        description: '区域的附加样式类',
        values: [],
        default: ''
      },
      {
        name: 'border',
        type: 'Boolean',
        description: 'region 是否有边线，和区域的关系：north 下方、south 上方、west 右方、east 左方',
        values: [],
        default: 'false'
      },
      {
        name: 'gutter',
        type: 'Boolean',
        description: 'region 间是否有分隔槽，和区域的关系：north 下方、south 上方、west 右方、east 左方',
        values: [],
        default: 'false'
      },
      {
        name: 'splitable',
        type: 'Boolean',
        description: '分隔槽是否可拖拽，修改 region 尺寸，有 gutter 时才生效',
        values: [],
        default: 'false'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'drag-over',
        description: '分隔条拖拽结束消息',
        parameters: '{offset, regSize}: offset 是拖拽的偏移量，regSize 是区域的尺寸'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'default',
        description: '内容部分'
      }
    ];

    super(
      'cx-region',
      '布局区域组件',
      props,
      events,
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new RegionDocument(); 