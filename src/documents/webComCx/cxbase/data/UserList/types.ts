export interface UserData {
  /** 数据唯一标识 */
  id: string | number;
  /** 姓名 */
  name: string;
  /** 职务 */
  title: string;
  /** 用户头像 */
  picture?: string;
  /** 是否可以编辑 */
  editable?: boolean;
  /** 是否可以删除 */
  removable?: boolean;
}

export interface UserListProps {
  /** 数据传递 */
  data: UserData[];
  /** 标题 */
  addable?: boolean;
  /** 是否添加图片 */
  isimg?: boolean;
} 