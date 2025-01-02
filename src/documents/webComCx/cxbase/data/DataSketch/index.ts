import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DataSketchDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'title',
        type: 'String',
        description: '数据标题',
        values: [],
        default: ''
      },
      {
        name: 'imgRow',
        type: 'Boolean',
        description: '图片是否横向模式，true在独占一列',
        values: [],
        default: 'true'
      },
      {
        name: 'isBigImg',
        type: 'Boolean',
        description: '是否大图片模式，true在独占一行或一列',
        values: [],
        default: 'true'
      },
      {
        name: 'imgUrl',
        type: 'String',
        description: '默认展示的图片地址',
        values: [],
        default: ''
      },
      {
        name: 'tags',
        type: 'Array.<TagCfg>',
        description: '数据的标签，TagCfg 配置详情见 el-tag',
        values: [],
        default: '[]'
      },
      {
        name: 'describe',
        type: 'String',
        description: '数据概述',
        values: [],
        default: ''
      },
      {
        name: 'wordNum',
        type: 'Number',
        description: '展示的概述文字数量，超出部分省略',
        values: [],
        default: '80'
      }
    ];

    const slots = [
      {
        name: 'body',
        description: '内容部分插槽'
      },
      {
        name: 'header',
        description: '头部插槽'
      },
      {
        name: 'header-content',
        description: '头部插槽下一行内容'
      }
    ];

    super(
      'cx-data-sketch',
      '数据概述组件',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new DataSketchDocument(); 