/**
 * 网络服务类
 */
declare namespace cx.svr.network {
    /**
     * 获取网络状态
     * @returns 返回网络状态
     * @example
     * ```typescript
     * const status = await cx.svr.network.getStatus();
     * ```
     */
    function getStatus(): Promise<{
        online: boolean;
        type: string;
        speed: number;
    }>;

    /**
     * 获取网络配置
     * @returns 返回网络配置
     * @example
     * ```typescript
     * const config = await cx.svr.network.getConfig();
     * ```
     */
    function getConfig(): Promise<{
        ip: string;
        mask: string;
        gateway: string;
        dns: Array<string>;
    }>;

    /**
     * 设置网络配置
     * @param params 配置参数
     * @returns 返回设置结果
     */
    function setConfig(params: {
        ip: string;
        mask: string;
        gateway: string;
        dns: Array<string>;
    }): Promise<any>;

    /**
     * 测试网络连接
     * @param params 测试参数
     * @returns 返回测试结果
     * @example
     * ```typescript
     * const result = await cx.svr.network.test({
     *   host: 'example.com',
     *   timeout: 5000
     * });
     * ```
     */
    function test(params: {
        host: string;
        timeout?: number;
    }): Promise<{
        success: boolean;
        time: number;
    }>;

    /**
     * 取POST服务对应的URL
     * @returns 返回URL地址
     * @example
     * ```typescript
     * const url = cx.svr.network.url();
     * ```
     */
    function url(): string;

    /**
     * 取GET服务对应的URL
     * @returns 返回URL地址
     */
    function urlGet(): string;
}