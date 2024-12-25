declare namespace cx {
    class date {
        /**
         * 日期增加指定的天数
         * @param {Date} _date - 要增加天数的日期对象
         * @param {number} nDays - 要增加的天数
         * @returns {Date} 返回增加天数后的新日期对象
         * @example
         * // 基本使用
         * const today = new Date();
         * const nextWeek = cx.date.addDays(today, 7);
         * console.log(nextWeek); // 输出7天后的日期
         * 
         * // 计算截止日期
         * const deadline = cx.date.addDays(today, 30);
         * 
         * // 计算过去日期
         * const lastWeek = cx.date.addDays(today, -7);
         */
        static addDays(_date: Date, nDays: number): Date;

        /**
         * 比较两个日期
         * @param {Date} date1 - 第一个日期对象
         * @param {Date} date2 - 第二个日期对象
         * @returns {number} 返回比较结果:
         * - 1: date1 大于 date2
         * - 0: date1 等于 date2
         * - -1: date1 小于 date2
         * @example
         * // 基本使用
         * const date1 = new Date('2024-01-01');
         * const date2 = new Date('2024-02-01');
         * const result = cx.date.compare(date1, date2);
         * console.log(result); // 输出: -1 (date1 < date2)
         * 
         * // 相等日期比较
         * const sameDate1 = new Date('2024-01-01');
         * const sameDate2 = new Date('2024-01-01');
         * console.log(cx.date.compare(sameDate1, sameDate2)); // 输出: 0
         */
        static compare(date1: Date, date2: Date): number;

        /**
         * 复制日期对象
         * @param {Date} date - 要复制的日期对象
         * @returns {Date} 返回新的日期对象
         * @example
         * // 基本使用
         * const originalDate = new Date('2024-01-01');
         * const copiedDate = cx.date.copy(originalDate);
         * console.log(copiedDate); // 输出: 2024-01-01
         * 
         * // 验证是新对象
         * console.log(originalDate === copiedDate); // 输出: false
         * 
         * // 修改副本不影响原始日期
         * copiedDate.setDate(copiedDate.getDate() + 1);
         * console.log(originalDate); // 仍然是 2024-01-01
         * console.log(copiedDate); // 变成 2024-01-02
         */
        static copy(date: Date): Date;

        /**
         * 计算两个日期之间的差值
         * @param {Date} date1 - 第一个日期对象
         * @param {Date} date2 - 第二个日期对象
         * @returns {number} 返回两个日期之间的毫秒差值
         * @example
         * // 基本使用
         * const date1 = new Date('2024-01-01');
         * const date2 = new Date('2024-01-02');
         * const diff = cx.date.diffDat(date1, date2);
         * console.log(diff); // 输出: 86400000 (一天的毫秒数)
         * 
         * // 计算小时差
         * const hoursDiff = diff / (1000 * 60 * 60);
         * console.log(hoursDiff); // 输出: 24
         */
        static diffDat(date1: Date, date2: Date): number;

        /**
         * 计算两个日期之间的天数差
         * @param {Date} date1 - 第一个日期对象
         * @param {Date} date2 - 第二个日期对象
         * @returns {number} 返回两个日期之间的天数差值
         * @example
         * // 基本使用
         * const date1 = new Date('2024-01-01');
         * const date2 = new Date('2024-01-10');
         * const days = cx.date.diffDays(date1, date2);
         * console.log(days); // 输出: 9
         * 
         * // 计算工期
         * const projectStart = new Date('2024-01-01');
         * const projectEnd = new Date('2024-03-01');
         * const duration = cx.date.diffDays(projectStart, projectEnd);
         * console.log(`项目工期: ${duration}天`);
         */
        static diffDays(date1: Date, date2: Date): number;

        /**
         * 判断两个日期是否相等
         * @param {Date} date1 - 第一个日期对象
         * @param {Date} date2 - 第二个日期对象
         * @returns {boolean} 如果两个日期相等返回true，否则返回false
         * @example
         * // 基本使用
         * const date1 = new Date('2024-01-01');
         * const date2 = new Date('2024-01-01');
         * const isEqual = cx.date.equals(date1, date2);
         * console.log(isEqual); // 输出: true
         * 
         * // 不同日期比较
         * const date3 = new Date('2024-01-02');
         * console.log(cx.date.equals(date1, date3)); // 输出: false
         * 
         * // 在数组过滤中使用
         * const dates = [
         *     new Date('2024-01-01'),
         *     new Date('2024-01-02'),
         *     new Date('2024-01-01')
         * ];
         * const targetDate = new Date('2024-01-01');
         * const matchingDates = dates.filter(date => 
         *     cx.date.equals(date, targetDate)
         * );
         */
        static equals(date1: Date, date2: Date): boolean;

        /**
         * 获取本月的起止日期
         * @returns {Object} 返回包含本月起���日期的对象:
         * - start: 本月第一天的日期
         * - end: 本月最后一天的日期
         * @example
         * // 获取本月日期范围
         * const monthRange = cx.date.getDatesCurMonth();
         * console.log(monthRange);
         * // 输出类似: 
         * // { 
         * //   start: Date("2024-01-01"), 
         * //   end: Date("2024-01-31")
         * // }
         * 
         * // 用于数据查询
         * const queryData = {
         *     startDate: monthRange.start,
         *     endDate: monthRange.end
         * };
         * 
         * // 格式化显示
         * console.log(`本月开始: ${monthRange.start.toLocaleDateString()}`);
         * console.log(`本月结束: ${monthRange.end.toLocaleDateString()}`);
         */
        static getDatesCurMonth(): { start: Date; end: Date };

        /**
         * 获取本周的起止日期
         * @returns {Object} 返回包含本周起止日期的对象:
         * - start: 本周第一天的日期(周一)
         * - end: 本周最后一天的日期(周日)
         * @example
         * // 获取本周日期范围
         * const weekRange = cx.date.getDatesCurWeek();
         * console.log(weekRange);
         * // 输出类似: 
         * // { 
         * //   start: Date("2024-01-01"), // ��一
         * //   end: Date("2024-01-07")    // 周日
         * // }
         * 
         * // 用于数据查询
         * const queryData = {
         *     startDate: weekRange.start,
         *     endDate: weekRange.end
         * };
         * 
         * // 格式化显示
         * console.log(`本周开始: ${weekRange.start.toLocaleDateString()}`);
         * console.log(`本周结束: ${weekRange.end.toLocaleDateString()}`);
         */
        static getDatesCurWeek(): { start: Date; end: Date };

        /**
         * 获取上月的起止日期
         * @returns {Object} 返回包含上月起止日期的对象:
         * - start: 上月第一天的日期
         * - end: 上月最后一天的日期
         * @example
         * // 获取上月日期范围
         * const lastMonthRange = cx.date.getDatesPreMonth();
         * console.log(lastMonthRange);
         * // 输出类似: 
         * // { 
         * //   start: Date("2023-12-01"), 
         * //   end: Date("2023-12-31")
         * // }
         * 
         * // 用于环比数据查询
         * const queryData = {
         *     lastMonth: {
         *         startDate: lastMonthRange.start,
         *         endDate: lastMonthRange.end
         *     },
         *     thisMonth: {
         *         startDate: cx.date.getDatesCurMonth().start,
         *         endDate: cx.date.getDatesCurMonth().end
         *     }
         * };
         */
        static getDatesPreMonth(): { start: Date; end: Date };

        /**
         * 获取上周的起止日期
         * @returns {Object} 返回包含上周起止日期的对象:
         * - start: 上周第一天的日期(周一)
         * - end: 上周最后一天的日期(周日)
         * @example
         * // 获取上周日期范围
         * const lastWeekRange = cx.date.getDatesPreWeek();
         * console.log(lastWeekRange);
         * // 输出类似: 
         * // { 
         * //   start: Date("2023-12-25"), // 上周一
         * //   end: Date("2023-12-31")    // 上周日
         * // }
         * 
         * // 用于周环比数据查询
         * const queryData = {
         *     lastWeek: {
         *         startDate: lastWeekRange.start,
         *         endDate: lastWeekRange.end
         *     },
         *     thisWeek: {
         *         startDate: cx.date.getDatesCurWeek().start,
         *         endDate: cx.date.getDatesCurWeek().end
         *     }
         * };
         */
        static getDatesPreWeek(): { start: Date; end: Date };

        /**
         * 获取指定月份的天数
         * @param {number} year - 年份
         * @param {number} month - 月份(1-12)
         * @returns {number} 返回指定月份的天数
         * @example
         * // 获取2024年2月的天数(闰年)
         * const feb2024 = cx.date.getDaysByMonth(2024, 2);
         * console.log(feb2024); // 输出: 29
         * 
         * // 获取2023年2月的天数(平年)
         * const feb2023 = cx.date.getDaysByMonth(2023, 2);
         * console.log(feb2023); // 输出: 28
         * 
         * // 获取当前月份的天数
         * const now = new Date();
         * const currentMonthDays = cx.date.getDaysByMonth(
         *     now.getFullYear(),
         *     now.getMonth() + 1
         * );
         * console.log(`本月有 ${currentMonthDays} 天`);
         */
        static getDaysByMonth(year: number, month: number): number;

        /**
         * 获取过期时间
         * @param {number} minutes - 过期时间(分钟)
         * @returns {Date} 返回过期时间的日期对象
         * @example
         * // 计算30分钟后的过期时间
         * const expireTime = cx.date.getExpire(30);
         * console.log(expireTime); // 输出30分钟后的时间
         * 
         * // 用于设置会话过期
         * const session = {
         *     startTime: new Date(),
         *     expireTime: cx.date.getExpire(60), // 1小时后过期
         *     data: {}
         * };
         * 
         * // 用于缓存控制
         * const cache = {
         *     key: 'userData',
         *     value: {},
         *     expireAt: cx.date.getExpire(15) // 15分钟后过期
         * };
         */
        static getExpire(minutes: number): Date;

        /**
         * 获取当天算起的近一个月起止日期
         * @returns {Object} 返回包含近一个月起止日期的对象:
         * - start: 当前日期
         * - end: 一个月后的日期
         * @example
         * // 获取近一个月日期范围
         * const monthRange = cx.date.getNearMonth();
         * console.log(monthRange);
         * // 输出类似: 
         * // { 
         * //   start: Date("2024-01-15"), // 当前日期
         * //   end: Date("2024-02-14")    // 一个月后
         * // }
         * 
         * // 用于数据查询
         * const queryData = {
         *     startDate: monthRange.start,
         *     endDate: monthRange.end,
         *     type: 'monthly'
         * };
         * 
         * // 格式化显示
         * console.log(`开始日期: ${monthRange.start.toLocaleDateString()}`);
         * console.log(`结束日期: ${monthRange.end.toLocaleDateString()}`);
         */
        static getNearMonth(): { start: Date; end: Date };

        /**
         * 获取当天算起的近三个月起止日期
         * @returns {Object} 返回包含近三个月起止日期的对象:
         * - start: 当前日期
         * - end: 三个月后的日期
         * @example
         * // 获取近三个月日期范围
         * const quarterRange = cx.date.getNearThreeMonth();
         * console.log(quarterRange);
         * // 输出类似: 
         * // { 
         * //   start: Date("2024-01-15"), // 当前日期
         * //   end: Date("2024-04-14")    // 三个月后
         * // }
         * 
         * // 用于季度数据查询
         * const queryData = {
         *     startDate: quarterRange.start,
         *     endDate: quarterRange.end,
         *     type: 'quarterly'
         * };
         * 
         * // 格式化显示
         * console.log(`开始日期: ${quarterRange.start.toLocaleDateString()}`);
         * console.log(`结束日期: ${quarterRange.end.toLocaleDateString()}`);
         */
        static getNearThreeMonth(): { start: Date; end: Date };

        /**
         * 获取当天算起的近一周起止日期
         * @returns {Object} 返回包含近一周起止日期的对象:
         * - start: 当前日期
         * - end: 一周后的日期
         * @example
         * // 获取近一周日期范围
         * const weekRange = cx.date.getNearWeek();
         * console.log(weekRange);
         * // 输出类似: 
         * // { 
         * //   start: Date("2024-01-15"), // 当前日期
         * //   end: Date("2024-01-21")    // 一周后
         * // }
         * 
         * // 用于数据查询
         * const queryData = {
         *     startDate: weekRange.start,
         *     endDate: weekRange.end,
         *     type: 'weekly'
         * };
         * 
         * // 格式化显示
         * console.log(`开始日期: ${weekRange.start.toLocaleDateString()}`);
         * console.log(`结束日期: ${weekRange.end.toLocaleDateString()}`);
         */
        static getNearWeek(): { start: Date; end: Date };

        /**
         * 取时间范围
         * @param {string} type - 时间范围类型:
         * - 'curWeek': 本周
         * - 'curMonth': 本月
         * - 'preWeek': 上周
         * - 'preMonth': 上月
         * - 'nearWeek': 近一周
         * - 'nearMonth': 近一月
         * - 'nearThreeMonth': 近三月
         * @returns {Object} 返回包含起止日期的对象:
         * - start: 开始日期
         * - end: 结束日期
         * @example
         * // 取本周
         * const thisWeek = cx.date.getRange('curWeek');
         * console.log('本周:', thisWeek);
         * 
         * // 获取本月范围
         * const thisMonth = cx.date.getRange('curMonth');
         * console.log('本月:', thisMonth);
         * 
         * // 获取近三个月范围
         * const threeMonths = cx.date.getRange('nearThreeMonth');
         * console.log('近三月:', threeMonths);
         */
        static getRange(type: 'curWeek' | 'curMonth' | 'preWeek' | 'preMonth' | 'nearWeek' | 'nearMonth' | 'nearThreeMonth'): { start: Date; end: Date };

        /**
         * 判断是否为日期对象
         * @param {*} date - 待判断的对象
         * @returns {boolean} 如果是日期对象返回true，否则返回false
         * @example
         * // 判断有效日期
         * const date = new Date();
         * console.log(cx.date.isDate(date)); // true
         * 
         * // 判断无效日期
         * console.log(cx.date.isDate('2024-01-01')); // false
         * console.log(cx.date.isDate(null)); // false
         * console.log(cx.date.isDate(undefined)); // false
         * console.log(cx.date.isDate(123)); // false
         * 
         * // 在函数中使用
         * static processDate(date) {
         *     if (!cx.date.isDate(date)) {
         *         throw new Error('参数必须是日期对象');
         *     }
         *     // 处理日期...
         * }
         */
        static isDate(date: any): boolean;

        /**
         * 判断日期是否在指定范围内
         * @param {Date} _date - 要判断的日期对象
         * @param {Date} date1 - 基准日期对象A
         * @param {Date} date2 - 基准日期对象B
         * @returns {boolean} 如果日期在指定范围内返回true，否则返回false
         * @example
         * // 创建测试日期
         * const start = new Date('2024-01-01');
         * const end = new Date('2024-12-31');
         * const testDate = new Date('2024-06-15');
         * 
         * // 判断日期是否在范围内
         * console.log(cx.date.isIn(testDate, start, end)); // true
         * 
         * // 边界值测试
         * console.log(cx.date.isIn(start, start, end)); // true
         * console.log(cx.date.isIn(end, start, end)); // true
         * 
         * // 范围外测试
         * const outOfRange = new Date('2025-01-01');
         * console.log(cx.date.isIn(outOfRange, start, end)); // false
         */
        static isIn(_date: Date, date1: Date, date2: Date): boolean;

        /**
         * 判断是否闰年
         * @param {number | string | Date} year - 待判断的年份或日期对象
         * @returns {boolean} 判断结果，如果是闰年返回true，否则返回false
         * @example
         * // 使用年份判断
         * console.log(cx.date.isLeapYear(2024)); // true
         * console.log(cx.date.isLeapYear(2023)); // false
         * console.log(cx.date.isLeapYear(2000)); // true
         * console.log(cx.date.isLeapYear(1900)); // false
         * 
         * // 使用日期对象判断
         * const date = new Date('2024-01-01');
         * console.log(cx.date.isLeapYear(date)); // true
         * 
         * // 在日期计算中使用
         * static getDaysInFebruary(year) {
         *     return cx.date.isLeapYear(year) ? 29 : 28;
         * }
         */
        static isLeapYear(year: number | string | Date): boolean;

        /**
         * 把字符串解析成日期格式
         * @param {string} str - 日期字符串，支持格式: YYYY-MM-DD、MM/DD/YYYY、YYYY年MM月DD日
         * @returns {Date} 解析后的日期对象
         * @example
         * // 解析不同格式的日期字符串
         * console.log(cx.date.parse('2024-01-15')); // 标准格式
         * console.log(cx.date.parse('01/15/2024')); // 美式格式
         * console.log(cx.date.parse('2024年01��15日')); // 中文格式
         * 
         * // 在表单处理中使用
         * static handleDateSubmit(dateStr) {
         *     try {
         *         const date = cx.date.parse(dateStr);
         *         if (cx.date.isDate(date)) {
         *             // 处理有效日期...
         *             return date;
         *         }
         *     } catch (e) {
         *         throw new Error('日期格式无效');
         *     }
         * }
         * 
         * // 日期比较
         * const date1 = cx.date.parse('2024-01-15');
         * const date2 = cx.date.parse('2024/01/20');
         * console.log(cx.date.compare(date1, date2)); // -1
         */
        static parse(str: string): Date;

        /**
         * 取今天的日期
         * @returns {Date} 返回今天的日期对象
         * @example
         * // 获取今天的日期
         * const today = cx.date.today();
         * console.log(today); // 输出今天的日期，时间部分为 00:00:00
         * 
         * // 用于日期比较
         * const someDate = new Date('2024-01-15');
         * if (cx.date.compare(someDate, today) < 0) {
         *     console.log('这是一个过去的日期');
         * }
         * 
         * // 计算日期范围
         * static getLastWeekRange() {
         *     const end = cx.date.today();
         *     const start = cx.date.addDays(end, -7);
         *     return { start, end };
         * }
         * 
         * // 设置默认日期
         * const form = {
         *     startDate: cx.date.today(),
         *     endDate: cx.date.addDays(cx.date.today(), 30)
         * };
         */
        static today(): Date;
    }
} 