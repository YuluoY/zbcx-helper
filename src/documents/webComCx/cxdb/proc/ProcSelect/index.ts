import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class ProcSelectDocument extends AttDocument {
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
        name: 'value',
        type: 'String<value>',
        description: '传递给组件的流程编码',
        values: [],
        default: ''
      }
    ];

    const events = [
      {
        name: 'onChange',
        description: '当前选择发生变化',
        parameters: '(value)',
        paramsDesc: 'value数据项'
      }
    ];

    super(
      'cx-proc-select',
      '流程选择',
      props,
      events,
      [], // 无方法
      __filename
    );
  }
}

export default new ProcSelectDocument(); 