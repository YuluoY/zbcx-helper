declare namespace cx {
  namespace svr {
    /**
     * 邮件服务类
     */
    namespace mail {
      /**
       * 发送邮件
       * @param params 发送参数
       * @returns 返回发送结果
       * @example
       * ```typescript
       * await cx.svr.mail.send({
       *   to: 'user@example.com',
       *   subject: '测试邮件',
       *   content: '这是一封测试邮件'
       * });
       * ```
       */
      function send(params: {
        to: string | Array<string>;
        subject: string;
        content: string;
        attachments?: Array<{
          filename: string;
          content: any;
        }>;
      }): Promise<any>;

      /**
       * 发送HTML格式邮件
       * @param params 发送参数
       * @returns 返回发送结果
       * @example
       * ```typescript
       * await cx.svr.mail.sendHtml({
       *   to: 'user@example.com',
       *   subject: '测试邮件',
       *   content: '<h1>这是一封HTML测试邮件</h1>'
       * });
       * ```
       */
      function sendHtml(params: {
        to: string | Array<string>;
        subject: string;
        content: string;
        attachments?: Array<{
          filename: string;
          content: any;
        }>;
      }): Promise<any>;

      /**
       * 取POST服务对应的URL
       * @returns 返回URL地址
       * @example
       * ```typescript
       * const url = cx.svr.mail.url();
       * ```
       */
      function url(): string;

      /**
       * 取GET服务对应的URL
       * @returns 返回URL地址
       */
      function urlGet(): string;
    }
  }
} 