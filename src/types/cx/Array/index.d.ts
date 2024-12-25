declare namespace cx {
  declare class array {
     /**
   * 添加多个元素到数组
   * @param {Array<any>} arr - 目标数组
   * @param {...any} elements - 要添加的元素列表
   * @returns {Object} 返回 this
   * @example
   * let arr = [1, 2];
   * cx.array.append(arr, 3, 4, 5);
   * // arr 现在是 [1, 2, 3, 4, 5]
   */
  static append(arr: Array<any>, ...elements: any[]): Object;

  /**
   * 添加数组中的元素到数组
   * @param {Array<any>} arr - 目标数组
   * @param {Array<any>} src - 源数组，其中的元素将被添加到目标数组
   * @returns {Object} 返回 this
   * @example
   * let arr1 = [1, 2];
   * let arr2 = [3, 4, 5];
   * cx.array.appendArr(arr1, arr2);
   * // arr1 现在是 [1, 2, 3, 4, 5]
   */
  static appendArr(arr: Array<any>, src: Array<any>): Object;

  /**
   * 清空数组
   * @param {Array<any>} arr - 要清空的数组
   * @returns {Object} 返回 this
   * @example
   * let arr = [1, 2, 3, 4, 5];
   * cx.array.clear(arr);
   * // arr 现在是 []
   */
  static clear(arr: Array<any>): Object;

  /**
   * 数组去重
   * @param {Array<any>} arr - 要去重的数组
   * @returns {Object} 返回 this
   * @example
   * let arr = [1, 2, 2, 3, 3, 3, 4];
   * cx.array.derepeat(arr);
   * // arr 现在是 [1, 2, 3, 4]
   */
  static derepeat(arr: Array<any>): Object;

  /**
   * 根据指定键值去重
   * @param {Array<any>} arr - 要去重的数组
   * @param {string} key - 用于去重的键名
   * @returns {Object} 返回 this
   * @example
   * let arr = [
   *   {id: 1, name: 'a'},
   *   {id: 2, name: 'b'},
   *   {id: 1, name: 'c'}
   * ];
   * cx.array.derepeatByKey(arr, 'id');
   */
  static derepeatByKey(arr: Array<any>, key: string): Object;

  /**
   * 根据多个键值去重
   * @param {Array<any>} arr - 要去重的数组
   * @param {string[]} keys - 用于去重的键名数组
   * @returns {Object} 返回 this
   * @example
   * let arr = [
   *   {id: 1, type: 'A', name: 'a'},
   *   {id: 1, type: 'B', name: 'b'},
   *   {id: 1, type: 'A', name: 'c'}
   * ];
   * cx.array.derepeatByKeys(arr, ['id', 'type']);
   */
  static derepeatByKeys(arr: Array<any>, keys: string[]): Object;

  /**
   * 遍历数组
   * @param {Array<any>} arr - 要遍历的数组
   * @param {Function} callback - 回调函数，格式为 function(item, index, array)
   * @param {Object} [context] - 回调函数执行时的上下文对象
   * @returns {void}
   * @example
   * let arr = [1, 2, 3];
   * cx.array.forEach(arr, function(item, index) {
   *   console.log(`Index ${index}: ${item}`);
   * });
   */
  static forEach(arr: Array<any>, callback: (item: any, index: number, array: Array<any>) => void, context?: Object): void;

  /**
   * 获取单个元素
   * @param {Array<any>} arr - 要搜索的数组
   * @param {string} key - 要匹配的键名
   * @param {any} value - 要匹配的值
   * @returns {Object | null} 返回匹配的第一个元素，如果没有找到则返回null
   * @example
   * let arr = [
   *   {id: 1, name: 'a'},
   *   {id: 2, name: 'b'},
   *   {id: 3, name: 'c'}
   * ];
   * let result = cx.array.get1(arr, 'id', 2);
   * // result 是 {id: 2, name: 'b'}
   */
  static get1(arr: Array<any>, key: string, value: any): Object | null;

  /**
   * 获取多个元素
   * @param {Array<any>} arr - 要搜索的数组
   * @param {string} key - 要匹配的键名
   * @param {any} value - 要匹配的值
   * @returns {Array<any>} 返回包含所有匹配元素的数组
   * @example
   * let arr = [
   *   {type: 'A', value: 1},
   *   {type: 'B', value: 2},
   *   {type: 'A', value: 3}
   * ];
   * let result = cx.array.gets(arr, 'type', 'A');
   * // result 是 [{type: 'A', value: 1}, {type: 'A', value: 3}]
   */
  static gets(arr: Array<any>, key: string, value: any): Array<any>;

  /**
   * 模糊获取元素
   * @param {Array<any>} arr - 要搜索的数组
   * @param {string} key - 要匹配的键名
   * @param {string} value - 要模糊匹配的字符串
   * @returns {Array<any>} 返回包含所有模糊匹配元素的数组
   * @example
   * let arr = [
   *   {name: 'apple', price: 1},
   *   {name: 'banana', price: 2},
   *   {name: 'pineapple', price: 3}
   * ];
   * let result = cx.array.getsFuz(arr, 'name', 'apple');
   * // result 是 [{name: 'apple', price: 1}, {name: 'pineapple', price: 3}]
   */
  static getsFuz(arr: Array<any>, key: string, value: string): Array<any>;

  /**
   * 获取不匹配的元素
   * @param {Array<any>} arr - 要搜索的数组
   * @param {string} key - 要匹配的键名
   * @param {any} value - 不需要匹配的值
   * @returns {Array<any>} 返回包含所有不匹配元素的数组
   * @example
   * let arr = [
   *   {type: 'A', value: 1},
   *   {type: 'B', value: 2},
   *   {type: 'A', value: 3}
   * ];
   * let result = cx.array.getsNot(arr, 'type', 'A');
   * // result 是 [{type: 'B', value: 2}]
   */
  static getsNot(arr: Array<any>, key: string, value: any): Array<any>;

  /**
   * 模糊获不匹配的元素
   * @param {Array<any>} arr - 要搜索的数组
   * @param {string} search - 要模糊匹配的搜索字符串
   * @param {string} [key] - 如果数组包含对象，指定要搜索的键名
   * @returns {Array<any>} 返回包含所有不匹配元素的数组
   * @example
   * const array = ['foo', 'bar', 'baz'];
   * const result = cx.array.getsNotFuz(array, 'ba');
   * // result 是 ['foo']
   * 
   * const objects = [{ name: 'foo' }, { name: 'bar' }, { name: 'baz' }];
   * const result2 = cx.array.getsNotFuz(objects, 'ba', 'name');
   * // result2 是 [{ name: 'foo' }]
   */
  static getsNotFuz(arr: Array<any>, search: string, key?: string): Array<any>;

  /**
   * 判断是否包含元素
   * @param {Array<any>} arr - 要搜索的数组
   * @param {any} val - 要查找的值
   * @returns {boolean} 如果数组包含指定元素返回true，否则返回false
   * @example
   * let arr = [1, 2, 3, 4, 5];
   * let hasThree = cx.array.has(arr, 3);
   * // hasThree 是 true
   * let hasSix = cx.array.has(arr, 6);
   * // hasSix 是 false
   */
  static has(arr: Array<any>, val: any): boolean;

  /**
   * 获取元素索引
   * @param {Array<any>} arr - 要搜索的数组
   * @param {any} val - 要查找的值
   * @returns {number} 返回元素在数组中的索引位置，如果未找到则返回-1
   * @example
   * let arr = ['a', 'b', 'c', 'd'];
   * let index = cx.array.indexOf(arr, 'c');
   * // index 是 2
   * let notFound = cx.array.indexOf(arr, 'e');
   * // notFound 是 -1
   */
  static indexOf(arr: Array<any>, val: any): number;

  /**
   * 插入元素
   * @param {Array<any>} arr - 目标数组
   * @param {any} obj - 要插入的对象
   * @returns {Object} 返回 this
   * @example
   * let arr = [1, 2, 3];
   * cx.array.insert(arr, 0);
   * // arr 现在是 [0, 1, 2, 3]
   */
  static insert(arr: Array<any>, obj: any): Object;

  /**
   * 在指定位置插入元素
   * @param {Array<any>} arr - 目标数组
   * @param {any} obj - 要插入的对象
   * @param {number} idx - 要插入的位置索引
   * @returns {Object} 返回 this
   * @example
   * let arr = [1, 2, 4, 5];
   * cx.array.insertAt(arr, 3, 2);
   * // arr 现在是 [1, 2, 3, 4, 5]
   */
  static insertAt(arr: Array<any>, obj: any, idx: number): Object;

  /**
   * 判断数组是否为空
   * @param {Array<any>} arr - 要检查的数组
   * @returns {boolean} 如果数组为空返回true，否则返回false
   * @example
   * let arr1 = [];
   * let isEmpty1 = cx.array.isEmpty(arr1);
   * // isEmpty1 是 true
   * 
   * let arr2 = [1, 2, 3];
   * let isEmpty2 = cx.array.isEmpty(arr2);
   * // isEmpty2 是 false
   */
  static isEmpty(arr: Array<any>): boolean;

  /**
   * 列表转换为映射
   * @param {Array<any>} arr - 源数组
   * @param {string} key - 用作映射键的属性名
   * @returns {Object} 返回转换后的映射对象
   * @example
   * let arr = [
   *   {id: 'a', value: 1},
   *   {id: 'b', value: 2},
   *   {id: 'c', value: 3}
   * ];
   * let map = cx.array.listToMap(arr, 'id');
   */
  static listToMap(arr: Array<any>, key: string): { [key: string]: any };

  /**
   * 根据多个键值将列表转换为映射
   * @param {Array<any>} arr - 源数组
   * @param {string[]} keys - 用作映射键的属性名数组
   * @returns {Object} 返回转换后的映射对象，键名为多个属性值的组合
   * @example
   * let arr = [
   *   {id: 1, type: 'A', value: 100},
   *   {id: 1, type: 'B', value: 200},
   *   {id: 2, type: 'A', value: 300}
   * ];
   * let map = cx.array.listToMapByKeys(arr, ['id', 'type']);
   */
  static listToMapByKeys(arr: Array<any>, keys: string[]): { [key: string]: any };

  /**
   * 创建数组
   * @param {number} length - 数组的长度
   * @param {any} [defaultValue] - 数组元素的默认值，如果不指定则为undefined
   * @returns {Array<any>} 返回创建的新数组
   * @example
   * // 创建长度为 3 的数组，不指定默认值
   * let arr1 = cx.array.makeArr(3);
   * // arr1 是 [undefined, undefined, undefined]
   * 
   * // 创建长度为 3 的数组，指定默认值为 0
   * let arr2 = cx.array.makeArr(3, 0);
   * // arr2 是 [0, 0, 0]
   * 
   * // 创建长度为 2 的数组，指定默认值为对象
   * let arr3 = cx.array.makeArr(2, {value: 0});
   * // arr3 是 [{value: 0}, {value: 0}]
   */
  static makeArr(length: number, defaultValue?: any): Array<any>;

  /**
   * 合并数组
   * @param {Array<any>} arr - 目标数组，将��修改
   * @param {Array<any>} arr2 - 源数组，其元素将被合并到目标数组
   * @returns {Object} 返回 this
   * @example
   * let arr1 = [1, 2];
   * let arr2 = [3, 4, 5];
   * cx.array.merge(arr1, arr2);
   * // arr1 现在是 [1, 2, 3, 4, 5]
   * // arr2 保持不变
   */
  static merge(arr: Array<any>, arr2: Array<any>): Object;

  /**
   * 从数组中移除指定索引位置的元素
   * @param {Array<T>} array - 要操作的数组
   * @param {number} index - 要移除的元素索引
   * @returns {Array<T>} 返回移除元素后的数组
   * @example
   * const arr = [1, 2, 3, 4, 5];
   * array.remove(arr, 2);
   * // 返回 [1, 2, 4, 5]
   */
  static remove<T>(array: T[], index: number): T[];

  /**
   * 移除指定元素
   * @param {Array<any>} arr - 目标数组
   * @param {any} element - 要移除的元素
   * @returns {Object} 返回 this
   * @example
   * let arr = ['a', 'b', 'c', 'b', 'd'];
   * cx.array.removeElement(arr, 'b');
   * // arr 现在是 ['a', 'c', 'b', 'd']
   * // 注意：只移除第一个匹配的元素
   */
  static removeElement(arr: Array<any>, element: any): Object;

  /**
   * 分割数组
   * @param {Array<T>} arr - 要分割的数组
   * @param {number} size - 每个小数组的大小
   * @returns {Array<Array<T>>} 返回分割���的数组集合
   * @example
   * let arr = [1, 2, 3, 4, 5, 6, 7];
   * let result = cx.array.splitArray(arr, 3);
   * // result 是 [[1, 2, 3], [4, 5, 6], [7]]
   */
  static splitArray<T>(arr: Array<T>, size: number): Array<Array<T>>;

  /**
   * 转换为字符串
   * @param {Array<any>} arr - 要转换的数组
   * @returns {string} 返回数组转换后的字符串
   * @example
   * let arr = [1, 2, 3, 4, 5];
   * let str = cx.array.toString(arr);
   * // str 是 "1,2,3,4,5"
   * 
   * let arr2 = ['hello', 'world'];
   * let str2 = cx.array.toString(arr2);
   * // str2 是 "hello,world"
   */
  static toString(arr: Array<any>): string;

  /**
   * 更新数组
   * @param {Array<any>} arr - 目标数组
   * @param {number} index - 要更新的元素索引
   * @param {any} element - 新的元素值
   * @returns {Object} 返回 this
   * @example
   * let arr = ['a', 'b', 'c', 'd'];
   * cx.array.update(arr, 1, 'x');
   * // arr 现在是 ['a', 'x', 'c', 'd']
   */
  static update(arr: Array<any>, index: number, element: any): Object;
  }
} 