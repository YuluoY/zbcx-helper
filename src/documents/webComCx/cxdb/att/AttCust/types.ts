import { ValidInfo, FieldInfo } from '../AttEdit/types';

/** 自定义属性编辑组件参数 */
export interface AttCustParams {
  /** 实体主类型 (不传 major 和 minor 的时候，必须提供 flds/fldvals) */
  major?: number;
  /** 实体子类型 (不传 major 和 minor 的时候，必须提供 flds/fldvals) */
  minor?: number;
  /** 参照字段,结构同 cx.AttBase 对象的 makeInput 返回结果 */
  refFlds?: FieldInfo[];
  /** 自定义字段,结构同 cx.AttBase 对象的 makeInput 返回结果 */
  flds: FieldInfo[];
  /** 是否可编辑 */
  editable?: boolean;
  /** 编辑/浏览模式 */
  mode?: 0 | 1;
  /** 列数量 */
  colNum?: 1 | 2 | 3;
  /** 属性组件名 */
  attCom?: string;
  /** ValButton 插件调用之前的回调函数 */
  beforeValbtn?: (fld: FieldInfo, params: any) => void;
  /** ValButton 插件调用之后的回调函数 */
  afterValbtn?: (fld: FieldInfo, flds: FieldInfo[], params: any) => void;
}

/** 自定义属性编辑组件Props */
export interface AttCustProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 传递给组件的参数 */
  params: AttCustParams;
} 