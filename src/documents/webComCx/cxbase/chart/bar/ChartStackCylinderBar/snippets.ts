export const snippets = {
    "cx-chart-stack-cylinder-bar": {
        "prefix": "cx-chart-stack-cylinder-bar",
        "body": [
            "<cx-chart-stack-cylinder-bar",
            "  :data=\"${1:{",
            "    values: [",
            "      { name: '系列1', value: 100 },",
            "      { name: '系列2', value: 200 },",
            "      { name: '系列3', value: 300 }",
            "    ],",
            "    axises: ['类目1', '类目2', '类目3']",
            "  }}\"",
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
            "  :colors=\"${3:['blue', 'green', 'red']}\"",
            "  @click=\"${4:handleClick}\"",
            "  @dblclick=\"${5:handleDblClick}\"",
            "  @mousedown=\"${6:handleMouseDown}\"",
            "  @mousemove=\"${7:handleMouseMove}\"",
            "  @mouseup=\"${8:handleMouseUp}\"",
            "  @mouseover=\"${9:handleMouseOver}\"",
            "  @mouseout=\"${10:handleMouseOut}\"",
            "></cx-chart-stack-cylinder-bar>",
        ],
        "description": "堆叠圆柱形柱状图组件，支持多维数据展示和自定义配置"
    }
}; 