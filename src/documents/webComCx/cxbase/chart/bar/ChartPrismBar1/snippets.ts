export const snippets = {
    "cx-chart-prism-bar1": {
        "prefix": "cx-chart-prism-bar1",
        "body": [
            "<cx-chart-prism-bar1",
            "  :data=\"${1:[",
            "    { name: 'A', value: 100 },",
            "    { name: 'B', value: 200 },",
            "    { name: 'C', value: 300 }",
            "  ]}\"",
            "  :config=\"${2:{",
            "    grid: {",
            "      show: true,",
            "      borderColor: '#ccc',",
            "      borderWidth: 1",
            "    },",
            "    tooltip: {",
            "      trigger: 'axis',",
            "      show: true",
            "    },",
            "    legend: {",
            "      type: 'plain',",
            "      show: true",
            "    },",
            "    xAxis: {",
            "      type: 'category',",
            "      show: true",
            "    },",
            "    yAxis: {",
            "      type: 'value',",
            "      show: true",
            "    },",
            "    series: {",
            "      barWidth: '40%',",
            "      label: {",
            "        show: false",
            "      }",
            "    }",
            "  }}\"",
            "  color=\"${3:blue}\"",
            "  @click=\"${4:handleClick}\"",
            "  @dblclick=\"${5:handleDblClick}\"",
            "  @mousedown=\"${6:handleMouseDown}\"",
            "  @mousemove=\"${7:handleMouseMove}\"",
            "  @mouseup=\"${8:handleMouseUp}\"",
            "  @mouseover=\"${9:handleMouseOver}\"",
            "  @mouseout=\"${10:handleMouseOut}\"",
            "></cx-chart-prism-bar1>",
        ],
        "description": "单棱柱形柱状图组件，支持自定义配置和事件处理"
    }
}; 