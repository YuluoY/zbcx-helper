import { ComponentDoc } from '../../../../../types/tag-doc';
import BorderGroupDocument from './BorderGroup';
import BorderNoneDocument from './BorderNone';
import BorderRegularDocument from './BorderRegular';
import BorderShapeDocument from './BorderShape';
import BorderSvgDocument from './BorderSvg';
import BorderWidgetDocument from './BorderWidget';

export const documents: Record<string, ComponentDoc> = {
  BorderGroup: BorderGroupDocument,
  BorderNone: BorderNoneDocument,
  BorderRegular: BorderRegularDocument,
  BorderShape: BorderShapeDocument,
  BorderSvg: BorderSvgDocument,
  BorderWidget: BorderWidgetDocument
}; 