import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class FileViewDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'src',
        type: 'String',
        description: '文件的url地址，必传！如：\'static/test.excel\'',
        values: [],
        default: ''
      },
      {
        name: 'filetype',
        type: 'String',
        description: '文件后缀类型，必传！如：flv',
        values: [],
        default: ''
      },
      {
        name: 'title',
        type: 'String',
        description: '文件名称，非必传',
        values: [],
        default: ''
      },
      {
        name: 'comProps',
        type: 'Object',
        description: '自定义传给对应文件预览组件的参数对象',
        values: [],
        default: '{}'
      },
      {
        name: 'comListeners',
        type: 'Object',
        description: '自定义传给对应文件预览组件的事件监听注册对象',
        values: [],
        default: '{}'
      },
      {
        name: 'custCom',
        type: 'Object',
        description: '自定义的组件配置对象，格式如：{name: \'cx-file-view\'}',
        values: [],
        default: '{}'
      },
      {
        name: 'useIframe',
        type: 'Boolean',
        description: '用以标识是否不用内置组件，而直接用浏览器自带插件去加载文件',
        values: ['true', 'false'],
        default: 'false'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'match_success',
        description: '根据文件类型匹配到对应渲染组件时',
        parameters: 'comCfg: 渲染组件配置对象，如：{name: \'cx-excel-view\', types: [\'xlsx\']}'
      },
      {
        name: 'match_failed',
        description: '根据文件类型未匹配到对应渲染组件时',
        parameters: ''
      }
    ];

    super(
      'cx-file-view',
      '通用文件预览组件',
      props,
      events,
      [],  // 无方法
      __filename
    );
  }
}

export default new FileViewDocument(); 