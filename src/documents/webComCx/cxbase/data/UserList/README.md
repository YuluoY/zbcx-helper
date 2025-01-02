# 用户列表

`cx-user-list` 以列表的形式展示用户数据。

## 基础用法

使用 `data` 属性传入用户数据列表，可以通过 `addable` 和 `isimg` 控制添加按钮和头像的显示。

## 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ----- | ----- |
| **data** | 数据传递 | `Array.<UserData>` | | [] |
| addable | 标题 | Boolean | | false |
| isimg | 是否添加图片 | Boolean | | false |

## UserData 属性

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ----- | ----- |
| id | 数据唯一标识 | Number/String | | |
| name | 姓名 | String | | |
| title | 职务 | String | | |
| picture | 用户头像 | String | | |
| editable | 是否可以编辑 | Boolean | | false |
| removable | 是否可以删除 | Boolean | | false |

## 事件

| 名称 | 说明 | 参数 | 参数说明 |
| ---- | ---- | ---- | ----- |
| item-click | 数据唯一标识 | (user) | user数据项 |   
| item-edit | 编辑用户 | (user) | user数据项 |   
| item-remove | 删除用户 | (user) | user数据项 | 
| add | 增加用户 | (user) | user数据项 |

## 插槽

| 名称 | 描述 | 参数 |
| ---- | --- | --- |
| default | 内容部分 | |

## 类型定义

以下是组件的 TypeScript 类型定义：

```ts
/** 用户ID类型 */
type UserId = string | number;

/** 图片URL类型 */
type ImageUrl = string;

/** 基础样式接口 */
interface BaseStyle {
  /** 宽度 */
  width?: string | number;
  /** 高度 */
  height?: string | number;
  /** 内边距 */
  padding?: string | number;
  /** 外边距 */
  margin?: string | number;
  /** 背景色 */
  background?: string;
  /** 边框 */
  border?: string;
  /** 边框圆角 */
  borderRadius?: string | number;
  /** 阴影 */
  boxShadow?: string;
}

/** 用户数据接口 */
interface UserData {
  /** 用户ID */
  id: UserId;
  /** 用户名称 */
  name: string;
  /** 用户职务 */
  title?: string;
  /** 用户头像 */
  picture?: ImageUrl;
  /** 是否可编辑 */
  editable?: boolean;
  /** 是否可删除 */
  removable?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否选中 */
  selected?: boolean;
  /** 自定义样式 */
  style?: BaseStyle;
  /** 自定义类名 */
  className?: string;
  /** 额外数据 */
  extra?: Record<string, any>;
}

/** 用户列表组件属性接口 */
interface UserListProps {
  /** 用户数据列表 */
  data: UserData[];
  /** 是否显示添加按钮 */
  addable?: boolean;
  /** 是否显示头像 */
  isimg?: boolean;
  /** 列表尺寸 */
  size?: 'large' | 'default' | 'small';
  /** 是否显示边框 */
  bordered?: boolean;
  /** 是否显示分割线 */
  split?: boolean;
  /** 是否支持选择 */
  selectable?: boolean;
  /** 是否支持多选 */
  multiple?: boolean;
  /** 选中的用户ID列表 */
  selectedIds?: UserId[];
  /** 列表样式 */
  listStyle?: BaseStyle;
  /** 列表项样式 */
  itemStyle?: BaseStyle;
  /** 头像尺寸 */
  avatarSize?: number;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: Record<string, string | number>;
}

/** 用户点击事件参数接口 */
interface UserClickEventParams {
  /** 用户数据 */
  user: UserData;
  /** 事件对象 */
  event: MouseEvent;
  /** 列表索引 */
  index: number;
}

/** 用户编辑事件参数接口 */
interface UserEditEventParams {
  /** 用户数据 */
  user: UserData;
  /** 编辑字段 */
  field: keyof UserData;
  /** 新值 */
  value: any;
  /** 旧值 */
  oldValue: any;
}

/** 用户删除事件参数接口 */
interface UserRemoveEventParams {
  /** 用户数据 */
  user: UserData;
  /** 列表索引 */
  index: number;
}

/** 用户添加事件参数接口 */
interface UserAddEventParams {
  /** 新用户数据 */
  user: Partial<UserData>;
  /** 插入位置 */
  index?: number;
}

/** 组件事件处理器接口 */
interface UserListHandlers {
  /** 用户点击事件 */
  onItemClick?: (params: UserClickEventParams) => void;
  /** 用户编辑事件 */
  onItemEdit?: (params: UserEditEventParams) => void;
  /** 用户删除事件 */
  onItemRemove?: (params: UserRemoveEventParams) => void;
  /** 用户添加事件 */
  onAdd?: (params: UserAddEventParams) => void;
  /** 选择变化事件 */
  onSelectionChange?: (selectedUsers: UserData[]) => void;
}

/** 组件插槽数据接口 */
interface SlotData {
  /** 用户数据 */
  user: UserData;
  /** 是否选中 */
  selected: boolean;
  /** 是否禁用 */
  disabled: boolean;
  /** 是否可编辑 */
  editable: boolean;
  /** 是否可删除 */
  removable: boolean;
}

/** 组件实例接口 */
interface UserListInstance {
  /** 组件根元素 */
  $el: HTMLElement;
  /** 组件属性 */
  props: UserListProps;
  /** 获取用户数据 */
  getUser: (id: UserId) => UserData | undefined;
  /** 更新用户数据 */
  updateUser: (id: UserId, data: Partial<UserData>) => void;
  /** 添加用户 */
  addUser: (user: UserData, index?: number) => void;
  /** 移除用户 */
  removeUser: (id: UserId) => void;
  /** 选择用户 */
  selectUser: (id: UserId) => void;
  /** 取消选择用户 */
  unselectUser: (id: UserId) => void;
  /** 获取选中的用户 */
  getSelectedUsers: () => UserData[];
  /** 清空选择 */
  clearSelection: () => void;
  /** 滚动到指定用户 */
  scrollToUser: (id: UserId, options?: ScrollIntoViewOptions) => void;
}
```