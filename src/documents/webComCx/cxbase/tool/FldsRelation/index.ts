import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class FldsRelationDocument extends AttDocument {
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
        name: 'jsonFlds',
        type: 'Array<String>',
        description: '文件中的字段名集合,如：[\'时间\', \'名称\', ...]',
        values: [],
        default: ''
      },
      {
        name: 'dbFlds',
        type: 'Array',
        description: '实体表的字段集合',
        values: [],
        default: ''
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'change',
        description: '字段映射信息发生改变时',
        parameters: '(newDbFlds: Array<Object>, row: Object) - newDbFlds: 带有关联字段jsonFld的dbFlds集合, row: 当前操作的行数据对象'
      }
    ];

    super(
      'cx-flds-relation',
      '两组字段映射配置',
      props,
      events,
      [],
      __filename
    );
  }
}

export default new FldsRelationDocument(); 