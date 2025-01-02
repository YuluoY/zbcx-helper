import { AttDocument } from '../../../../AttDocument';
import { PropDoc, EventDoc, SlotDoc } from '../../../../../types/tag-doc';
import { snippets } from './snippets';

class DataMan2Document extends AttDocument {
  public readonly snippets = snippets;

  constructor() {
    const props: PropDoc[] = [
      {
        name: 'params',
        type: 'Object',
        description: '给 IDataMan2 的参数对象，major、minor和tabCfgName 两组参数二选一必传',
        values: [],
        default: '{}'
      },
      {
        name: 'expParams',
        type: 'Object',
        description: '传递给cx-exp-input组件的参数对象',
        values: [],
        default: '{}'
      },
      {
        name: 'expEvents',
        type: 'Object',
        description: '传递给cx-exp-input组件的事件监听对象',
        values: [],
        default: '{}'
      },
      {
        name: 'dgParams',
        type: 'Object',
        description: '传递给cx-data-grid组件的参数对象',
        values: [],
        default: '{}'
      },
      {
        name: 'dgEvents',
        type: 'Object',
        description: '传递给cx-data-grid组件的事件监听对象',
        values: [],
        default: '{}'
      },
      {
        name: 'showExp',
        type: 'Boolean',
        description: '是否显示搜索部件',
        values: [],
        default: 'true'
      },
      {
        name: 'showColFilter',
        type: 'Boolean',
        description: '是否显示表格字段过滤',
        values: [],
        default: 'true'
      },
      {
        name: 'showBtnTitle',
        type: 'Boolean',
        description: '是否显示按钮文本，false时只显示按钮图标',
        values: [],
        default: 'true'
      },
      {
        name: 'maxExpOper',
        type: 'Number',
        description: '查询行显示按钮的数量，大于时以折叠展示',
        values: [],
        default: '4'
      },
      {
        name: 'makeExpOpers',
        type: 'Function',
        description: '构造cx-exp-input组件同行显示按钮，返回OperCfg对象序列，每个对象的onClick方法接受ctx参数',
        values: [],
        default: '查看、添加、修改、删除、导出、导入、下载模板 7个按钮'
      },
      {
        name: 'makeExpFlds',
        type: 'Function',
        description: '构造exp条件字段序列，返回条件对象序列',
        values: [],
        default: 'undefined'
      },
      {
        name: 'maxBarOper',
        type: 'Number',
        description: '查询行下行显示按钮的数量，大于时以折叠展示',
        values: [],
        default: '8'
      },
      {
        name: 'makeBarOpers',
        type: 'Function',
        description: '构造cx-exp-input组件下独占一行的按钮，返回OperCfg对象序列，每个对象的onClick方法接受ctx参数。序列>1时才显示按钮条',
        values: [],
        default: '查看、添加、修改、删除、导出、导入、下载模板 7个按钮'
      },
      {
        name: 'makeTabOpers',
        type: 'Function',
        description: '构造table数据行操作列和按钮，返回 opercol 对象序列，每个 opercol.btns是操作按钮',
        values: [],
        default: '编辑模式：修改、删除；预览模式：查看'
      },
      {
        name: 'makeTabCols',
        type: 'Function',
        description: '构造table数据列序列，返回 表列 对象序列',
        values: [],
        default: 'undefined'
      },
      {
        name: 'befAdd',
        type: 'Function',
        description: '添加入库前回调',
        values: [],
        default: 'undefined'
      },
      {
        name: 'aftAdd',
        type: 'Function',
        description: '添加入库后回调',
        values: [],
        default: 'undefined'
      },
      {
        name: 'befDel',
        type: 'Function',
        description: '删除入库前回调',
        values: [],
        default: 'undefined'
      },
      {
        name: 'aftDel',
        type: 'Function',
        description: '删除入库后回调',
        values: [],
        default: 'undefined'
      },
      {
        name: 'befUpd',
        type: 'Function',
        description: '修改入库前回调',
        values: [],
        default: 'undefined'
      },
      {
        name: 'aftUpd',
        type: 'Function',
        description: '修改入库后回调',
        values: [],
        default: 'undefined'
      },
      {
        name: 'befQry',
        type: 'Function',
        description: '查询前回调',
        values: [],
        default: 'undefined'
      },
      {
        name: 'qryCust',
        type: 'Function',
        description: '自定义查询，覆盖IDataMan2的runSvr方法，返回Promise和数据结果',
        values: [],
        default: 'undefined'
      },
      {
        name: 'procQryData',
        type: 'Function',
        description: '查询后原始数据处理',
        values: [],
        default: 'undefined'
      },
      {
        name: 'aftQry',
        type: 'Function',
        description: '查询后回调',
        values: [],
        default: 'undefined'
      },
      {
        name: 'befTempExport',
        type: 'Function',
        description: '模板导出前回调',
        values: [],
        default: 'undefined'
      },
      {
        name: 'befExport',
        type: 'Function',
        description: '导出前回调',
        values: [],
        default: 'undefined'
      },
      {
        name: 'befImport',
        type: 'Function',
        description: '导入前回调',
        values: [],
        default: 'undefined'
      }
    ];

    const events: EventDoc[] = [
      {
        name: 'after-init',
        description: 'init完成后的回调函数',
        parameters: '(this)'
      },
      {
        name: 'row-click',
        description: '数据表行点击事件',
        parameters: '(att)'
      },
      {
        name: 'row-dbclick',
        description: '数据表行双击事件',
        parameters: '(att)'
      },
      {
        name: 'selection-change',
        description: '数据表行勾选事件',
        parameters: '(selection)'
      },
      {
        name: 'column-change',
        description: '数据表字段过滤变化',
        parameters: '(col)'
      }
    ];

    const slots: SlotDoc[] = [
      {
        name: 'default',
        description: '默认插槽，替换表格部分'
      },
      {
        name: 'exp-preappend',
        description: '插入cx-exp-input组件的exp-preappend插槽位'
      },
      {
        name: 'exp-append',
        description: '插入cx-exp-input组件的exp-append插槽位'
      },
      {
        name: 'expbtns-preappend',
        description: '插入条件框同行的按钮组cx-oper-group组件的preappend插槽位'
      },
      {
        name: 'expbtns-append',
        description: '插入条件框同行的按钮组cx-oper-group组件的append插槽位'
      },
      {
        name: 'btnbar-preappend',
        description: '按钮条按钮前插槽位'
      },
      {
        name: 'btnbar-append',
        description: '按钮条按钮后插槽位'
      },
      {
        name: 'page-append',
        description: 'cx-data-grid组件的page-append插槽位'
      }
    ];

    super(
      'cx-data-man2',
      '数据管理组件',
      props,
      events,
      [],  // 无方法
      __filename,
      slots
    );
  }
}

export default new DataMan2Document(); 