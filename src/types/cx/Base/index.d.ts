/**
 * cx.base 类 - 基础工具类，提供了一系列基础功能函数
 */
declare namespace cx {
  declare namespace base {
    /**
     * Function或Caller调用
     * @param func - 要调用的函数或Caller
     * @param args - 函数参数，参数个数不限
     * @returns 函数调用的返回值
     * @example
     * ```javascript
     * // 调用函数
     * const fn = (a, b) => a + b
     * cx.base.call(fn, '1', '2') // 3
     * 
     * // 调用Caller
     * const caller = {
     *   method: function(x) { return x * 2 }
     * }
     * cx.base.call(caller.method, '5') // 10
     * ```
     */
    function call(func: Function | Object, ...args: any[]): any;

    /**
     * 判断val是否为数组
     * @param val - 要判断的值
     * @returns 是否为数组
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.isArr([1, 2, 3])  // 返回 true
     * cx.base.isArr('array')    // 返回 false
     * cx.base.isArr({})         // 返回 false
     * cx.base.isArr(null)       // 返回 false
     * ```
     */
    function isArr(val: any): boolean;

    /**
     * 判断val是否为字符串
     * @param val - 要判断的值
     * @returns 是否为字符串类型
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.isStr('hello')        // 返回 true
     * cx.base.isStr('')             // 返回 true
     * cx.base.isStr(123)            // 返回 false
     * cx.base.isStr(null)           // 返回 false
     * cx.base.isStr(undefined)      // 返回 false
     * ```
     */
    function isStr(val: any): boolean;

    /**
     * 判断val是否为数字类型
     * @param val - 要判断的值
     * @returns 是否为数字类型
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.isNum(123)           // 返回 true
     * cx.base.isNum(3.14)          // 返回 true
     * cx.base.isNum('123')         // 返回 false
     * cx.base.isNum(null)          // 返回 false
     * cx.base.isNum(NaN)           // 返回 true
     * ```
     */
    function isNum(val: any): boolean;

    /**
     * 判断val是否为对象类型
     * @param val - 要判断的值
     * @returns 是否为对象类型
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.isObj({})             // 返回 true
     * cx.base.isObj(new Object())   // 返回 true
     * cx.base.isObj([])             // 返回 false
     * cx.base.isObj(null)           // 返回 false
     * cx.base.isObj(123)            // 返回 false
     * ```
     */
    function isObj(val: any): boolean;

    /**
     * 判断val是否为函数类型
     * @param val - 要判断的值
     * @returns 是否为函数类型
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.isFunc(function(){})  // 返回 true
     * cx.base.isFunc(() => {})      // 返回 true
     * cx.base.isFunc(null)          // 返回 false
     * cx.base.isFunc({})            // 返回 false
     * ```
     */
    function isFunc(val: any): boolean;

    /**
     * 判断val是否为日期类型
     * @param val - 要判断的值
     * @returns 是否为日期类型
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.isDate(new Date())     // 返回 true
     * cx.base.isDate('2023-01-01')   // 返回 false
     * cx.base.isDate(1234567890)     // 返回 false
     * cx.base.isDate(null)           // 返回 false
     * ```
     */
    function isDate(val: any): boolean;

    /**
     * 深拷贝对象到目标对象，只有数组和对象会递归深拷贝
     * @param target - 目标对象
     * @param args - 源对象列表
     * @returns 目标对象
     * @example
     * ```javascript
     * // 基本深拷贝
     * const target = { a: 1 }
     * const source = { b: 2, c: { d: 3 } }
     * cx.base.deepCopy(target, source)
     * // target = { a: 1, b: 2, c: { d: 3 } }
     * 
     * // 多个源对象
     * const target = {}
     * const source1 = { a: 1 }
     * const source2 = { b: 2 }
     * const source3 = { c: [1, 2, 3] }
     * cx.base.deepCopy(target, source1, source2, source3)
     * // target = { a: 1, b: 2, c: [1, 2, 3] }
     * ```
     */
    function deepCopy(target: Object, ...args: Object[]): Object;

