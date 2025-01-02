/** 字段信息配置 */
interface DbField {
  /** 列名 */
  colname: string;
  /** 显示标题 */
  namec: string;
  /** 是否可为空 (0/1) */
  nullable: 0 | 1;
  /** 显示顺序 (< 1 不显示) */
  disporder: number;
}

export interface FldsRelationProps {
  /** UI规格 */
  size?: string;
  /** 文件中的字段名集合 */
  jsonFlds: DbField[];
  /** 实体表的字段集合 */
  dbFlds: string[];
} 