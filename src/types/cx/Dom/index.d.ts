declare namespace cx {
    namespace dom {
        /**
         * 将DOM节点添加到父节点中
         * @param {Array<HTMLElement>|HTMLElement} children - 可以是数组，也可以是单个DOM节点
         * @param {HTMLElement} dom - 父节点DOM
         * @example
         * ```javascript
         * // 添加单个元素
         * const newDiv = cx.dom.create('div', 'my-class');
         * const container = cx.dom.byId('container');
         * cx.dom.append(newDiv, container);
         * 
         * // 添加多个元素
         * const items = ['项目1', '项目2'].map(item => 
         *     cx.dom.create('div', 'item', null, {innerHTML: item})
         * );
         * cx.dom.append(items, container);
         * ```
         */
        function append(children: Array<HTMLElement>|HTMLElement, dom: HTMLElement): void;

        /**
         * 禁用默认右键菜单
         * @example
         * ```javascript
         * // 禁用整个页面的默认右键菜单
         * cx.dom.banDefaultContextMenu();
         * ```
         */
        function banDefaultContextMenu(): void;

        /**
         * 获取body节点
         * @returns {HTMLElement} 返回document.body对象
         * @example
         * ```javascript
         * // 获取body元素
         * const bodyElement = cx.dom.body();
         * 
         * // 修改body背景色
         * cx.dom.body().style.backgroundColor = '#f0f0f0';
         * ```
         */
        function body(): HTMLElement;

        /**
         * 根据ID获取DOM节点
         * @param {string} id - 要获取的DOM节点的ID
         * @returns {HTMLElement|null} 找到的DOM节点。如果未找到则返回null
         * @example
         * ```javascript
         * // 获取单个元素
         * const myDiv = cx.dom.byId('myDiv');
         * if (myDiv) {
         *     myDiv.style.backgroundColor = 'red';
         * }
         * ```
         */
        function byId(id: string): HTMLElement | null;

        /**
         * 克隆DOM节点
         * @param {HTMLElement} dom - 要克隆的DOM节点
         * @returns {HTMLElement} 克隆后的DOM节点
         * @example
         * ```javascript
         * // 克隆简单元素
         * const original = cx.dom.byId('myElement');
         * const cloned = cx.dom.clone(original);
         * ```
         */
        function clone(dom: HTMLElement): HTMLElement;

        /**
         * 创建DOM节点
         * @param {string} type - 要创建的DOM节点类型，如 'div' 或 'a'
         * @param {string} className - CSS类名
         * @param {HTMLElement} [parentDom] - 父节点
         * @param {Object} [atts] - 节点属性对象，可以设置style等属性
         * @returns {HTMLElement} 创建的DOM节点
         * @example
         * ```javascript
         * // 创建带属性的元素
         * const button = cx.dom.create('button', 'btn-primary', null, {
         *     id: 'submitBtn',
         *     type: 'submit',
         *     textContent: '提交'
         * });
         * ```
         */
        function create(type: string, className?: string, parentDom?: HTMLElement, atts?: Record<string, any>): HTMLElement;

        /**
         * 用命名空间方式创建DOM节点
         * @param {string} NS - 命名空间URI
         * @param {string} type - 要创建的DOM节点类型
         * @param {string} className - CSS类名
         * @param {HTMLElement} parentDom - 父节点
         * @param {Object} atts - 节点属性对象，可以设置style等属性
         * @returns {HTMLElement} 创建的DOM节点
         * @example
         * ```javascript
         * // 创建SVG元素
         * const svgNS = 'http://www.w3.org/2000/svg';
         * const svg = cx.dom.createNS(svgNS, 'svg', 'chart', document.body, {
         *     width: '100',
         *     height: '100'
         * });
         * ```
         */
        function createNS(NS: string, type: string, className?: string, parentDom?: HTMLElement, atts?: Record<string, any>): HTMLElement;

        /**
         * 清空DOM节点的内部HTML内容
         * @param {HTMLElement} dom - 要清空内容的DOM节点
         * @example
         * ```javascript
         * const container = cx.dom.byId('container');
         * cx.dom.empty(container);
         * ```
         */
        function empty(dom: HTMLElement): void;

        /**
         * 获取DOM节点的位置和大小信息
         * @param {HTMLElement} dom - 要获取位置和大小的DOM节点
         * @returns {Object} 包含节点位置和大小信息的对象
         * @example
         * ```javascript
         * const element = cx.dom.byId('myElement');
         * const posSize = cx.dom.getPosSize(element);
         * console.log(posSize); // {x: 100, yx: 200, wx: 300, hx: 400}
         * ```
         */
        function getPosSize(dom: HTMLElement): {x: number, yx: number, wx: number, hx: number};

        /**
         * 获取DOM节点的大小
         * @param {HTMLElement} dom - 要获取大小的DOM节点
         * @returns {Object} 包含节点大小信息的对象
         * @example
         * ```javascript
         * const element = cx.dom.byId('myElement');
         * const size = cx.dom.getSize(element);
         * console.log(size); // {width: 100, height: 200}
         * ```
         */
        function getSize(dom: HTMLElement): {width: number, height: number};

        /**
         * 把像素px值转化为基于根节点字体大小的rem值
         * @param {number} wpx - 宽度，单位px。默认值为0
         * @returns {number} 转换成rem的值
         * @example
         * ```javascript
         * const remValue = cx.dom.pxToRem(32); // 返回2(rem)
         * ```
         */
        function pxToRem(wpx: number): number;

        /**
         * 根据浏览器高度，把px转为视口vh值
         * @param {number} hpx - 高度，单位px
         * @returns {number} 转换成vh的值
         * @example
         * ```javascript
         * const vh50 = cx.dom.pxToVh(500); // 返回50(vh)
         * ```
         */
        function pxToVh(hpx: number): number;

        /**
         * 根据浏览器宽度，把px转为视口vw值
         * @param {number} wpx - 宽度，单位px
         * @returns {number} 转换成vw的值
         * @example
         * ```javascript
         * const vw50 = cx.dom.pxToVw(500); // 返回50(vw)
         * ```
         */
        function pxToVw(wpx: number): number;

        /**
         * 删除DOM节点
         * @param {HTMLElement} dom - 要删除的DOM节点
         * @example
         * ```javascript
         * const element = cx.dom.byId('elementToRemove');
         * cx.dom.remove(element);
         * ```
         */
        function remove(dom: HTMLElement): void;

        /**
         * 根据视口和设计稿尺寸更新rem值
         * @param {Object} [config] - 配置对象，默认使用cx.config
         * @param {number} config.remToPx - 根节点字体大小，单位px
         * @param {number} config.designPx - ui页面设计稿尺寸，单位px
         * @param {boolean} [isObserveWin] - 是否监听窗口大小变化
         * @example
         * ```javascript
         * cx.dom.resizeLayout({
         *     remToPx: 100,  // 1rem = 100px
         *     designPx: 750  // 设计稿宽度为750px
         * }, true);
         * ```
         */
        function resizeLayout(config?: {remToPx: number, designPx: number}, isObserveWin?: boolean): void;

        /**
         * 设置DOM节点样式
         * @param {HTMLElement} dom - 要设置样式的DOM节点
         * @param {Object} styles - 样式对象，包含要设置的样式属性和值
         * @example
         * ```javascript
         * const element = cx.dom.byId('myElement');
         * cx.dom.setStyle(element, {
         *     width: '200px',
         *     height: '100px',
         *     backgroundColor: '#f0f0f0'
         * });
         * ```
         */
        function setStyle(dom: HTMLElement, styles: Record<string, any>): void;

        /**
         * 设置DOM节点的z-index值
         * @param {HTMLElement} dom - 要设置z-index的DOM节点
         * @param {number} zIndex - z-index值，用于控制元素的层叠顺序
         * @example
         * ```javascript
         * const element = cx.dom.byId('myElement');
         * cx.dom.setZIndex(element, 100);
         * ```
         */
        function setZIndex(dom: HTMLElement, zIndex: number): void;

        /**
         * 检测浏览器类型和版本
         * @returns {Object} 包含浏览器信息的对象
         * @example
         * ```javascript
         * const browser = cx.dom.testBrowser();
         * console.log('浏览器名称:', browser.name);
         * console.log('浏览器版本:', browser.version);
         * ```
         */
        function testBrowser(): {
            name: string;
            version: string;
            isIE: boolean;
            isEdge: boolean;
            isChrome: boolean;
            isFirefox: boolean;
            isSafari: boolean;
            isOpera: boolean;
        };

        /**
         * 检测浏览器是否支持WebGL
         * @param {Object} [param] - 参数对象
         * @param {boolean} [param.noWarn] - 检测后不警告。默认值为 false
         * @returns {boolean} 是否支持WebGL
         * @example
         * ```javascript
         * const hasWebGL = cx.dom.testWebgl();
         * console.log('是否支持WebGL:', hasWebGL);
         * ```
         */
        function testWebgl(param?: {noWarn?: boolean}): boolean;
    }
} 