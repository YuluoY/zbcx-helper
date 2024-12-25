declare namespace cx {
    namespace ExpExcel {
        interface BorderStyle {
            /** 边框颜色 */
            color?: string;
            /** 边框样式 */
            style?: 'thin' | 'medium' | 'thick' | 'dotted' | 'hair' | 'dashed' | 
                    'mediumDashed' | 'dashDot' | 'mediumDashDot' | 'dashDotDot' | 
                    'mediumDashDotDot' | 'slantDashDot';
        }

        interface ExcelStyle {
            /** 填充样式 */
            fill?: {
                /** 图表类型('solid' 或 'none') */
                patternType?: 'solid' | 'none';
                /** 填充颜色 */
                fgColor?: string;
                /** 边框颜色 */
                bgColor?: string;
            };
            /** 字体样式 */
            font?: {
                /** 字体名称 */
                name?: string;
                /** 字体大小 */
                sz?: number;
                /** 字体颜色 */
                color?: string;
                /** 是否加粗 */
                bold?: boolean;
                /** 是否加下划线 */
                underline?: boolean;
                /** 是否斜体 */
                italic?: boolean;
                /** 是否加入横划线 */
                strike?: boolean;
                /** 是否显示轮廓线 */
                outline?: boolean;
                /** 是否有阴影 */
                shadow?: boolean;
                /** 是否强制不准自动换行 */
                vertAlign?: boolean;
            };
            /** 对齐样式 */
            alignment?: {
                /** 垂直对齐方式 */
                vertical?: 'bottom' | 'center' | 'top';
                /** 水平对齐方式 */
                horizontal?: 'bottom' | 'center' | 'top';
                /** 是否自动换行 */
                wrapText?: boolean;
                /** 阅读顺序 */
                readingOrder?: number;
                /** 旋转角度(0-255) */
                textRotation?: number;
            };
            /** 边框样式 */
            border?: {
                top?: BorderStyle;
                bottom?: BorderStyle;
                left?: BorderStyle;
                right?: BorderStyle;
                diagonal?: BorderStyle;
                diagonalUp?: boolean;
                diagonalDown?: boolean;
            };
        }

        interface ExportToExcelParams {
            /** 待导出的数据(json二选一) */
            data?: Array<Object>;
            /** 待导出的json数据(与data二选一) */
            json?: Array<Object>;
            /** 列字段及别名的map集合 */
            columns: Record<string, string> | Array<{name: string, title: string}>;
            /** 主标题 */
            title?: string;
            /** 文件名，默认值为 'mySheet' */
            filename?: string;
            /** Excel样式 */
            style?: {
                /** 主标题样式 */
                title?: ExcelStyle;
                /** 列标题样式 */
                head?: ExcelStyle;
                /** 普通单元格样式 */
                comm?: ExcelStyle;
            };
        }

        interface ExportToSheetsParams {
            /** 待导出的json数据。格式{'tab1': [{},{}], 'tab2': [{},{}] } */
            json: Record<string, Array<Object>>;
            /** 列配置信息 */
            columns: Record<string, Record<string, string>>;
            /** 文件名 */
            filename?: string;
            /** Excel样式 */
            style?: {
                /** 列标题样式 */
                head?: ExcelStyle;
                /** 普通单元格样式 */
                comm?: ExcelStyle;
            };
        }
    }

    class ExpExcel {
        /**
         * 将JSON数据导出为Excel文件
         * @param {ExportToExcelParams} param - 导出参数对象
         * @example
         * ```javascript
         * cx.ExpExcel.exportToExcel({
         *   json: [
         *     { name: '张三', age: 18 },
         *     { name: '李四', age: 20 }
         *   ],
         *   columns: {
         *     name: '姓名',
         *     age: '年龄'
         *   },
         *   filename: '人员信息'
         * });
         * ```
         */
        static exportToExcel(param: ExpExcel.ExportToExcelParams): void;

        /**
         * 导出多个sheet页的Excel文件
         * @param {ExportToSheetsParams} param - 导出参数对象
         * @example
         * ```javascript
         * cx.ExpExcel.exportToSheets({
         *   json: {
         *     '人员信息': [
         *       { name: '张三', age: 18 }
         *     ]
         *   },
         *   columns: {
         *     '人员信息': {
         *       name: '姓名',
         *       age: '年龄'
         *     }
         *   },
         *   filename: '公司基本信息'
         * });
         * ```
         */
        static exportToSheets(param: ExpExcel.ExportToSheetsParams): void;

        /**
         * 过滤文件名，移除文件名中的非法字符
         * @param {string} str - 待过滤的文件名
         * @returns {string} 过滤后的文件名
         * @example
         * ```javascript
         * const filename = cx.ExpExcel.fillterFileName('人员信息*?.xlsx');
         * ```
         */
        static fillterFileName(str: string): string;

        /**
         * 获取Excel列的字母表示
         * @param {number} n - 列索引（从0开始）
         * @returns {string} 列的字母表示
         * @example
         * ```javascript
         * console.log(cx.ExpExcel.getCharCol(0));  // 输出: 'A'
         * console.log(cx.ExpExcel.getCharCol(26)); // 输出: 'AA'
         * ```
         */
        static getCharCol(n: number): string;

        /**
         * 将字符串转换为字符流
         * @param {string} str - 待转成字符流的字符串
         * @returns {ArrayBuffer} 转换后的字符流
         * @example
         * ```javascript
         * const buffer = cx.ExpExcel.stringToArrayBuffer('测试文本');
         * ```
         */
        static stringToArrayBuffer(str: string): ArrayBuffer;
    }
}; 