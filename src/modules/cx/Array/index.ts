/**
 * 数组操作工具类
 * @module array
 */

import type { ModuleConfigItem } from '../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../constants';
import { loadComponentDocs } from '../../../utils/docs';
import { appendConfig } from './append';
import { appendArrConfig } from './appendArr';
import { clearConfig } from './clear';
import { derepeatConfig } from './derepeat';
import { derepeatByKeyConfig } from './derepeatByKey';
import { derepeatByKeysConfig } from './derepeatByKeys';
import { forEachConfig } from './forEach';
import { get1Config } from './get1';
import { getsConfig } from './gets';
import { getsFuzConfig } from './getsFuz';
import { getsNotConfig } from './getsNot';
import { getsNotFuzConfig } from './getsNotFuz';
import { hasConfig } from './has';
import { indexOfConfig } from './indexOf';
import { insertConfig } from './insert';
import { insertAtConfig } from './insertAt';
import { isEmptyConfig } from './isEmpty';
import { listToMapConfig } from './listToMap';
import { listToMapByKeysConfig } from './listToMapByKeys';
import { makeArrConfig } from './makeArr';
import { mergeConfig } from './merge';
import { removeConfig } from './remove';
import { removeElementConfig } from './removeElement';
import { splitArrayConfig } from './splitArray';
import { toStringConfig } from './toString';
import { updateConfig } from './update';

// 导出配置
const indexConfig: ModuleConfigItem = {
  type: MODULE_KINDS.MODULE,
  label: "array",
  kind: MODULE_KINDS.VARIABLE,
  detail: "数组操作工具类",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {
    append: appendConfig,
    appendArr: appendArrConfig,
    clear: clearConfig,
    derepeat: derepeatConfig,
    derepeatByKey: derepeatByKeyConfig,
    derepeatByKeys: derepeatByKeysConfig,
    forEach: forEachConfig,
    get1: get1Config,
    gets: getsConfig,
    getsFuz: getsFuzConfig,
    getsNot: getsNotConfig,
    getsNotFuz: getsNotFuzConfig,
    has: hasConfig,
    indexOf: indexOfConfig,
    insert: insertConfig,
    insertAt: insertAtConfig,
    isEmpty: isEmptyConfig,
    listToMap: listToMapConfig,
    listToMapByKeys: listToMapByKeysConfig,
    makeArr: makeArrConfig,
    merge: mergeConfig,
    remove: removeConfig,
    removeElement: removeElementConfig,
    splitArray: splitArrayConfig,
    toString: toStringConfig,
    update: updateConfig
  }
};

export { indexConfig };
module.exports = { indexConfig }; 