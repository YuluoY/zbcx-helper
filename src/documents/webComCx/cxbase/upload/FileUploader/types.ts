/** 文件信息 */
export interface FileInfo {
  /** 文件ID */
  id: number;
  /** 文件名 */
  filename: string;
  /** 文件大小 */
  filelength: number;
}

export interface FileUploaderProps {
  /** 尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 文件信息 */
  file: FileInfo;
} 