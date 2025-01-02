import { AttDocument } from '../../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../../types/tag-doc';
import { snippets } from './snippets';

class HeaderAttgrpDocument extends AttDocument {
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
        name: 'title',
        type: 'String',
        description: '标题',
        values: [],
        default: ''
      },
      {
        name: 'editable',
        type: 'Boolean',
        description: '是否可编辑',
        values: [],
        default: 'false'
      },
      {
        name: 'mode',
        type: 'Number',
        description: '展现模式',
        values: ['0 - 浏览模式', '1-编辑模式'],
        default: '0'
      },
      {
        name: 'changed',
        type: 'Boolean',
        description: '是否改变',
        values: [],
        default: 'false'
      },
      {
        name: 'header',
        type: 'Object',
        description: '传递给 Header 组件的 v-bind 参数',
        values: [],
        default: '{}'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'mode-change',
        description: '模式发生了变化',
        parameters: 'function()'
      },
      {
        name: 'edit-save',
        description: '编辑保存',
        parameters: 'function()'
      },
      {
        name: 'edit-cancel',
        description: '编辑取消',
        parameters: 'function()'
      }
    ];

    super(
      'cx-header-attgrp',
      'Header-属性分组',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new HeaderAttgrpDocument(); 