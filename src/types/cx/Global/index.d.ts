/// <reference path="../AttFactory/index.d.ts" />
/// <reference path="../CodeFactory/index.d.ts" />
/// <reference path="../Entities/index.d.ts" />
/// <reference path="../Fields/index.d.ts" />
/// <reference path="../IndexDb/index.d.ts" />
/// <reference path="../Layers/index.d.ts" />
/// <reference path="../Plugins/index.d.ts" />
/// <reference path="../ProcAssign/index.d.ts" />
/// <reference path="../Service/index.d.ts" />

/**
 * 全局变量管理类，提供了全局变量的存取功能
 */
declare namespace $g {
  interface Access {
    // 访问控制对象
    [key: string]: any;
  }

  // 使用 AttFactory 模块的类型
  interface AttFactory extends cx.AttFactory {
  }

  // 使用 CodeFactory 模块的类型
  interface CodeFactory extends cx.CodeFactory {
  }

  // 使用 Entities 模块的类型
  interface Entity extends cx.Entities {
  }

  // 使用 Fields 模块的类型
  interface Field extends cx.Fields {
  }

  interface Func {
    // 函数对象
    [key: string]: any;
  }

  // 使用 IndexDb 模块的类型
  interface IndexDb extends cx.IndexDb {
  }

  // 使用 Layers 模块的类型
  interface Layer extends cx.Layers {
  }

  interface Message {
    // 消息对象
    [key: string]: any;
  }

  // 使用 Plugins 模块的类型
  interface Plugin extends cx.Plugins {
  }

  // 使用 ProcAssign 模块的类型
  interface ProsAssi extends cx.ProcAssign {
  }

  // 使用 Service 模块的类型
  interface Service extends cx.service {
  }

  interface Syscfg {
    // 系统配置对象
    [key: string]: any;
  }

  interface User {
    // 用户对象
    [key: string]: any;
  }

  /**
   * 获取当前时间
   * @returns 返回当前时间的 Date 对象
   * @example
   * ```ts
   * // 获取当前时间
   * const now = $g.getCurTime();
   * console.log(now); // 输出当前时间的 Date 对象
   * 
   * // 格式化显示当前时间
   * const timeStr = cx.formatter.datetime($g.getCurTime());
   * console.log(timeStr); // 输出格式化的时间字符串，如："2024-03-15 10:30:00"
   * ```
   */
  function getCurTime(): Date;

  /**
   * 设置当前时间
   * @param date 要设置的时间
   * @example
   * ```ts
   * // 设置当前时间为特定日期
   * const newDate = new Date(2024, 0, 1, 12, 0, 0);
   * $g.setCurTime(newDate);
   * 
   * // 获取设置后的时间
   * const currentTime = $g.getCurTime();
   * console.log(currentTime); // 输出: 2024-01-01T12:00:00
   * 
   * // 设置为当前系统时间
   * $g.setCurTime(new Date());
   * ```
   */
  function setCurTime(date: Date): void;

  // 系统对象
  const access: Access;
  const attFactory: AttFactory;
  const codeFactory: CodeFactory;
  const entity: Entity;
  const field: Field;
  const func: Func;
  const indexDb: IndexDb;
  const layer: Layer;
  const message: Message;
  const plugin: Plugin;
  const prosAssi: ProsAssi;
  const service: Service;
  const syscfg: Syscfg;
  const user: User;
}
