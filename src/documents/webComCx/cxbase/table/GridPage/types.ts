/** 分页配置 */
interface GridPageCfg {
  /** 总条数 */
  total: number;
  /** 每页条数 */
  pageSize: number;
  /** 每页条数下拉数组 */
  pageSizes: number[];
  /** 分页控件内的组件组合布局，由逗号分隔 */
  layout?: string;
  /** 当前页数 */
  currentPage?: number;
}

export interface GridPageProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 数据传递 */
  page: GridPageCfg;
} 