    /**
     * 目标对象将承对象
     * @param target - 目标对象
     * @param args - 源对象列表
     * @returns 目标对象
     * @example
     * ```javascript
     * // 基本使用
     * const target = { a: 1 }
     * const source = { b: 2 }
     * cx.base.extend(target, source)
     * // target = { a: 1, b: 2 }
     * 
     * // 多个源对象
     * const target = {}
     * const source1 = { a: 1 }
     * const source2 = { b: 2 }
     * cx.base.extend(target, source1, source2)
     * // target = { a: 1, b: 2 }
     * ```
     */
    function extend(target: Object, ...args: Object[]): Object;

    /**
     * 产生一个新的ID
     * @returns 新的ID
     * @example
     * ```javascript
     * // 基本使用
     * const id = cx.base.nextId()  // 返回一个新的ID
     * ```
     */
    function nextId(): string;

    /**
     * 防抖事件触发，在一段时间内只执行最后一次
     * @param ctx - 存储防抖状态的上下文环境
     * @param func - 要执行的函数
     * @param evtName - 事件名称，默认为'def'
     * @param delay - 延迟时间，默认为500毫秒
     * @returns 防抖处理后的函数
     * @example
     * ```javascript
     * // 基本用法
     * class MyComponent {
     *   constructor() {
     *     this.handleInput = cx.base.debounce(this, this.onInput)
     *   }
     *   
     *   onInput(e) {
     *     console.log('input value:', e.target.value)
     *   }
     * }
     * 
     * // 多个防抖函数
     * class MyComponent {
     *   constructor() {
     *     this.handleInput = cx.base.debounce(this, this.onInput, 'input', 300)
     *     this.handleScroll = cx.base.debounce(this, this.onScroll, 'scroll', 100)
     *   }
     * }
     * ```
     */
    function debounce(ctx: Object, func: Function, evtName?: string, delay?: number): Function;

    /**
     * 节流，每隔一定时间内，触发一次
     * @param ctx - 节流处理的上下文环境
     * @param func - 事件回调函数
     * @param evtName - 事件标识，默认为'def'
     * @param delay - 节流间隔时间，单位毫秒，默认500ms
     * @returns 节流处理后的函数
     * @example
     * ```javascript
     * // 基本用法
     * const handler = cx.base.throttle(this, () => {
     *   console.log('throttled function called')
     * })
     * 
     * // 指定事件名和延迟时间
     * const handler2 = cx.base.throttle(this, () => {
     *   console.log('throttled with custom config')
     * }, 'myEvent', 1000)
     * ```
     */
    function throttle(ctx: Object, func: Function, evtName?: string, delay?: number): Function;

    /**
     * 显示信息
     * @param msg - 要显示的信息
     * @param type - 消息类型，可选值：'success'|'warning'|'info'|'error'
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.showMsg('操作成功')  // 显示普通提示信息
     * cx.base.showMsg('操作成功', 'success')  // 显示成功提示
     * cx.base.showMsg('请注意', 'warning')  // 显示警告提示
     * cx.base.showMsg('提示信息', 'info')  // 显示信息提示
     * cx.base.showMsg('出错了', 'error')  // 显示错误提示
     * ```
     */
    function showMsg(msg: string, type?: 'success' | 'warning' | 'info' | 'error'): void;

    /**
     * 字符串转字节数组
     * @param str - 要转换的字符串
     * @returns 字节数组
     * @example
     * ```javascript
     * // 基本使用
     * const bytes = cx.base.strToBytes('Hello')  // 返回字节数组
     * ```
     */
    function strToBytes(str: string): number[];

    /**
     * 字节数组转字符串 
     * @param bytes - 字节字符串
     * @returns 转换后的字符串
     * @example
     * ```javascript
     * // 将字节字符串转换为字节数组
     * const byteArray = cx.base.bytesToStr('48656C6C6F') // 返回字节数组
     * ```
     */
    function bytesToStr(bytes: string): string;

    /**
     * 构造树形结构数据
     * @param data - 扁平数据数组
     * @param opts - 配置选项
     * @returns 树形结构数据
     * @example
     * ```javascript
     * // 基本使用
     * const data = [
     *   { id: 1, name: '节点1', parentId: 0 },
     *   { id: 2, name: '节点2', parentId: 1 },
     *   { id: 3, name: '节点3', parentId: 1 }
     * ]
     * const tree = cx.base.makeTreeData(data, {
     *   idField: 'id',
     *   pidField: 'parentId',
     *   rootPid: 0
     * })
     * ```
     */
    function makeTreeData(data: any[], opts: {
      idField?: string;
      pidField?: string;
      rootPid?: any;
      [key: string]: any;
    }): any[];

