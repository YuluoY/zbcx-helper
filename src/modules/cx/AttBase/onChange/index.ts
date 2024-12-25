/**
 * 值变更事件处理
 * @module AttBase.onChange
 */

import type { ModuleConfigItem } from '../../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../../constants';
import { loadComponentDocs } from '../../../../utils/docs';

// 导出配置
const onChangeConfig: ModuleConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "onChange",
  kind: MODULE_KINDS.FUNCTION,
  detail: "值变更事件处理",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {}
};

export { onChangeConfig };
module.exports = { onChangeConfig }; 