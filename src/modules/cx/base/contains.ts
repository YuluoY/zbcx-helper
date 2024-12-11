/**
 * 自动生成的TypeScript配置文件
 * @module contains
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from '@/types';
import { MODULE_KINDS, DOCUMENTATION } from '@/constants';

export const containsConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "contains",
  kind: MODULE_KINDS.FUNCTION,
  detail: "contains(obj: Object | Array, val: Object): Boolean",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "判断val(对象或属性)是否存在obj(数组或对象)中。\n\n**说明**: \n- obj可以是数组或对象\n- val是要查找的对象\n- 返回true表示存在，false表示不存在\n\nExample:\n```javascript\n// 数组包含判断\nconst arr = [1, 2, 3]\ncx.base.contains(arr, 2) // true\n\n// 对象属性判断\nconst obj = { name: 'test', value: 100 }\ncx.base.contains(obj, 'name') // true\n\n// 对象值判断\nconst items = [{ id: 1 }, { id: 2 }]\ncx.base.contains(items, { id: 1 }) // true\n```"
  },
  parameters: [{
      label: "obj",
      type: "Object | Array",
      detail: "要搜索的对象或数组",
      required: true
    }, {
      label: "val",
      type: "object",
      detail: "要查找的对象或属性",
      required: true
    }],
  returnType: {
    type: "boolean",
    detail: "Boolean",
    documentation: "如果存在返回true，否则返回false"
  }
};
