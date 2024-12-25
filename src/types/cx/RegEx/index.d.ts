declare namespace cx {
  /**
   * RegEx 提供了一组常用的静态正则表达式变量
   */
  namespace regex {
    /**
     * 手机号码正则表达式
     * @example
     * ```ts
     * const isValidCell = cx.regex.cell.test('13812345678');
     * ```
     */
    const cell: RegExp;

    /**
     * 邮箱地址正则表达式
     * @example
     * ```ts
     * const isValidEmail = cx.regex.email.test('example@domain.com');
     * ```
     */
    const email: RegExp;

    /**
     * 判断一个字符串是否为布尔值
     * @example
     * ```ts
     * const isBoolValue = cx.regex.isBool.test('true');
     * ```
     */
    const isBool: RegExp;

    /**
     * 判断一个字符串是否为日期
     * @example
     * ```ts
     * const isDateValue = cx.regex.isDate.test('2024-01-20');
     * ```
     */
    const isDate: RegExp;

    /**
     * 判断一个字符串是否为 false
     * @example
     * ```ts
     * const isFalseValue = cx.regex.isFalse.test('false');
     * ```
     */
    const isFalse: RegExp;

    /**
     * 判断一个字符串是否为整数
     * @example
     * ```ts
     * const isIntValue = cx.regex.isInt.test('123');
     * ```
     */
    const isInt: RegExp;

    /**
     * 判断一个字符串是否为数字
     * @example
     * ```ts
     * const isNum = cx.regex.isNumber.test('123.45');
     * ```
     */
    const isNumber: RegExp;

    /**
     * 判断一个字符串是否为时间戳
     * @example
     * ```ts
     * const isTimestampValue = cx.regex.isTimestamp.test('2024-01-20 12:30:45.123');
     * ```
     */
    const isTimestamp: RegExp;

    /**
     * 判断一个字符串是否为 true
     * @example
     * ```ts
     * const isTrueValue = cx.regex.isTrue.test('true');
     * ```
     */
    const isTrue: RegExp;

    /**
     * 密码规则正则表达式（大小写字母、数字、特殊字符，长度6-20）
     * @example
     * ```ts
     * const isValidPassword = cx.regex.password.test('Abc123!@#');
     * ```
     */
    const password: RegExp;

    /**
     * 引用ID正则表达式（格式：{id}）
     * @example
     * ```ts
     * const isValidRefId = cx.regex.refId.test('{123}');
     * ```
     */
    const refId: RegExp;

    /**
     * 引用变量正则表达式（格式：{var}）
     * @example
     * ```ts
     * const isValidRefVar = cx.regex.refVar.test('{myVariable}');
     * ```
     */
    const refVar: RegExp;

    /**
     * 文件名的简称正则表达式
     * @example
     * ```ts
     * const isValidShortName = cx.regex.shortName.test('file-name');
     * ```
     */
    const shortName: RegExp;

    /**
     * 时间正则表达式（格式：H:mm:ss）
     * @example
     * ```ts
     * const isValidTime = cx.regex.time.test('12:30:45');
     * ```
     */
    const time: RegExp;

    /**
     * 时间戳正则表达式（格式：yyyy-MM-dd H:m:s.SSS）
     * @example
     * ```ts
     * const isValidTimestamp = cx.regex.timestamp.test('2024-01-20 12:30:45.123');
     * ```
     */
    const timestamp: RegExp;
  }
} 