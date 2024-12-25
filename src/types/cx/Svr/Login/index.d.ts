declare namespace cx {
  /**
   * 登录服务类
   */
  namespace svr {
    /**
     * 提供用户登录、注册、密码管理、验证码发送等相关服务。
     */
    namespace login {
      /**
       * 绑定账号/解绑账号
       * @param params 绑定参数
       * @returns 返回绑定结果
       */
      function bindAccount(params: {
        account: string;
        type: string;
        code?: string;
      }): Promise<any>;

      /**
       * 绑定账号-发送邮箱验证码
       * @param params 发送参数
       * @returns 返回发送结果
       */
      function bindCodeMail(params: {
        account: string;
        email: string;
      }): Promise<any>;

      /**
       * 绑定账号-发送手机验证码
       * @param params 发送参数
       * @returns 返回发送结果
       */
      function bindCodeSms(params: {
        account: string;
        mobile: string;
      }): Promise<any>;

      /**
       * 生成图形验证码
       * @returns 返回验证码图片数据
       */
      function genCaptcha(): Promise<any>;

      /**
       * 获取子部门信息
       * @param params 查询参数
       * @returns 返回子部门信息
       */
      function getChildOrgans(params: {
        id: number;
      }): Promise<any>;

      /**
       * 用户登录
       * @param params 登录参数
       * @returns 返回登录结果
       * @example
       * ```typescript
       * await cx.svr.login.login({
       *   account: "username",
       *   password: "password123",
       *   time: cx.datetime.now().getTime(),
       *   type: "LOGIN_ACCOUNT"
       * });
       * ```
       */
      function login(params: {
        account: string;
        password: string;
        time: number;
        type: string;
      }): Promise<any>;

      /**
       * 取用户登录日志
       * @param params 查询参数
       * @returns 返回登录日志
       */
      function loginLog(params: {
        init?: number;
        pageno?: number;
        pagesize?: number;
      }): Promise<any>;

      /**
       * 退出系统
       * @returns 返回退出结果
       * @example
       * ```typescript
       * await cx.svr.login.logout();
       * ```
       */
      function logout(): Promise<any>;

      /**
       * 获取字符串的MD5码
       * @param str 要加密的字符串
       * @returns 返回MD5加密结果
       */
      function md5(str: string): Promise<string>;

      /**
       * 用户登录增删改等操作日志
       * @param params 查询参数
       * @returns 返回操作日志
       */
      function operLog(params: {
        init?: number;
        pageno?: number;
        pagesize?: number;
        userid?: number;
        opertype?: number;
        entityatt?: string;
      }): Promise<any>;

      /**
       * 用户注册
       * @param params 注册参数
       * @returns 返回注册结果
       */
      function register(params: {
        account: string;
        password: string;
        code: string;
        type: string;
      }): Promise<any>;

      /**
       * 发送邮箱验证码
       * @param params 发送参数
       * @returns 返回发送结果
       * @example
       * ```typescript
       * await cx.svr.login.sendCodeMail({
       *   account: "example@email.com",
       *   email: "example@email.com"
       * });
       * ```
       */
      function sendCodeMail(params: {
        account: string;
        email: string;
      }): Promise<any>;

      /**
       * 发送手机验证码
       * @param params 发送参数
       * @returns 返回发送结果
       */
      function sendCodeSms(params: {
        account: string;
        mobile: string;
      }): Promise<any>;

      /**
       * 批量发送手机验证码
       * @param params 发送参数
       * @returns 返回发送结果
       */
      function sendSmsBatch(params: {
        mobiles: string[];
        content: string;
      }): Promise<any>;

      /**
       * 重置用户密码
       * @param params 重置参数
       * @returns 返回重置结果
       */
      function setDefPsw(params: {
        account: string;
      }): Promise<any>;

      /**
       * 修改密码
       * @param params 修改参数
       * @returns 返回修改结果
       * @example
       * ```typescript
       * await cx.svr.login.setPsw({
       *   oldpassword: "oldEncryptedPassword",
       *   newpassword: "newEncryptedPassword"
       * });
       * ```
       */
      function setPsw(params: {
        oldpassword: string;
        newpassword: string;
      }): Promise<any>;

      /**
       * 根据验证码修改密码
       * @param params 修改参数
       * @returns 返回修改结果
       */
      function setPswByCode(params: {
        account: string;
        password: string;
        code: string;
      }): Promise<any>;

      /**
       * 取服务对应的网址
       * @returns 返回服务地址
       */
      function url(): string;

      /**
       * 确认账号是否存在
       * @param params 验证参数
       * @returns 返回验证结果
       */
      function verifyAccount(params: {
        account: string;
        type: string;
      }): Promise<any>;
    }
  }
} 