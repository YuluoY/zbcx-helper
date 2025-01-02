/** 文档列表组件Props */
export interface DocListWsProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 是否可以浏览 */
  viewable?: boolean;
  /** 是否可以下载 */
  downloadable?: boolean;
  /** 是否可以编辑 */
  editable?: boolean;
  /** 是否可以删除 */
  removable?: boolean;
  /** 是否可以上载 */
  uploadable?: boolean;
  /** 流程环节 */
  workflow?: string;
  /** 文件的业务类型，对应cx_media表的bustype字段 */
  bustype?: string;
  /** 文件存储（取值: FileSys - 文件系统, Doc - 存media表及后端确定存放方式（file / fastdfs / miniio）） */
  saveto?: string;
  /** 存储的相对路径（当 saveto = FileSys 时生效，如果不设置，系统自动分配路径）（当 saveto = FileSys时，路径前面可以带文件系统根目录，不带则指向临时文件夹,如: data: tttt/, data: , :tttt/, : ,都是合法的） */
  dir?: string;
  /** 设置参数 - function(data, file) */
  setData?: Function;
  /** 自定义传入el-upload组件的原生参数对象 */
  uploadAttrs?: object;
} 