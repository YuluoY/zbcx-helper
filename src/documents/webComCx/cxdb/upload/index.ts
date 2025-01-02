import { ComponentDoc } from '@/types/tag-doc';
import uploader from './Uploader';
import uploaderWs from './UploaderWs';

export const documents: Record<string, ComponentDoc> = {
  uploader,
  uploaderWs
}; 