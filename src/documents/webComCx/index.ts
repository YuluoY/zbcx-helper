import { documents as cxbaseDocuments } from './cxbase';
import { documents as cxdbDocuments } from './cxdb';

export const documents = {
  ...cxbaseDocuments,
  ...cxdbDocuments
}; 