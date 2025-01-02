import { ValidInfo, FieldInfo } from '../AttEdit/types';

/** 属性分组编辑组件参数 */
export interface AttEditGrpParams {
  /** 实体主类型 (不传 major 和 minor 的时候，必须提供 flds/fldvals) */
  major?: number;
  /** 实体子类型 (不传 major 和 minor 的时候，必须提供 flds/fldvals) */
  minor?: number;
  /** 实体属性 (不传 att,则采用默认属性) */
  att?: object;
  /** 字段列表 (fld 信息必须跟 cx_fld 表一致) */
  flds?: FieldInfo[];
  /** 字段取值表 (fldval 信息必须跟 cx_fldvalue 表一致) */
  fldVals?: any[];
  /** 不可编辑的字段名列表 */
  uneditables?: string[];
  /** 是否需要解码 */
  decode?: boolean;
  /** 是否可编辑 */
  editable?: boolean;
  /** 编辑/浏览模式, 0-浏览 1-编辑 2-编辑后对比 */
  mode?: 0 | 1 | 2;
  /** 列数量 */
  colNum?: 1 | 2 | 3;
  /** 属性组件名 */
  attCom?: string;
  /** Border 组件名（边框和底纹）*/
  borderCom?: string;
  /** Header 组件名（标题头）*/
  headerCom?: string;
  /** 组件 Header 的参数 */
  header?: object;
  /** 组件 Content 的参数 */
  content?: object;
  /** 保存数据 - function(att), 返回 Promise */
  update?: (att: object) => Promise<any>;
  /** 修改数据之前 - function(att)，成功返回 true */
  beforeUpd?: (att: object) => boolean;
  /** 修改数据之后 - function(att) */
  afterUpd?: (att: object) => void;
  /** ValButton 插件调用之前的回调函数 */
  beforeValbtn?: (fld: FieldInfo, params: any) => void;
  /** ValButton 插件调用之后的回调函数 */
  afterValbtn?: (fld: FieldInfo, flds: FieldInfo[], params: any) => void;
}

/** 属性分组编辑组件Props */
export interface AttEditGrpProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 标题 */
  title?: string;
  /** 传递给组件的参数 */
  params: AttEditGrpParams;
} 