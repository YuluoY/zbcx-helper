import { ComponentDoc } from '@/types/tag-doc';
import OrgAuthTree from './OrgAuthTree';
import OrgTree from './OrgTree';
import OrgUsrAuthTree from './OrgUsrAuthTree';
import OrgUsrStrictTree from './OrgUsrStrictTree';
import OrgUsrTree from './OrgUsrTree';

export const documents: Record<string, ComponentDoc>  = {
  OrgAuthTree,
  OrgTree,
  OrgUsrAuthTree,
  OrgUsrStrictTree,
  OrgUsrTree
}; 