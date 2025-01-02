import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class SplitScreenDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'comList',
        type: 'Array<ComConfig>',
        description: '组件配置集合，分屏数量等于comList的长度'
      },
      {
        name: 'userRowNum',
        type: 'Number',
        description: '分屏数量',
        default: 'undefined'
      }
    ];

    super(
      'cx-split-screen',
      '自定义分屏组件',
      props,
      [],
      [],
      __filename
    );
  }
}

export default new SplitScreenDocument(); 