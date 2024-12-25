declare namespace cx {
  /**
   * 流程管理服务类
   */
  namespace svr {
    /**
     * 提供对流程管理的操作服务，包括流程部署、任务管理、流程查询等功能。
     */
    namespace bpm {
      /**
       * 添加流程部署
       * @param params 部署参数
       * @returns 返回部署结果
       * @example
       * ```typescript
       * await cx.svr.bpm.addDeployment({ filename: 'process.bpmn', name: 'New Process' });
       * ```
       */
      function addDeployment(params: { filename: string; name: string }): Promise<any>;

      /**
       * 分配任务
       * @param params 任务参数
       * @returns 返回分配结果
       * @example
       * ```typescript
       * await cx.svr.bpm.assignTask({ id: 'taskId' });
       * ```
       */
      function assignTask(params: { id: string }): Promise<any>;

      /**
       * 认领任务
       * @param params 任务参数
       * @returns 返回认领结果
       */
      function claimTask(params: { id: string }): Promise<any>;

      /**
       * 完成任务
       * @param params 任务参数
       * @returns 返回完成结果
       */
      function completeTask(params: { id: string }): Promise<any>;

      /**
       * 删除流程部署
       * @param params 部署参数
       * @returns 返回删除结果
       */
      function delDeployment(params: { id: string }): Promise<any>;

      /**
       * 委派任务
       * @param params 任务参数
       * @returns 返回委派结果
       */
      function delegateTask(params: { id: string }): Promise<any>;

      /**
       * 获取所有部署
       * @returns 返回所有部署信息
       */
      function getAllDeploy(): Promise<any[]>;

      /**
       * 获取所有流程定义
       * @returns 返回所有流程定义信息
       */
      function getAllProcDef(): Promise<any[]>;

      /**
       * 获取单据号
       * @returns 返回单据号
       */
      function getBillM(): Promise<string>;

      /**
       * 获取流程定义
       * @param params 查询参数
       * @returns 返回流程定义信息
       */
      function getProcDef(params: { id: string }): Promise<any>;

      /**
       * 根据部署ID获取流程定义
       * @param params 查询参数
       * @returns 返回流程定义信息
       */
      function getProcDefByDeploy(params: { deploymentId: string }): Promise<any>;

      /**
       * 获���流程图
       * @param params 查询参数
       * @returns 返回流程图数据
       */
      function getProcDefDgm(params: { id: string }): Promise<any>;

      /**
       * 获取流程SVG图
       * @param params 查询参数
       * @returns 返回SVG图数据
       */
      function getProcDefDgmSvg(params: { id: string }): Promise<string>;

      /**
       * 获取当前时间
       * @returns 返回当前时间
       */
      function getTimeM(): Promise<string>;

      /**
       * 获取流程变量
       * @param params 查询参数
       * @returns 返回流程变量
       */
      function getVariables(params: { processInstanceId: string }): Promise<Record<string, any>>;

      /**
       * 查询历史反馈
       * @param params 查询参数
       * @returns 返回历史反馈信息
       */
      function queryHisComment(params: { processInstanceId: string }): Promise<any[]>;

      /**
       * 查询历史流程
       * @param params 查询参数
       * @returns 返回历史流程信息
       */
      function queryHisProc(params: { processInstanceId: string }): Promise<any[]>;

      /**
       * 查询我发起的流程
       * @param params 查询参数
       * @returns 返回流程列表
       */
      function queryMyStarted(params?: { page?: number; size?: number }): Promise<any[]>;

      /**
       * 查询我的任务
       * @param params 查询参数
       * @returns 返回任务列表
       */
      function queryMyTask(params?: { page?: number; size?: number }): Promise<any[]>;

      /**
       * 查询流程跟踪图
       * @param params 查询参数
       * @returns 返回流程跟踪图数据
       */
      function queryProcDgm(params: { processInstanceId: string }): Promise<any>;

      /**
       * 查询流程实例
       * @param params 查询参数
       * @returns 返回流程实例信息
       */
      function queryProcInst(params: { processInstanceId: string }): Promise<any>;

      /**
       * 查询流程进度
       * @param params 查询参数
       * @returns 返回流程进度信息
       */
      function queryProcProg(params: { processInstanceId: string }): Promise<any>;

      /**
       * 查询用户任务
       * @param params 查询参数
       * @returns 返回用户任务列表
       */
      function queryUserTask(params: { userId: string }): Promise<any[]>;

      /**
       * 回退任务
       * @param params 任务参数
       * @returns 返回回退结果
       */
      function returnTask(params: { taskId: string }): Promise<any>;

      /**
       * 撤销流程
       * @param params 流程参数
       * @returns 返回撤销结果
       */
      function revokeProcess(params: { processInstanceId: string }): Promise<any>;

      /**
       * 设置流程变量
       * @param params 变量参数
       * @returns 返回设置结果
       */
      function setVariables(params: { processInstanceId: string; variables: Record<string, any> }): Promise<any>;

      /**
       * 启动流程
       * @param params 流程参数
       * @returns 返回启动结果
       */
      function startProcess(params: { processDefinitionId: string; variables?: Record<string, any> }): Promise<any>;

      /**
       * 取消认领任务
       * @param params 任务参数
       * @returns 返回取消结果
       */
      function unclaimTask(params: { taskId: string }): Promise<any>;

      /**
       * 查询未完成流程
       * @param params 查询参数
       * @returns 返回未完成流程列表
       */
      function unfinished(params?: { page?: number; size?: number }): Promise<any[]>;

      /**
       * 获取服务网址
       * @returns 返回服务网址
       * @example
       * ```typescript
       * const serviceUrl = cx.svr.bpm.url();
       * ```
       */
      function url(): string;

      /**
       * 获取GET服务网址
       * @returns 返回GET服务网址
       */
      function urlGet(): string;
    }
  }
} 