/**
 * 数值化处理
 * @module AttBase.numberize
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const numberizeConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "numberize",
  kind: MODULE_KINDS.FUNCTION,
  detail: "数值化处理",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { numberizeConfig };
module.exports = { numberizeConfig }; 