declare namespace cx {
  /**
   * 时间(时分秒)的实现类
   */
  interface TimeObject {
    hour: number;
    minute: number;
    second?: number;
  }

  class time {
    /**
     * 增加分钟数量
     * @param time 时间对象
     * @param minutes 分钟数量
     * @example
     * ```typescript
     * const time = {hour: 9, minute: 30};
     * cx.time.addMinutes(time, 15);
     * console.log('新时间:', time);
     * // 输出: {hour: 9, minute: 45}
     * ```
     */
    static addMinutes(time: TimeObject, minutes: number): void;

    /**
     * 取一天的工作分钟数
     * @param workTime 工作时间数组
     * @returns 分钟数
     * @example
     * ```typescript
     * const workTime = [
     *   {hour: 9, minute: 0},
     *   {hour: 17, minute: 0}
     * ];
     * const minutes = cx.time.calcDayMinutes(workTime);
     * console.log('工作分钟数:', minutes);
     * ```
     */
    static calcDayMinutes(workTime: TimeObject[]): number;

    /**
     * 比较两个时间大小
     * @param time1 时间对象
     * @param time2 时间对象
     * @returns 比较结果 (1=大于, 0=等于, -1=小于)
     * @example
     * ```typescript
     * const time1 = {hour: 9, minute: 0};
     * const time2 = {hour: 17, minute: 0};
     * const result = cx.time.compare(time1, time2);
     * console.log('比较结果:', result);
     * // 输出: -1
     * ```
     */
    static compare(time1: TimeObject, time2: TimeObject): number;

    /**
     * 拷贝时间
     * @param time 时间对象
     * @returns 拷贝的时间对象
     * @example
     * ```typescript
     * const time = {hour: 9, minute: 30};
     * const newTime = cx.time.copy(time);
     * console.log('拷贝的时间:', newTime);
     * // 输出: {hour: 9, minute: 30}
     * ```
     */
    static copy(time: TimeObject): TimeObject;

    /**
     * 计算一天内两个时间点之间的分钟数
     * @param stTime 起始时间
     * @param endTime 结束时间
     * @returns 分钟数
     * @example
     * ```typescript
     * const stTime = {hour: 9, minute: 0};
     * const endTime = {hour: 17, minute: 0};
     * const minutes = cx.time.diffMinutes(stTime, endTime);
     * console.log('分钟数:', minutes);
     * // 输出: 480
     * ```
     */
    static diffMinutes(stTime: TimeObject, endTime: TimeObject): number;

    /**
     * 取一天内两个时间点之间的工作时间分钟数
     * @param stTime 起始时间
     * @param endTime 结束时间
     * @param workTime 工作时间数组
     * @returns 分钟数
     * @example
     * ```typescript
     * const stTime = {hour: 9, minute: 0};
     * const endTime = {hour: 17, minute: 0};
     * const workTime = [
     *   {hour: 9, minute: 0},
     *   {hour: 17, minute: 0}
     * ];
     * const minutes = cx.time.diffWorkMinutes(stTime, endTime, workTime);
     * console.log('工作分钟数:', minutes);
     * ```
     */
    static diffWorkMinutes(stTime: TimeObject, endTime: TimeObject, workTime: TimeObject[]): number;

    /**
     * 时间早于
     * @param time 时间
     * @param refTime 参照时间
     * @returns 是否早于
     * @example
     * ```typescript
     * const time = {hour: 8, minute: 0};
     * const refTime = {hour: 9, minute: 0};
     * cx.time.et(time, refTime);
     * // 输出: true
     * ```
     */
    static et(time: TimeObject, refTime: TimeObject): boolean;

    /**
     * 判断一个时间点是否在两个时间点之间
     * @param time 时间点
     * @param stTime 起始时间
     * @param endTime 结束时间
     * @returns 在范围内返回True, 不在范围内返回False
     * @example
     * ```typescript
     * const time = {hour: 10, minute: 0};
     * const stTime = {hour: 9, minute: 0};
     * const endTime = {hour: 17, minute: 0};
     * const result = cx.time.isIn(time, stTime, endTime);
     * console.log('是否在范围内:', result);
     * // 输出: true
     * ```
     */
    static isIn(time: TimeObject, stTime: TimeObject, endTime: TimeObject): boolean;

    /**
     * 时间晚于
     * @param time 时间
     * @param refTime 参照时间
     * @returns 是否晚于
     * @example
     * ```typescript
     * const time = {hour: 10, minute: 0};
     * const refTime = {hour: 9, minute: 0};
     * cx.time.lt(time, refTime);
     * // 输出: true
     * ```
     */
    static lt(time: TimeObject, refTime: TimeObject): boolean;

    /**
     * 根据字符串解析时间
     * @param str 时间字符串
     * @returns 解析后的时间对象
     * @example
     * ```typescript
     * const timeStr = '09:00';
     * const timeObj = cx.time.parse(timeStr);
     * console.log('解析后的时间对象:', timeObj);
     * // 输出: {hour: 9, minute: 0}
     * ```
     */
    static parse(str: string): TimeObject;

    /**
     * 计算两个日期时间差
     * @param date1 日期1
     * @param date2 日期2
     * @returns 时间差对象
     * @example
     * ```typescript
     * const timeInstance = new cx.time();
     * const diff = timeInstance.diffTime('2023-01-01', '2023-01-02');
     * console.log('时间差:', diff);
     * ```
     */
    diffTime(date1: string, date2: string): Record<string, any>;
  }
} 