import { ComponentDoc } from '@/types/tag-doc';
import ChartCylinderBar1 from './ChartCylinderBar1';
import ChartCylinderBarN from './ChartCylinderBarN';
import ChartPrismBar1 from './ChartPrismBar1';
import ChartPrismBarN from './ChartPrismBarN';
import ChartStackBar from './ChartStackBar';
import ChartStackCylinderBar from './ChartStackCylinderBar';
import ChartStackPrismBar from './ChartStackPrismBar';

export const barDocuments: Record<string, ComponentDoc> = {
  ChartCylinderBar1,
  ChartCylinderBarN,
  ChartPrismBar1,
  ChartPrismBarN,
  ChartStackBar,
  ChartStackCylinderBar,
  ChartStackPrismBar
}; 