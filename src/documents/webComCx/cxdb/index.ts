import { ComponentDoc } from '@/types/tag-doc';
import { documents as loginDocuments } from './login';
import { documents as attDocuments } from './att';
import { documents as dataDocuments } from './data';
import { documents as docDocuments } from './doc';
import { documents as formDocuments } from './form';
import { documents as frameDocuments } from './frame';
import { documents as mapDocuments } from './map';
import { documents as orguserDocuments } from './orguser';
import { documents as procDocuments } from './proc';
import { documents as pswDocuments } from './psw';
import { documents as resDocuments } from './res';
import { documents as uploadDocuments } from './upload';

// 合并所有数据库组件文档
export const documents = {
  ...loginDocuments,
  ...attDocuments,
  ...dataDocuments,
  ...docDocuments,
  ...formDocuments,
  ...frameDocuments,
  ...mapDocuments,
  ...orguserDocuments,
  ...procDocuments,
  ...pswDocuments,
  ...resDocuments,
  ...uploadDocuments
}; 