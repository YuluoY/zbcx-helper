/** 推荐类型对象 */
interface Type {
  /** 名称 */
  name: string;
  /** 图标 */
  icon: string;
}

/** 参数对象 */
interface Params {
  /** 推荐的类型列表 */
  types?: Type[];
}

export interface SearchPoiProps {
  /** 参数对象 */
  params: Params;
} 