export const snippets = {
    "cx-chart-line1": {
        "prefix": "cx-chart-line1",
        "body": [
            "<cx-chart-line1",
            "  :data=\"${1:[]}\"",
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
            "    xAxis: {",
            "      type: 'category',",
            "      show: true",
            "    },",
            "    yAxis: {",
            "      type: 'value',",
            "      show: true",
            "    },",
            "    series: {",
            "      smooth: false,",
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
            "></cx-chart-line1>",
        ],
        "description": "单折线图组件，支持自定义配置和事件处理"
    }
}; 