    /**
     * 显示错误信息
     * @param msg - 错误信息
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.showErrMsg('操作失败')  // 显示错误信息
     * ```
     */
    function showErrMsg(msg: string): void;

    /**
     * 确认信息
     * @param msg - 确认信息
     * @returns Promise对象，确认时resolve，取消时reject
     * @example
     * ```javascript
     * // 基本用法
     * try {
     *   await cx.base.cfmMsg('确认删除这条记录吗？')
     *   // 用户点击了确认
     *   await deleteRecord()
     * } catch {
     *   // 用户点击了取消
     *   console.log('用户取消了操作')
     * }
     * 
     * // 链式调用
     * cx.base.cfmMsg('是否继续？')
     *   .then(() => {
     *     // 用户点击了确认
     *     console.log('继续操作')
     *   })
     *   .catch(() => {
     *     // 用户点击了取消
     *     console.log('取消操作')
     *   })
     * ```
     */
    function cfmMsg(msg: string): Promise<void>;

    /**
     * 字符串调用
     * @param func - 函数字符串，可以'()'结尾，也可以没有'()'
     * @param args - 参数数组
     * @returns 函数调用结果
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.execute('Math.max', [1, 2, 3]) // 返回 3
     * 
     * // 带括号的函数名
     * cx.base.execute('Math.min()', [4, 5, 6]) // 返回 4
     * 
     * // 自定义函数
     * function test(a, b) { return a + b }
     * cx.base.execute('test', [1, 2]) // 返回 3
     * ```
     */
    function execute(func: string, args: any[]): any;

    /**
     * 如果给出的值为未定义，则给出缺省值
     * @param value - 要判断的值
     * @param defValue - 默认值
     * @returns 最终值
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.defVal(undefined, 1) // 返回 1
     * cx.base.defVal(null, 2)      // 返回 null
     * cx.base.defVal(0, 3)         // 返回 0
     * cx.base.defVal('', 4)        // 返回 ''
     * ```
     */
    function defVal<T>(value: T | undefined, defValue: T): T;

    /**
     * 根据数据类型的名称，取对应的数据类型代码
     * @param typeName - 类型名称
     * @returns 对应的cx.consts.DT_常量值
     * @example
     * ```javascript
     * // 获取各种类型的代码
     * cx.base.dataType('int')      // 返回 cx.consts.DT_INT
     * cx.base.dataType('float')    // 返回 cx.consts.DT_REAL
     * cx.base.dataType('string')   // 返回 cx.consts.DT_STRING
     * cx.base.dataType('date')     // 返回 cx.consts.DT_DATE
     * cx.base.dataType('datetime') // 返回 cx.consts.DT_DATETIME
     * cx.base.dataType('boolean')  // 返回 cx.consts.DT_BOOL
     * ```
     */
    function dataType(typeName: string): number;

    /**
     * 判断val(对象或属性)是否存在obj(数组或对象)中
     * @param obj - 数组或对象
     * @param val - 要查找的对象或属性
     * @returns 是否存在
     * @example
     * ```javascript
     * // 数组包含判断
     * const arr = [1, 2, 3]
     * cx.base.contains(arr, 2) // true
     * 
     * // 对象属性判断
     * const obj = { name: 'test', value: 100 }
     * cx.base.contains(obj, 'name') // true
     * 
     * // 对象值判断
     * const items = [{ id: 1 }, { id: 2 }]
     * cx.base.contains(items, { id: 1 }) // true
     * ```
     */
    function contains(obj: any[] | Object, val: any): boolean;

    /**
     * 比较v1和v2两个版本的大小
     * @param v1 - 版本号1
     * @param v2 - 版本号2
     * @returns 比较结果：0表示相等，1表示v1大于v2，-1表示v1小于v2
     * @example
     * ```javascript
     * // 字符串版本号比较
     * cx.base.compareVersions('1.1.2', '1.1.1') // 1
     * cx.base.compareVersions('1.1.2', '1.1.2') // 0
     * cx.base.compareVersions('1.1.2', '1.2.0') // -1
     * 
     * // 数值版本号比较
     * cx.base.compareVersions(1.12, 1.2) // -1
     * ```
     */
    function compareVersions(v1: string | number, v2: string | number): -1 | 0 | 1;

