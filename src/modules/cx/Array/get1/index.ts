/**
 * 获取数组第一个元素
 * @module array/get1
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const get1Config: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "get1",
  kind: MODULE_KINDS.FUNCTION,
  detail: "获取数组第一个元素",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { get1Config };
module.exports = { get1Config };
