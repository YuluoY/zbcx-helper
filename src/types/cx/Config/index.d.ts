declare namespace cx {
    interface IConfigJson {
        name: string;
        namec: string;
        url: string;
    }

    interface IOperConfig {
        [key: string]: {
            text?: string;
            icon?: string;
            [key: string]: any;
        };
    }

    const config: {
        /**
         * 颜色配置对象
         * @example
         * // 获取颜色配置
         * const colors = cx.config.color;
         */
        color: Record<string, string>;

        /**
         * UI设计尺寸
         * @example
         * // 获取UI设计尺寸
         * const designSize = cx.config.designPx;
         */
        designPx: number;

        /**
         * 图标配置对象
         */
        icon: Record<string, string>;

        /**
         * 本地化配置
         */
        locale: string;

        /**
         * rem转px配置
         */
        remToPx: number;

        /**
         * 尺寸配置
         */
        size: Record<string, number>;

        /**
         * 皮肤主题对象
         */
        theme: Record<string, any>;

        /**
         * 用配置去设置操作配置
         * @param {Object} operCfg - 操作配置
         * @param {Object} cfg - 配置
         * @example
         * // 使用配置设置操作配置
         * cx.config.cfgOperCfg(operConfig, config);
         */
        cfgOperCfg(operCfg: IOperConfig, cfg: Record<string, any>): void;

        /**
         * 删除注释
         * @param {string} text - 包含注释的文本
         * @returns {string} 返回去除注释后的文本
         * @example
         * // 删除文本中的注释
         * const cleanText = cx.config.delComments(text);
         */
        delComments(text: string): string;

        /**
         * 初始化图标
         */
        initIcon(): void;

        /**
         * 加载JSON数据文件
         * @param {Array<Object>} confs - 配置对象序列,每个对象结构为 {name: String, namec: String, url: String}
         * @returns {Promise<void>} 返回一个 Promise 对象
         * @example
         * // 加载JSON配置文件
         * const configs = [
         *   {
         *     name: 'theme',
         *     namec: '主题',
         *     url: 'static/themes/lightBlue.js'
         *   }
         * ];
         * cx.config.loadJSON(configs).then(() => {
         *   console.log('配置加载完成');
         * });
         */
        loadJSON(confs: IConfigJson[]): Promise<void>;

        /**
         * 错误处理
         * @param {Error} err - 错误对象
         * @example
         * // 处理错误
         * try {
         *   // 可能出错的代码
         * } catch (err) {
         *   cx.config.onError(err);
         * }
         */
        onError(err: Error): void;

        /**
         * 设置操作配置
         * @param {Object} operCfg - 操作配置
         * @param {boolean} [showText=true] - 是否显示标题文本
         * @param {boolean} [showIcon=true] - 是否显示图标
         * @example
         * // 设置操作配置
         * cx.config.setOperCfg({
         *   add: {
         *     text: '添加',
         *     icon: 'plus'
         *   }
         * }, true, true);
         */
        setOperCfg(operCfg: IOperConfig, showText?: boolean, showIcon?: boolean): void;
    }
} 