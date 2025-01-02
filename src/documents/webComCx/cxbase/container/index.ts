import { ComponentDoc } from '@/types/tag-doc';
import CardDocument from './Card/index';
import CardDlgDocument from './CardDlg/index';
import CollapseDocument from './Collapse/index';
import DialogDocument from './Dialog/index';
import DialogsDocument from './Dialogs/index';
import DynaComsDocument from './DynaComs/index';
import FoldDocument from './Fold/index';
import FoldButtonDocument from './FoldButton/index';
import GroupDocument from './Group/index';
import SplitScreenDocument from './SplitScreen/index';
import TabsDocument from './Tabs/index';

// 合并所有容器组件文档
export const documents: Record<string, ComponentDoc> = {
  Card: CardDocument,
  CardDlg: CardDlgDocument,
  Collapse: CollapseDocument,
  Dialog: DialogDocument,
  Dialogs: DialogsDocument,
  DynaComs: DynaComsDocument,
  Fold: FoldDocument,
  FoldButton: FoldButtonDocument,
  Group: GroupDocument,
  SplitScreen: SplitScreenDocument,
  Tabs: TabsDocument
}; 