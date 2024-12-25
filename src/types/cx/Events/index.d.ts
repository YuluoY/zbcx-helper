declare namespace cx {
    namespace events {
        /**
         * 激活监听
         * @param {*} id - id标识
         * @param {Array} dataTypes - 数据类型列表
         * @param {Object} [obsTar] - 观察目标对象
         * @returns {Object} 返回 this 对象
         * @example
         * ```javascript
         * // 激活特定类型的监听
         * cx.events.active('myListener', ['userLogin', 'userLogout']);
         * ```
         */
        function active(id: any, dataTypes: Array<string>, obsTar?: Object): Object;

        /**
         * 激活全部监听
         * @param {Object} [obsTar] - 观察目标对象
         * @returns {Object} 返回 this 对象
         * @example
         * ```javascript
         * // 激活所有监听器
         * cx.events.activeAll();
         * ```
         */
        function activeAll(obsTar?: Object): Object;

        /**
         * 销毁事件对象
         * @example
         * ```javascript
         * cx.events.destroy();
         * ```
         */
        function destroy(): void;

        /**
         * 初始化事件系统
         * @returns {Object} 返回 this 对象
         * @example
         * ```javascript
         * cx.events.init();
         * ```
         */
        function init(): Object;

        /**
         * 保持监听激活
         * @param {*} id - id标识
         * @param {Array} dataTypes - 数据类型列表
         * @param {Object} [obsTar] - 观察目标对象
         * @returns {Object} 返回 this 对象
         * @example
         * ```javascript
         * cx.events.keepActive('myListener', ['userLogin', 'userLogout']);
         * ```
         */
        function keepActive(id: any, dataTypes: Array<string>, obsTar?: Object): Object;

        /**
         * 监听消息
         * @param {*} id - id标识
         * @param {string} dataType - 数据类型
         * @param {Function} caller - 回调函数
         * @param {Object} [obsTar] - 观察目标对象
         * @returns {Object} 返回 this 对象
         * @example
         * ```javascript
         * cx.events.listen('myListener', 'userLogin', (data) => {
         *     console.log('用户登录:', data);
         * });
         * ```
         */
        function listen(id: any, dataType: string, caller: Function, obsTar?: Object): Object;

        /**
         * 发布消息
         * @param {string|number} dataType - 数据类型
         * @param {*} params - 调用回调函数的信息
         * @param {Object} [obsTar] - 观察目标对象
         * @returns {Object} 返回 this 对象
         * @example
         * ```javascript
         * cx.events.publish('userLogin', { userId: 123, username: 'admin' });
         * ```
         */
        function publish(dataType: string | number, params: any, obsTar?: Object): Object;

        /**
         * 订阅事件
         * @param {*} id - id标识
         * @param {string|number} dataType - 数据类型
         * @param {Function} caller - 回调函数
         * @param {Object} [obsTar] - 观察目标对象
         * @returns {Object} 返回 this 对象
         * @example
         * ```javascript
         * cx.events.subscribe('mySubscription', 'userLogin', (data) => {
         *     console.log('用户登录:', data);
         * });
         * ```
         */
        function subscribe(id: any, dataType: string | number, caller: Function, obsTar?: Object): Object;

        /**
         * 取消激活监听
         * @param {*} id - id标识
         * @param {Array} dataTypes - 数据类型列表
         * @param {Object} [obsTar] - 观察目标对象
         * @returns {Object} 返回 this 对象
         * @example
         * ```javascript
         * cx.events.unactive('myListener', ['userLogin', 'userLogout']);
         * ```
         */
        function unactive(id: any, dataTypes: Array<string>, obsTar?: Object): Object;

        /**
         * 取消监听消息
         * @param {*} id - id标识
         * @param {Object} [obsTar] - 观察目标对象
         * @param {string} dataType - 数据类型
         * @returns {Object} 返回 this 对象
         * @example
         * ```javascript
         * cx.events.unlisten('myListener', null, 'userLogin');
         * ```
         */
        function unlisten(id: any, obsTar: Object | null, dataType: string): Object;

        /**
         * 取消订阅事件
         * @param {*} id - id标识
         * @param {Object} [obsTar] - 观察目标对象
         * @param {string|number} dataType - 数据类型
         * @param {Function} caller - 回调函数
         * @returns {Object} 返回 this 对象
         * @example
         * ```javascript
         * cx.events.unsubscribe('loginSub', null, 'userLogin', handleUserLogin);
         * ```
         */
        function unsubscribe(id: any, obsTar: Object | null, dataType: string | number, caller: Function): Object;
    }
} 