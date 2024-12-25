declare namespace cx {
  /**
   * 栈数据结构的实现
   */
  class Stack<T = any> {
    /**
     * 创建栈实例
     * @param options 配置选项
     * @example
     * ```ts
     * const stack = new cx.Stack({
     *   maxSize: 5 // 限制栈大小为5
     * });
     * ```
     */
    constructor(options?: {
      /** 栈大小, 加入<1, 则不限制栈大小, 默认值: 0 */
      maxSize?: number;
    });

    /**
     * 清空栈
     * @example
     * ```ts
     * const stack = new cx.Stack();
     * stack.push({id: 1});
     * stack.push({id: 2});
     * 
     * // 清空栈
     * stack.clear();
     * console.log('栈大小:', stack.size()); // 输出: 0
     * ```
     */
    clear(): void;

    /**
     * 销毁对象
     * @example
     * ```ts
     * const stack = new cx.Stack();
     * stack.push({id: 1});
     * 
     * // 销毁栈对象
     * stack.destroy();
     * 
     * // 之后不能继续使用此对象
     * // stack.push({id: 2}); // 错误:对象已销毁
     * ```
     */
    destroy(): void;

    /**
     * 取栈中全部元素(不弹栈)
     * @returns 栈中所有元素的数组
     * @example
     * ```ts
     * const stack = new cx.Stack();
     * stack.push({id: 1});
     * stack.push({id: 2});
     * stack.push({id: 3});
     * 
     * // 获取所有元素
     * const allItems = stack.getAll();
     * console.log('所有元素:', allItems);
     * // 输出: [{id: 3}, {id: 2}, {id: 1}]
     * ```
     */
    getAll(): T[];

    /**
     * 取栈顶元素(不弹栈)
     * @returns 栈顶元素
     * @example
     * ```ts
     * const stack = new cx.Stack();
     * stack.push({id: 1});
     * stack.push({id: 2});
     * 
     * // 获取栈顶元素
     * const topItem = stack.getTop();
     * console.log('栈顶元素:', topItem);
     * // 输出: {id: 2}
     * ```
     */
    getTop(): T | undefined;

    /**
     * 弹栈,将栈顶元素弹出
     * @returns 弹出的栈顶元素
     * @example
     * ```ts
     * const stack = new cx.Stack();
     * stack.push({id: 1});
     * stack.push({id: 2});
     * 
     * // 弹出栈顶元素
     * const item = stack.pop();
     * console.log('弹出元素:', item);
     * // 输出: {id: 2}
     * ```
     */
    pop(): T | undefined;

    /**
     * 压栈
     * @param obj 待压栈的对象
     * @example
     * ```ts
     * const stack = new cx.Stack({
     *   maxSize: 2 // 限制栈大小2
     * });
     * 
     * // 压入元素
     * stack.push({id: 1});
     * stack.push({id: 2});
     * 
     * // 如果超出maxSize限制,则无法继续压栈
     * stack.push({id: 3}); // 无效
     * ```
     */
    push(obj: T): void;

    /**
     * 取栈中元素个数
     * @returns 栈中元素的数量
     * @example
     * ```ts
     * const stack = new cx.Stack();
     * console.log('初始大小:', stack.size()); // 输出: 0
     * 
     * stack.push({id: 1});
     * stack.push({id: 2});
     * console.log('压入后大小:', stack.size()); // 输出: 2
     * ```
     */
    size(): number;
  }
} 