    /**
     * 设置计时器，来监测条件满足时执行回调
     * @param isReady - 条件判断函数
     * @param callBack - 满足条件时的回调函数
     * @param opts - 配置选项
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.watch(
     *   () => someCondition === true,  // 条件判断
     *   () => console.log('条件满足'),  // 回调函数
     *   {
     *     time: 500,      // 检查间隔500ms
     *     maxTime: 5000,  // 最长等待5秒
     *     outBack: () => console.log('超时未满足条件')
     *   }
     * )
     * ```
     */
    function watch(
      isReady: () => boolean,
      callBack: () => void,
      opts?: {
        time?: number;
        maxTime?: number;
        outBack?: () => void;
      }
    ): void;

    /**
     * 错误处理
     * @param error - 错误对象
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.onError({ message: '发生错误' })
     * ```
     */
    function onError(error: { message: string; [key: string]: any }): void;

    /**
     * 刷新当前页面
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.refreshPage()  // 刷新当前页面
     * ```
     */
    function refreshPage(): void;

    /**
     * 新建类实例对象，如果是类型则创建，如果是对象则返回
     * @param classOrObj - 类名或对象
     * @returns 类实例或对象
     * @example
     * ```javascript
     * // 基本使用
     * const obj = cx.base.newObj('MyClass')  // 创建MyClass的实例
     * ```
     */
    function newObj(classOrObj: string | Object): Object;

    /**
     * 判断一个字符串是否是语言包中的项。如果是则返回语言包中的值，否则返回原值
     * @param str - 要判断的字符串
     * @returns 语言包中的值或原字符串
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.locOrStr('test')  // 如果'test'在语言包中存在，返回对应的翻译，否则返回'test'
     * ```
     */
    function locOrStr(str: string): string;

    /**
     * 产生一个新的z-index
     * @returns 新的z-index值
     * @example
     * ```javascript
     * // 基本使用
     * const zIndex = cx.base.nextZIndex()  // 返回一个新的z-index值
     * ```
     */
    function nextZIndex(): number;

    /**
     * 根据插件加载模块插件
     * @param pluginName - 插件名称
     * @returns Promise对象，resolve时返回加载的模块
     * @example
     * ```javascript
     * // 基本使用
     * const module = await cx.base.loadModuleByPlug('myPlugin')
     * ```
     */
    function loadModuleByPlug(pluginName: string): Promise<any>;

    /**
     * 加载指定URL的模块
     * @param url - 模块的URL
     * @returns Promise对象，resolve时返回加载的模块记录
     * @example
     * ```javascript
     * // 基本使用
     * await cx.base.loadModule('/path/to/module.js')
     * 
     * // 处理加载错误
     * try {
     *   await cx.base.loadModule('/invalid/path.js')
     * } catch (err) {
     *   console.error('模块加载失败:', err)
     * }
     * ```
     */
    function loadModule(url: string): Promise<any>;

    /**
     * 判断val是否为null
     * @param val - 要判断的值
     * @returns 是否为null
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.isNull(null)          // 返回 true
     * cx.base.isNull(undefined)     // 返回 false
     * cx.base.isNull({})            // 返回 false
     * cx.base.isNull([])            // 返回 false
     * cx.base.isNull('')            // 返回 false
     * cx.base.isNull(0)             // 返回 false
     * ```
     */
    function isNull(val: any): boolean;

    /**
     * 判断val是否不为null
     * @param val - 要判断的值
     * @returns 是否不为null
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.isNNull({})           // 返回 true
     * cx.base.isNNull([])           // 返回 true
     * cx.base.isNNull('')           // 返回 true
     * cx.base.isNNull(0)            // 返回 true
     * cx.base.isNNull(null)         // 返回 false
     * cx.base.isNNull(undefined)    // 返回 true
     * ```
     */
    function isNNull(val: any): boolean;

    /**
     * 判断是否Boolean类型
     * @param val - 要判断的值
     * @returns 是否为Boolean类型
     * @example
     * ```javascript
     * // 基本使用
     * cx.base.isBoolean(true)     // 返回 true
     * cx.base.isBoolean(false)    // 返回 true
     * cx.base.isBoolean(1)        // 返回 false
     * cx.base.isBoolean('true')   // 返回 false
     * cx.base.isBoolean(null)     // 返回 false
     * ```
     */
    function isBoolean(val: any): boolean;
  }
}