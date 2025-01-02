import { ComponentDoc } from '../../../../../types/tag-doc';
import CmdbarDocument from './Cmdbar';
import CmdCloseDocument from './CmdClose';
import CmdOkCancelDocument from './CmdOkCancel';
import CmdOkCloseDocument from './CmdOkClose';
import CmdSaveDocument from './CmdSave';

export const documents: Record<string, ComponentDoc> = {
  Cmdbar: CmdbarDocument,
  CmdClose: CmdCloseDocument,
  CmdOkCancel: CmdOkCancelDocument,
  CmdOkClose: CmdOkCloseDocument,
  CmdSave: CmdSaveDocument
}; 