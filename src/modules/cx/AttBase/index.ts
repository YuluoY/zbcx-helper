/**
 * 属性基础操作工具类
 * @module AttBase
 */

import type { ModuleConfigItem } from '../../../types';
import { MODULE_KINDS, DOCUMENTATION } from '../../../constants';
import { loadComponentDocs } from '../../../utils/docs';
import { calcAttConfig } from './calcAtt';
import { changedConfig } from './changed';
import { checkValueConfig } from './checkValue';
import { decodeConfig } from './decode';
import { encodeConfig } from './encode';
import { filterOptionsConfig } from './filterOptions';
import { getDefValConfig } from './getDefVal';
import { getDefValExpConfig } from './getDefValExp';
import { getDispConfig } from './getDisp';
import { getDispFldConfig } from './getDispFld';
import { getFldValsConfig } from './getFldVals';
import { initFldsConfig } from './initFlds';
import { makeAttConfig } from './makeAtt';
import { makeEditConfig } from './makeEdit';
import { makeExpConfig } from './makeExp';
import { makeInputConfig } from './makeInput';
import { numberizeConfig } from './numberize';
import { onChangeConfig } from './onChange';

// 导出配置
const indexConfig: ModuleConfigItem = {
  type: MODULE_KINDS.MODULE,
  label: "AttBase",
  kind: MODULE_KINDS.VARIABLE,
  detail: "属性基础操作工具类",
  documentation: {
    kind: DOCUMENTATION.MARKDOWN,
    value: loadComponentDocs(__dirname)
  },
  children: {
    calcAtt: calcAttConfig,
    changed: changedConfig,
    checkValue: checkValueConfig,
    decode: decodeConfig,
    encode: encodeConfig,
    filterOptions: filterOptionsConfig,
    getDefVal: getDefValConfig,
    getDefValExp: getDefValExpConfig,
    getDisp: getDispConfig,
    getDispFld: getDispFldConfig,
    getFldVals: getFldValsConfig,
    initFlds: initFldsConfig,
    makeAtt: makeAttConfig,
    makeEdit: makeEditConfig,
    makeExp: makeExpConfig,
    makeInput: makeInputConfig,
    numberize: numberizeConfig,
    onChange: onChangeConfig
  }
};

export { indexConfig };
module.exports = { indexConfig }; 