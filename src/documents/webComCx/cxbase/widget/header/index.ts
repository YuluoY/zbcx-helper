import { ComponentDoc } from '../../../../../types/tag-doc';
import HeaderDocument from './Header';
import HeaderAttgrpDocument from './HeaderAttgrp';
import HeaderCardDocument from './HeaderCard';
import HeaderCarddlgDocument from './HeaderCarddlg';
import HeaderDialogDocument from './HeaderDialog';
import HeaderFoldDocument from './HeaderFold';
import HeaderGroupDocument from './HeaderGroup';

export const documents: Record<string, ComponentDoc> = {
  Header: HeaderDocument,
  HeaderAttgrp: HeaderAttgrpDocument,
  HeaderCard: HeaderCardDocument,
  HeaderCarddlg: HeaderCarddlgDocument,
  HeaderDialog: HeaderDialogDocument,
  HeaderFold: HeaderFoldDocument,
  HeaderGroup: HeaderGroupDocument
}; 