declare namespace cx {
   declare namespace formatter {
    /**
     * 日期数据格式化成显示格式(根据格式:Date)
     * @param date 日期
     * @returns 返回格式化后的日期字符串，格式为 "YYYY-MM-DD"
     * @example
     * ```ts
     * // 格式化日期对象
     * const date = new Date(2024, 0, 1);  // 2024-01-01
     * console.log(cx.formatter.date(date)); // 输出: "2024-01-01"
     * 
     * // 格式化日期字符串
     * console.log(cx.formatter.date('2024-01-01')); // 输出: "2024-01-01"
     * ```
     */
    function date(date: Date | string): string;

    /**
     * 日期数据格式化成数据库格式
     * @param date 日期
     * @returns 返回格式化后的日期字符串，格式为数据库日期格式
     * @example
     * ```ts
     * // 格式化日期对象
     * const date = new Date(2024, 0, 1);  // 2024-01-01
     * console.log(cx.formatter.dateDb(date)); // 输出数据库格式的日期字符串
     * 
     * // 格式化日期字符串
     * console.log(cx.formatter.dateDb('2024-01-01')); // 输出数据库格式的日期字符串
     * ```
     */
    function dateDb(date: Date | string): string;

    /**
     * 邮戳数据格式化成显示格式(根据格式:Datetime)
     * @param date 日期
     * @returns 返回格式化后的日期时间字符串，格式为 "YYYY-MM-DD HH:mm:ss"
     * @example
     * ```ts
     * // 格式化日期对象
     * const date = new Date(2024, 0, 1, 12, 30, 45);
     * console.log(cx.formatter.datetime(date)); 
     * // 输出: "2024-01-01 12:30:45"
     * 
     * // 格式化日期字符串
     * console.log(cx.formatter.datetime('2024-01-01 12:30:45')); 
     * // 输出: "2024-01-01 12:30:45"
     * 
     * // 格式化当前时间
     * console.log(cx.formatter.datetime(new Date())); 
     * // 输出当前时间，如: "2024-03-15 09:30:00"
     * ```
     */
    function datetime(date: Date | string): string;

    /**
     * 邮戳数据格式化成显示格式(根据格式:Datetime)
     * @param date 日期时间
     * @returns 返回格式化后的日期时间字符串，格式为数据库日期时间格式
     * @example
     * ```ts
     * // 格式化日期时间对象
     * const date = new Date(2024, 0, 1, 12, 30, 45);
     * console.log(cx.formatter.datetimeDb(date)); 
     * // 输出数据库格式的日期时间字符串
     * 
     * // 格式化日期时间字符串
     * console.log(cx.formatter.datetimeDb('2024-01-01 12:30:45')); 
     * // 输出数据库格式的日期时间字符串
     * ```
     */
    function datetimeDb(date: Date | string): string;

    /**
     * 时长格式化（单位：毫秒）
     * @param durationInMillis 毫秒
     * @param hideSecond 是否隐藏显示秒
     * @returns 返回格式化后的时长字符串，格式为 "HH:mm:ss" 或 "HH:mm"(当hideSecond为true时)
     * @example
     * ```ts
     * // 格式化时长（显示秒）
     * console.log(cx.formatter.duration(3661000)); 
     * // 输出: "01:01:01"
     * 
     * // 格式化时长（隐藏秒）
     * console.log(cx.formatter.duration(3661000, true)); 
     * // 输出: "01:01"
     * 
     * // 格式化短时长
     * console.log(cx.formatter.duration(45000)); 
     * // 输出: "00:00:45"
     * ```
     */
    function duration(durationInMillis: number, hideSecond?: boolean): string;

    /**
     * 固定长度整数格式化。将数字格式化为指定长度的字符串，不足位数在前面补0
     * @param value 值
     * @param len 长度
     * @returns 返回格式化后的固定长度字符串
     * @example
     * ```ts
     * // 格式化数字为3位
     * console.log(cx.formatter.fixedInt(5, 3)); 
     * // 输出: "005"
     * 
     * // 格式化数字为4位
     * console.log(cx.formatter.fixedInt(42, 4)); 
     * // 输出: "0042"
     * 
     * // 当数字位数超过指定长度时
     * console.log(cx.formatter.fixedInt(1234, 2)); 
     * // 输出: "1234"
     * ```
     */
    function fixedInt(value: number, len: number): string;

    /**
     * 金额格式化。将数字格式化为金额显示格式，保留两位小数
     * @param value 金额值
     * @returns 返回格式化后的金额字符串，保留两位小数
     * @example
     * ```ts
     * // 格式化整数金额
     * console.log(cx.formatter.money(1234)); 
     * // 输出: "1,234.00"
     * 
     * // 格式化带小数的金额
     * console.log(cx.formatter.money(1234.5)); 
     * // 输出: "1,234.50"
     * 
     * // 格式化小额金额
     * console.log(cx.formatter.money(0.99)); 
     * // 输出: "0.99"
     * ```
     */
    function money(value: number): string;

    /**
     * 剩余时间格式化。将秒数转换为剩余时间的简短描述
     * @param seconds 剩余秒数
     * @returns 返回格式化后的剩余时间描述字符串
     * @example
     * ```ts
     * // 格式化剩余时间
     * console.log(cx.formatter.remainTime(3661)); 
     * // 输出: "1h1m"
     * 
     * // 格式化只有分钟和秒的时间
     * console.log(cx.formatter.remainTime(125)); 
     * // 输出: "2m5s"
     * 
     * // 格式化只有秒的时间
     * console.log(cx.formatter.remainTime(45)); 
     * // 输出: "45s"
     * ```
     */
    function remainTime(seconds: number): string;

    /**
     * 时间数据格式化成显示格式
     * @param date 时间
     * @param hideSecond 是否隐藏秒
     * @returns 返回格式化后的时间字符串，格式为 "HH:mm:ss" 或 "HH:mm"(当hideSecond为true时)
     * @example
     * ```ts
     * // 格式化时间（显示秒）
     * const date = new Date(2024, 0, 1, 12, 30, 45);
     * console.log(cx.formatter.time(date)); 
     * // 输出: "12:30:45"
     * 
     * // 格式化时间（隐藏秒）
     * console.log(cx.formatter.time(date, true)); 
     * // 输出: "12:30"
     * ```
     */
    function time(date: Date, hideSecond?: boolean): string;
  }
} 