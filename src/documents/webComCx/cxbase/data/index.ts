import { ComponentDoc } from '@/types/tag-doc';
import BindAccount from './BindAccount';
import BindCard from './BindCard';
import BindForm from './BindForm';
import DataCard from './DataCard';
import DataList from './DataList';
import DataListCard from './DataListCard';
import DataSketch from './DataSketch';
import FocusText from './FocusText';
import GrpList from './GrpList';
import Timeline from './Timeline';
import UserList from './UserList';

// 合并所有数据组件文档
export const documents: Record<string, ComponentDoc> = {
  BindAccount,
  BindCard,
  BindForm,
  DataCard,
  DataList,
  DataListCard,
  DataSketch,
  FocusText,
  GrpList,
  Timeline,
  UserList
}; 