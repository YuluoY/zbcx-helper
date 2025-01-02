/** 上传数据配置 */
export interface UploaderData {
  /**
   * 实体主类型
   * @required
   */
  major: number;

  /**
   * 实体子类型
   * @required
   */
  minor: number;

  /**
   * 实体号
   * @required
   */
  entityid: number;

  /**
   * 流程环节
   */
  task?: string;

  /**
   * 备注
   */
  memo?: string;

  /**
   * 文件存储
   * @required
   */
  saveto: 'FileSys' | 'Doc';

  /**
   * 存储的相对路径（当 saveto = FileSys 时生效，如果不设置，系统自动分配路径）
   */
  dir?: string;
}

export interface UploaderProps {
  /**
   * 尺寸
   * @default default
   */
  size?: 'large' | 'default' | 'small';

  /**
   * 提示信息
   */
  tip?: string;

  /**
   * 支持的后缀(如: png,gif,shp)
   */
  types?: string;

  /**
   * 图标
   * @default cx-fi ic-upload fi-32
   */
  icon?: string;

  /**
   * 是否显示文件列表
   * @default false
   */
  showFileList?: boolean;

  /**
   * 检查文件名是否重复
   * @default false
   */
  checkName?: boolean;

  /**
   * 已经存在的文件名
   */
  files?: string[];

  /**
   * 成功后的回调函数
   * @required
   */
  onUpload: (ret: any) => void;

  /**
   * 为上载文件准备数据
   */
  setData?: (ret: any) => void;

  /**
   * 传递给 url 的附加参数
   * @required
   */
  data: UploaderData;
} 