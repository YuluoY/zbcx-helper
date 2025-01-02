import { AttDocument } from '../../../../AttDocument';
import { PropDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DataManStaticDocument extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'flds',
        type: 'Array',
        description: '自定义字段配置集合',
        values: [],
        default: '[]'
      },
      {
        name: 'data',
        type: 'Array',
        description: '静态数据集合',
        values: [],
        default: '[]'
      },
      {
        name: 'filterData',
        type: 'Function',
        description: '自定义数据过滤钩子函数，会在每次数据更新时调用（初始化、翻页等）',
        values: [],
        default: 'undefined'
      },
      {
        name: 'autoScroll',
        type: 'Boolean',
        description: '是否开始表格自动滚动',
        values: [],
        default: 'false'
      },
      {
        name: 'speed',
        type: 'Number',
        description: '自动滚动的速度，默认为1，即每秒10像素',
        values: [],
        default: '1'
      },
      {
        name: 'param',
        type: 'Object',
        description: 'cx-tabs组件可接收的参数对象',
        values: [],
        default: '{}'
      },
      {
        name: 'listeners',
        type: 'Object',
        description: 'cx-tabs组件可接收的事件监听对象',
        values: [],
        default: '{}'
      }
    ];

    super(
      'cx-data-man-static',
      '静态数据管理组件',
      props,
      [],  // 无事件
      [],  // 无方法
      __filename
    );
  }
}

export default new DataManStaticDocument(); 