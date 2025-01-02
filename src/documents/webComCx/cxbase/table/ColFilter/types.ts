/** 列字段信息 */
interface ColFilterItem {
  /** 列名 */
  colname: string;
  /** 显示标题 */
  title: string;
  /** 显示顺序 (< 1 不显示) */
  disporder?: number;
  /** 是否选中 */
  visible?: boolean;
}

/** 参数配置 */
interface ColFilterParams {
  /** 按钮名 */
  name?: string;
  /** 传入数据数组 */
  cols: ColFilterItem[];
  /** 最少选中个数 */
  min?: number;
  /** 最多选中个数 */
  max?: number;
  /** 是否可拖拽 */
  draggable?: boolean;
}

export interface ColFilterProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 传递给组件的参数 */
  params: ColFilterParams;
} 