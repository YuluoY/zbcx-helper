import { ComponentDoc } from '@/types/tag-doc';
import { AttFormDocument } from './AttForm';
import { AttTabDocument } from './AttTab';
import { AttGrpDocument } from './AttGrp';
import { ExpMoreDocument } from './ExpMore';

// 导出所有属性组件文档
export const documents = {
    AttForm: new AttFormDocument(),
    AttTab: new AttTabDocument(),
    AttGrp: new AttGrpDocument(),
    ExpMore: new ExpMoreDocument()
}; 