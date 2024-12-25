/**
 * cx 模块类型声明文件
 */
/// <reference path="./AttFactory/index.d.ts" />
/// <reference path="./Base/index.d.ts" />
/// <reference path="./Bpm/index.d.ts" />
/// <reference path="./Array/index.d.ts" />
/// <reference path="./CacheLru/index.d.ts" />
/// <reference path="./CodeFactory/index.d.ts" />
/// <reference path="./Color/index.d.ts" />
/// <reference path="./Column/index.d.ts" />
/// <reference path="./Config/index.d.ts" />
/// <reference path="./Consts/index.d.ts" />
/// <reference path="./Converter/index.d.ts" />
/// <reference path="./CxDate/index.d.ts" />
/// <reference path="./Data/index.d.ts" />
/// <reference path="./DataFmt/index.d.ts" />
/// <reference path="./DataGrid/index.d.ts" />
/// <reference path="./DateTime/index.d.ts" />
/// <reference path="./DC/Plug/index.d.ts" />
/// <reference path="./DC/Tree/index.d.ts" />
/// <reference path="./DC/ExpFields/index.d.ts" />
/// <reference path="./DC/ExpValues/index.d.ts" />
/// <reference path="./Dom/index.d.ts" />
/// <reference path="./Entities/index.d.ts" />
/// <reference path="./Events/index.d.ts" />
/// <reference path="./ExpExcel/index.d.ts" />
/// <reference path="./Fields/index.d.ts" />
/// <reference path="./File/index.d.ts" />
/// <reference path="./FileLoader/index.d.ts" />
/// <reference path="./Form/index.d.ts" />
/// <reference path="./Formatter/index.d.ts" />
/// <reference path="./Global/index.d.ts" />
/// <reference path="./Http/index.d.ts" />
/// <reference path="./i18n/index.d.ts" />
/// <reference path="./ImageLoader/index.d.ts" />
/// <reference path="./IndexDb/index.d.ts" />
/// <reference path="./InitRunenv/index.d.ts" />
/// <reference path="./Layers/index.d.ts" />
/// <reference path="./LocalCache/index.d.ts" />
/// <reference path="./Menu/index.d.ts" />
/// <reference path="./Parser/index.d.ts" />
/// <reference path="./Plug/index.d.ts" />
/// <reference path="./Plugins/index.d.ts" />
/// <reference path="./ProcAssign/index.d.ts" />
/// <reference path="./RegEx/index.d.ts" />
/// <reference path="./Router/index.d.ts" />
/// <reference path="./Run/index.d.ts" />
/// <reference path="./Service/index.d.ts" />
/// <reference path="./SqlEx/index.d.ts" />
/// <reference path="./SqlExp/index.d.ts" />
/// <reference path="./Stack/index.d.ts" />
/// <reference path="./Svr/index.d.ts" />
/// <reference path="./TabRule/index.d.ts" />
/// <reference path="./TabRules/index.d.ts" />
/// <reference path="./Time/index.d.ts" />
/// <reference path="./Upload/index.d.ts" />
/// <reference path="./Url/index.d.ts" />
/// <reference path="./Util/index.d.ts" />
/// <reference path="./VueEx/index.d.ts" />
/// <reference path="./Att/index.d.ts" />
/// <reference path="./AttBase/index.d.ts" />

declare global {
  declare namespace cx {
    export { AttBase } from './AttBase';
    export { AttFactory } from './AttFactory';
    export { base } from './Base';
    export { array } from './Array/index';
    export { CacheLru } from './CacheLru';
    export { CodeFactory } from './CodeFactory';
    export { Color } from './Color';
    export { column } from './Column';
    export { config } from './Config';
    export { consts } from './Consts';
    export { converter } from './Converter';
    export { date } from './CxDate';
    export { data } from './Data';
    export { datafmt } from './DataFmt';
    export { datagrid } from './DataGrid';
    export { datetime } from './DateTime';
    export { dc } from './DC';
    export { dom } from './Dom';
    export { Entities } from './Entities';
    export { events } from './Events';
    export { ExpExcel } from './ExpExcel';
    export { Fields } from './Fields';
    export { file } from './File';
    export { FileLoader } from './FileLoader';
    export { form } from './Form';
    export { formatter } from './Formatter';
    export { http } from './Http';
    export { i18n } from './i18n';
    export { ImageLoader } from './ImageLoader';
    export { IndexDb } from './IndexDb';
    export { InitRunenv } from './InitRunenv';
    export { Layers } from './Layers';
    export { localCache } from './LocalCache';
    export { menu } from './Menu';
    export { parser } from './Parser';
    export { plug } from './Plug';
    export { Plugins } from './Plugins';
    export { ProcAssign } from './ProcAssign';
    export { regex } from './RegEx';
    export { router } from './Router';
    export { run } from './Run';
    export { service } from './Service';
    export { SqlEx, SqlColEx } from './SqlEx';
    export { sqlexp } from './SqlExp';
    export { Stack } from './Stack';
    export { svr } from './Svr';
    export { TabRule } from './TabRule';
    export { TabRules } from './TabRules';
    export { time } from './Time';
    export { upload } from './Upload';
    export { url } from './Url';
    export { util } from './Util';
    export { vueEx } from './VueEx';
    export { att } from './Att';
  }
  
  declare namespace $g {
    export * from './Global';
  }
}