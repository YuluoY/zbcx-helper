declare namespace cx {
    class Color {
        /**
         * 根据颜色数组中每两个颜色对象间的梯度,插入若干新颜色,共生成指定数量的元素
         * @param {number} num - 最终的颜色对象的个数
         * @param {string[]} colorArr - 颜色数组,每个元素都是16进制字符串
         * @returns {string[]} 包含根据颜色变化斜率生成的 num 个颜色对象数组
         * @example
         * // 基本用法
         * const colors = ['#FF0000', '#00FF00', '#0000FF'];
         * const ramp = cx.Color.getColorRamp(5, colors);
         * console.log(ramp); // 输出 5 个均匀分布的颜色
         */
        static getColorRamp(num: number, colorArr: string[]): string[];

        /**
         * 返回随机颜色
         * @param {string} [color='#ffffff'] - 需要排除的颜色
         * @returns {string} 生成的随机颜色(十六进制格式)
         * @example
         * // 基本用法 - 生成任意随机颜色
         * const randomColor = cx.Color.getRandomColor();
         * console.log(randomColor); // 输出类似: '#FF42EE'
         */
        static getRandomColor(color?: string): string;

        /**
         * 计算两个颜色之间的渐变色
         * @param {string} startColor - 开始颜色(十六进制)
         * @param {string} endColor - 终止颜色(十六进制)
         * @param {number} num - 需要生成的颜色数量
         * @returns {string[]} 包含生成的渐变颜色的数组
         * @example
         * // 基本用法 - 生成红色到蓝色的渐变
         * const gradient = cx.Color.gradientColor('#FF0000', '#0000FF', 5);
         * console.log(gradient);
         * // 输出类似: ['#FF0000', '#BF003F', '#7F007F', '#3F00BF', '#0000FF']
         */
        static gradientColor(startColor: string, endColor: string, num: number): string[];

        /**
         * 十六进制颜色转 RGB
         * @param {string} sHex - 十六进制颜色,如 #FF42EE
         * @param {number} [opacity=1] - 颜色透明度(0~1), 0表示完全透明,1表示完全不透明
         * @param {boolean} [isFinal=true] - 是否返回最终的 RGB/RGBA 字符串
         * @returns {string | number[]} 如果 isFinal 为 true,返回 RGB/RGBA 格式的颜色字符串;否则返回 RGB 颜色值数组 [r, g, b]
         * @example
         * // 基本用法 - 转换为 RGB
         * const rgb = cx.Color.hexToRgb('#FF42EE');
         * console.log(rgb); // 输出: 'rgb(255,66,238)'
         */
        static hexToRgb(sHex: string, opacity?: number, isFinal?: boolean): string | number[];

        /**
         * RGB 转十六进制
         * @param {string} sRgb - RGB 颜色,如 rgb(12,33,23)
         * @returns {string} 十六进制格式的颜色字符串
         * @example
         * // 基本用法
         * const hex = cx.Color.rgbToHex('rgb(255,66,238)');
         * console.log(hex); // 输出: '#FF42EE'
         */
        static rgbToHex(sRgb: string): string;

        /**
         * RGB 转 RGBA
         * @param {string} sRgb - RGB 颜色,如 rgb(12,34,56)
         * @param {number} [opacity=1] - 透明度值(0~1),0表示完全透明,1表示完全不透明
         * @returns {string} RGBA 格式的颜色字符串
         * @example
         * // 基本用法
         * const rgba = cx.Color.rgbToRgba('rgb(255,66,238)', 0.5);
         * console.log(rgba); // 输出: 'rgba(255,66,238,0.5)'
         */
        static rgbToRgba(sRgb: string, opacity?: number): string;
    }
} 