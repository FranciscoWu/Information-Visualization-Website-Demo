// bar chart
const chart = echarts.init(document.getElementById('ulan-bar'));

  const option = {
    title: {
      text: 'Top 20 Artistic Hubs by Activity (ULAN)',
      left: 'center',
      textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2e3f48'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      backgroundColor: '#fff',
      borderColor: '#ccc',
      borderWidth: 1,
      textStyle: {
        color: '#333'
      }
    },
    grid: {
      left: 160,
      right: 40,
      top: 80,
      bottom: 20,
      containLabel: true
    },
    xAxis: {
      type: 'value',
      name: 'Number of Artists Active',
      nameLocation:'right',
      nameGap: 5,
      nameTextStyle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2e3f48',
        overflow: 'truncate'
      },
      axisLine: {
        lineStyle: {
          color: '#aaa'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#eee'
        }
      }
    },

    yAxis: {
      type: 'category',
      inverse: true,
      axisLabel: {
        formatter: value => value.length > 24 ? value.slice(0, 24) + '…' : value,
        fontSize: 13,
        lineHeight: 16,
        color: '#333'
      },
      data: [
        'New York City (United States)',
        'Paris (France)',
        'Vienna (Austria)',
        'Rome (Italy)',
        'London (United Kingdom)',
        'Munich (Germany)',
        'Berlin (Germany)',
        'Dresden (Germany)',
        'Barcelona (Spain)',
        'Chicago (United States)',
        'Italy (nation)',
        'Stuttgart (Germany)',
        'Hague (Netherlands)',
        'Los Angeles (United States)',
        'Dusseldorf (Germany)',
        'Helsinki (Finland)',
        'Madrid (Spain)',
        'Copenhagen (Denmark)',
        'Bogotá (Colombia)'
      ].reverse()
    },
    series: [{
      type: 'bar',
      name: 'Artists',
      data: [
        81, 32, 32, 20, 17, 16, 12, 9, 8, 7, 7, 6, 6, 5, 5, 4, 4, 4, 4
      ].reverse(),
      itemStyle: {
        color: '#295c5c',
        borderRadius: [0, 5, 5, 0]
      },
      emphasis: {
        itemStyle: {
          color: '#508c8c'
        }
      }
    }]
  };

  chart.setOption(option);

// heatmap
var heatmap = echarts.init(document.getElementById('heatmap'));

const places = [
  "New York City (USA)",
  "Helsinki (Finland)",
  "London (UK)",
  "Stuttgart (Germany)",
  "Berlin (Germany)",
  "France (nation)",
  "Oslo (Norway)",
  "Chicago (USA)",
  "Dusseldorf (Germany)",
  "Vedbæk (Denmark)",
  "USA (nation)",
  "Barcelona (Spain)",
  "Munich (Germany)",
  "Vienna (Austria)",
  "Paris (France)"
];

const decades = [
  "1900", "1910", "1920", "1930", "1940", "1950", "1960", "1970", "1980", "1990"
];

const data = [
  [0, 0, 1], [0, 1, 0], [0, 2, 1], [0, 3, 1], [0, 4, 0], [0, 5, 1], [0, 6, 0], [0, 7, 0], [0, 8, 1], [0, 9, 0],[0, 10, 1],[0, 11, 0],[0, 12, 1],[0, 13, 0],[0, 14, 0],
  [1, 0, 0], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 1], [1, 9, 0],[1, 10, 0],[1, 11, 0],[1, 12, 0],[1, 13, 0],[1, 14, 0],
  [2, 0, 0], [2, 1, 0], [2, 2, 0], [2, 3, 1], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0],[2, 10, 0],[2, 11, 0],[2, 12, 0],[2, 13, 1],[2, 14, 0],
  [3, 0, 4], [3, 1, 0], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 0], [3, 9, 0],[3, 10, 0],[3, 11, 0],[3, 12, 0],[3, 13, 0],[3, 14, 0],
  [4, 0, 3], [4, 1, 0], [4, 2, 0], [4, 3, 1], [4, 4, 0], [4, 5, 0], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 0],[4, 10, 1],[4, 11, 1],[4, 12, 0],[4, 13, 0],[4, 14, 1],
  [5, 0, 0], [5, 1, 0], [5, 2, 0], [5, 3, 0], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 0], [5, 9, 2],
  [5, 10, 0],[5, 11, 0],[5, 12, 0],[5, 13, 0],[5, 14, 0],
  [6, 0, 1], [6, 1, 1], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 1], [6, 6, 1], [6, 7, 1], [6, 8, 0], [6, 9, 0],
  [6, 10, 0],[6, 11, 0],[6, 12, 0],[6, 13, 0],[6, 14, 0],
  [7, 0, 2], [7, 1, 1], [7, 2, 1], [7, 3, 1], [7, 4, 1], [7, 5, 0], [7, 6, 0], [7, 7, 0], [7, 8, 0], [7, 9, 0],
  [7, 10, 0],[7, 11, 1],[7, 12, 1],[7, 13, 0],[7, 14, 0],
  [8, 0, 4], [8, 1, 1], [8, 2, 2], [8, 3, 0], [8, 4, 1], [8, 5, 0], [8, 6, 1], [8, 7, 0], [8, 8, 0], [8, 9, 0],
  [8, 10, 0],[8, 11, 0],[8, 12, 0],[8, 13, 1],[8, 14, 0],
  [9, 0, 3], [9, 1, 1], [9, 2, 0], [9, 3, 0], [9, 4, 1], [9, 5, 0], [9, 6, 0], [9, 7, 1], [9, 8, 0], [9, 9, 0],
  [9, 10, 0],[9, 11, 0],[9, 12, 0],[9, 13, 0],[9, 14, 0],
];

