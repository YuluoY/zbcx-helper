export interface MapLegendProps {
  /**
   * 推送消息名的前缀
   * @default MapLegend
   */
  eventPrefix?: string;

  /**
   * 是否默认收缩卡片
   * @default false
   */
  defFold?: boolean;

  /**
   * 是否在添加图例时自动展开卡片面板
   * @default true
   */
  autoOpen?: boolean;

  /**
   * 传递给cx-legend组件的自定义参数对象
   */
  legendOption?: Record<string, any>;
} 