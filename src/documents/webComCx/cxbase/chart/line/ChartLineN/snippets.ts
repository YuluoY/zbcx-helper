export const snippets = {
    "cx-chart-line-n": {
        "prefix": "cx-chart-line-n",
        "body": [
            "<cx-chart-line-n",
            "  :data=\"${1:{",
            "    values: [],",
            "    axises: []",
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
            "  :colors=\"${3:['blue', 'green', 'red']}\"",
            "  @click=\"${4:handleClick}\"",
            "  @dblclick=\"${5:handleDblClick}\"",
            "  @mousedown=\"${6:handleMouseDown}\"",
            "  @mousemove=\"${7:handleMouseMove}\"",
            "  @mouseup=\"${8:handleMouseUp}\"",
            "  @mouseover=\"${9:handleMouseOver}\"",
            "  @mouseout=\"${10:handleMouseOut}\"",
            "></cx-chart-line-n>",
        ],
        "description": "多折线图组件，支持多维数据展示和自定义配置"
    }
}; 