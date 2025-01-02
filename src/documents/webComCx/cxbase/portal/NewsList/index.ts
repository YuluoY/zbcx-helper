import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class NewsListDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'newlist',
        type: 'Object',
        description: '数据',
        values: [],
        default: '{}'
      }
    ];

    super(
      'cx-news-list',
      '新闻展示组件',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new NewsListDocument(); 