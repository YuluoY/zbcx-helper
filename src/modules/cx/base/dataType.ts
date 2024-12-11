/**
 * 自动生成的TypeScript配置文件
 * @module dataType
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const dataTypeConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "dataType",
  kind: MODULE_KINDS.FUNCTION,
  detail: "dataType(typename: String): Number",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "根据数据类型的名称，取对应的数据类型代码。\n\n**说明**: \n- 支持的类型名：int / float / string / date / datetime / time / boolean / ..\n- 返回对应的cx.consts.DT_常量值\n\nExample:\n```javascript\n// 获取各种类型的代码\ncx.base.dataType('int')      // 返回 cx.consts.DT_INT\ncx.base.dataType('float')    // 返回 cx.consts.DT_REAL\ncx.base.dataType('string')   // 返回 cx.consts.DT_STRING\ncx.base.dataType('date')     // 返回 cx.consts.DT_DATE\ncx.base.dataType('datetime') // 返回 cx.consts.DT_DATETIME\ncx.base.dataType('boolean')  // 返回 cx.consts.DT_BOOL\n```"
  },
  parameters: [{
      label: "typename",
      type: "string",
      detail: "类型名 (int / float / string / date / datetime / time / boolean / ..)",
      required: true
    }],
  returnType: {
    type: "number",
    detail: "Number",
    documentation: "cx.consts.DT_INT / REAL / STRING / DATE / DATETIME / BOOL / ..."
  }
};
