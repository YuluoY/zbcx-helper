/**
 * cx.Bpm 类 - 流程管理相关的功能类
 */
declare namespace cx {
  declare class Bpm {
    /**
     * 根据proc(表proc)启动流程(需要取流程定义,最后再启动)
     * @param proc - 流程信息
     * @param variables - [可选] 流程变量
     * @returns 返回启动流程的Promise对象
     * @example
     * ```javascript
     * // 启动流程
     * cx.Bpm.startByProc({
     *   id: "proc123",
     *   name: "采购审批流程"
     * }, {
     *   amount: 1000,
     *   department: "IT"
     * }).then(result => {
     *   console.log("Process started:", result);
     * });
     * ```
     */
    static startByProc(proc: Object, variables?: Object): Promise<Object>;
  
    /**
     * 提交任务反馈意见
     * @param params - 参数对象，包含id(任务ID)、backto(退回任务ID)、COMMENT_(反馈意见)
     * @returns 返回操作结果
     * @example
     * ```javascript
     * // 提交任务反馈意见
     * cx.Bpm.commentApply({
     *   id: "task123",
     *   backto: "task100", 
     *   COMMENT_: "需要修改,请重新处理"
     * });
     * ```
     */
    static commentApply(params: Object): Object;
  
    /**
     * 根据流程实例查看流程进展
     * @param procInst - 流程实例信息
     * @param plugin - 插件名称
     * @example
     * ```javascript
     * cx.Bpm.procProgressByProcInst({
     *   id: "instance123",
     *   name: "流程实例1"
     * }, "myPlugin");
     * ```
     */
    static procProgressByProcInst(procInst: Object, plugin: string): void;
  
    /**
     * 根据任务查看流程进展
     * @param task - 任务信息
     * @param plugin - 插件名称
     * @example
     * ```javascript
     * cx.Bpm.procProgressByTask({
     *   id: "task123",
     *   name: "审批任务"
     * }, "myPlugin");
     * ```
     */
    static procProgressByTask(task: Object, plugin: string): void;
  
    /**
     * 根据流程实例查看流程跟踪图
     * @param procInst - 流程实例信息
     * @param plugin - 插件名称
     * @example
     * ```javascript
     * cx.Bpm.procTraceByProcInst({
     *   id: "instance123",
     *   name: "流程实例1"
     * }, "myPlugin");
     * ```
     */
    static procTraceByProcInst(procInst: Object, plugin: string): void;
  
    /**
     * 根据任务查看流程跟踪图
     * @param task - 任务信息
     * @param plugin - 插件名称
     * @example
     * ```javascript
     * cx.Bpm.procTraceByTask({
     *   id: "task123",
     *   name: "审批任务"
     * }, "myPlugin");
     * ```
     */
    static procTraceByTask(task: Object, plugin: string): void;
  
    /**
     * 指派给某人
     * @param params - 指派参数
     * @example
     * ```javascript
     * cx.Bpm.assignTo({
     *   taskId: "task123",
     *   userId: "user456"
     * });
     * ```
     */
    static assignTo(params: Object): void;
  
    /**
     * 根据流程ID取流程的Key
     * @param procId - 流程ID
     * @returns 流程Key
     * @example
     * ```javascript
     * const key = cx.Bpm.getProcKey("proc123");
     * ```
     */
    static getProcKey(procId: string): string;
  
    /**
     * 取所有的流程信息
     * @returns 所有流程信息
     * @example
     * ```javascript
     * const procs = cx.Bpm.getProcsAll();
     * ```
     */
    static getProcsAll(): Array<Object>;
  
    /**
     * 使用模板启动流程
     * @param tmpl - 模板信息
     * @param variables - 流程变量
     * @returns 启动结果
     * @example
     * ```javascript
     * cx.Bpm.startWithTmpl({
     *   id: "tmpl123",
     *   name: "采购流程模板"
     * }, {
     *   amount: 1000
     * });
     * ```
     */
    static startWithTmpl(tmpl: Object, variables?: Object): Object;
  }
}