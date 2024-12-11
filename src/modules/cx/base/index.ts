/**
 * 基础工具函数模块
 * @module base
 */

import type { ModuleConfigItem } from '../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../constants';
import { bytesToStrConfig } from './bytesToStr';
import { callConfig } from './call';
import { cfmMsgConfig } from './cfmMsg';
import { compareVersionsConfig } from './compareVersions';
import { containsConfig } from './contains';
import { dataTypeConfig } from './dataType';
import { debounceConfig } from './debounce';
import { deepCopyConfig } from './deepCopy';
import { defValConfig } from './defVal';
import { executeConfig } from './execute';
import { extendConfig } from './extend';
import { isArrConfig } from './isArr';
import { isBooleanConfig } from './isBoolean';
import { isDateConfig } from './isDate';
import { isFuncConfig } from './isFunc';
import { isNNullConfig } from './isNNull';
import { isNullConfig } from './isNull';
import { isNumConfig } from './isNum';
import { isObjConfig } from './isObj';
import { isStrConfig } from './isStr';
import { loadModuleConfig } from './loadModule';
import { loadModuleByPlugConfig } from './loadModuleByPlug';
import { locOrStrConfig } from './locOrStr';
import { makeTreeDataConfig } from './makeTreeData';
import { newObjConfig } from './newObj';
import { nextIdConfig } from './nextId';
import { nextZIndexConfig } from './nextZIndex';
import { onErrorConfig } from './onError';
import { refreshPageConfig } from './refreshPage';
import { showErrMsgConfig } from './showErrMsg';
import { showMsgConfig } from './showMsg';
import { strToBytesConfig } from './strToBytes';
import { throttleConfig } from './throttle';
import { watchConfig } from './watch';

// 导出配置
const indexConfig: ModuleConfigItem = {
  type: MODULE_KINDS.MODULE,
  label: "base",
  kind: MODULE_KINDS.VARIABLE,
  detail: "基础工具函数模块",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: "提供各种基础工具函数。"
  },
  children: {
    bytesToStr: bytesToStrConfig,
    call: callConfig,
    cfmMsg: cfmMsgConfig,
    compareVersions: compareVersionsConfig,
    contains: containsConfig,
    dataType: dataTypeConfig,
    debounce: debounceConfig,
    deepCopy: deepCopyConfig,
    defVal: defValConfig,
    execute: executeConfig,
    extend: extendConfig,
    isArr: isArrConfig,
    isBoolean: isBooleanConfig,
    isDate: isDateConfig,
    isFunc: isFuncConfig,
    isNNull: isNNullConfig,
    isNull: isNullConfig,
    isNum: isNumConfig,
    isObj: isObjConfig,
    isStr: isStrConfig,
    loadModule: loadModuleConfig,
    loadModuleByPlug: loadModuleByPlugConfig,
    locOrStr: locOrStrConfig,
    makeTreeData: makeTreeDataConfig,
    newObj: newObjConfig,
    nextId: nextIdConfig,
    nextZIndex: nextZIndexConfig,
    onError: onErrorConfig,
    refreshPage: refreshPageConfig,
    showErrMsg: showErrMsgConfig,
    showMsg: showMsgConfig,
    strToBytes: strToBytesConfig,
    throttle: throttleConfig,
    watch: watchConfig
  }
};

export { indexConfig };
module.exports = { indexConfig };