heatmap.setOption({
  title: {
    text: 'Artistic Activity by Place and Decade (ULAN)',
    left: 'center',
    textStyle: {
      fontSize: 18
    }
  },
  tooltip: {
    position: 'top',
    formatter: function (params) {
    const val = params.value[2];
    return `${decades[params.value[0]]}<br>${places[params.value[1]]}: ${val}`;
    }
  },
  grid: {
    top: 60,
    bottom: 80,
    left: 200,
    right: 50
  },
  xAxis: {
    type: 'category',
    data: decades,
    name: 'Decade',
    nameLocation: 'middle',
    nameGap: 60,
    axisLabel: { rotate: 45 }
  },
  yAxis: {
    type: 'category',
    data: places,
    name: 'Place'
  },
  visualMap: {
    min: 0,
    max: 4,
    calculable: true,
    orient: 'vertical',
    right: '10',
    top: 'center',
    inRange: {
      color: ['#ffffcc', '#41b6c4', '#225ea8']
    }
  },
  series: [{
    type: 'heatmap',
    data: data,
    label: {
      show: true
    },
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowColor: 'rgba(0,0,0,0.4)'
      }
    }
  }]
});

//spread line graph
const spreadChart = echarts.init(document.getElementById('spread-line'));

const spreadOption = {
  title: {
    text: 'Global Artistic Spread Over Time (ULAN)',
    left: 'center',
    textStyle: {
      fontSize: 18
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    name: 'Decade',
    nameLocation: 'middle',
    nameGap: 30,
    axisLabel: {
      rotate: 45
    },
    data: ['1900', '1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990']
  },
  yAxis: {
    type: 'value',
    name: 'Number of Unique Cities'
  },
  series: [{
    data: [10, 9, 4, 3, 21, 7, 17, 13, 14, 7],
    type: 'line',
    symbol: 'circle',
    symbolSize: 8,
    lineStyle: {
      color: 'red',
      width: 2
    },
    itemStyle: {
      color: 'red'
    }
  }]
};

// if move bar graph
spreadChart.setOption(spreadOption);

const mobilityChart = echarts.init(document.getElementById('ulan-mobility'));

const mobilityOption = {
  title: {
    text: 'Do Artists in ULAN Move Between Places?',
    left: 'center',
    textStyle: {
      fontSize: 20,
      fontWeight: 'bold'
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' }
  },
  grid: {
    left: 150,
    right: 50,
    top: 80,
    bottom: 40,
    containLabel: true
  },
  xAxis: {
    type: 'value',
    name: 'Number of Artists',
    nameLocation:'right',
    nameGap: 5,
  },
  yAxis: {
    type: 'category',
    data: ['Multiple Locations', 'One Location Only']
  },
  series: [{
    type: 'bar',
    data: [13, 85],
    barWidth: 40,
    itemStyle: {
      color: function (params) {
        return params.name === 'Multiple Locations' ? 'green' : '#ccc';
      }
    },
    label: {
      show: true,
      position: 'inside',
      formatter: function (params) {
        const total = 13 + 85;
        const percentage = ((params.value / total) * 100).toFixed(1);
        return `${percentage}%\n${params.value} artists`;
      },
      fontWeight: 'bold',
      color: '#fff'
    }
  }]
};

mobilityChart.setOption(mobilityOption);

// index line graph
const reachChart = echarts.init(document.getElementById('reach-line'));

const reachOption = {
  title: {
    text: 'Global Reach of Artistic Activity Over Time',
    left: 'center',
    textStyle: {
      fontSize: 18
    }
  },
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    name: 'Decade',
    nameLocation: 'middle',
    nameGap: 30,
    axisLabel: {
      rotate: 45
    },
    data: ['1900', '1910', '1920', '1930', '1940', '1950', '1960', '1970', '1980', '1990']
  },
  yAxis: {
    type: 'value',
    name: 'Global Reach Index',
    min: 0,
    max: 2
  },
  series: [{
    data: [1.43, 0, 1, 0, 1, 0, 0, 1, 2, 1],
    type: 'line',
    symbol: 'circle',
    symbolSize: 8,
    lineStyle: {
      color: 'purple',
      width: 3
    },
    itemStyle: {
      color: 'purple'
    }
  }]
};

reachChart.setOption(reachOption);