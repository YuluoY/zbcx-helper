import { loadComponentDocs } from "../../../../utils/docs";

/**
 * 自动生成的TypeScript配置文件
 * @module makeTreeData
 */

import { ConfigItem, FunctionConfigItem, ModuleConfigItem } from "../../../../types";
import { MODULE_KINDS, DOCUMENTATION } from "../../../../constants";

export const makeTreeDataConfig: FunctionConfigItem = {
  type: MODULE_KINDS.FUNCTION,
  label: "makeTreeData",
  kind: MODULE_KINDS.FUNCTION,
  detail: "makeTreeData(ret: Array, opts: Object): Array<NodeData>",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  parameters: [{
      label: "ret",
      type: "Array",
      detail: "原始数据",
      required: true
    }, {
      label: "opts",
      type: "object",
      detail: "选项配置参数",
      required: true,
      properties: {
        "opts.list": {
          type: "Array<Object>",
          description: "原始列表"
        },
        "opts.keyFld": {
          type: "string",
          description: "主键字段，如 code"
        },
        "opts.pidFld": {
          type: "string",
          description: "父级字段，如 pcode"
        },
        "opts.appVal": {
          type: "*",
          description: "要合并的值，要了解nodeModel，要了解2个以上的参数时，第 newField(node)可以为函数"
        },
        "opts.nodeKeyFld": {
          type: "string",
          description: "构建节点时，主键字段，如果填写了，则使用该字段作为主键字段"
        },
        "opts.nodePidFld": {
          type: "string",
          description: "构建节点时，父级字段，如果填写了，则使用该字段作为父级字段"
        },
        "opts.nodeFunc": {
          type: MODULE_KINDS.FUNCTION,
          description: "回调方法，自己定义节点，如果为null，则使用nodeData.children作为内部节点"
        }
      }
    }],
  returnType: {
    type: "Array<NodeData>",
    detail: "Array<NodeData>",
    documentation: "树形结构数据"
  }
};
