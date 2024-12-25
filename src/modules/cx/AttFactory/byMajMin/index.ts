/**
 * 根据主次版本号创建属性
 * @module AttFactory.byMajMin
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const byMajMinConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "byMajMin",
  kind: MODULE_KINDS.FUNCTION,
  detail: "根据主次版本号创建属性",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { byMajMinConfig };
module.exports = { byMajMinConfig }; 