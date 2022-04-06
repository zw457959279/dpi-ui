<template>
<Card title="GNSS当日平面E/N坐标展示图">
  <div class="d-en-chart">
    <div class="coordinate">
      <div
        ref="charRef"
        :style="{width: '240px', height: '240px'}"/>
    </div>
  </div>
</Card>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useECharts } from '../../_hooks/useECharts'
import { deepMerge } from '../../_utils/index'

import Card from './Card.vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

watch(props.data,
  (data) => {
    const option = deepMerge(chartOptions, {
      series: [
        {
          type: 'line',
          itemStyle: {
            color: '#26D1D4',
            borderColor: '#26D1D4'
          },
          // showSymbol: false,
          clip: true,
          data
        }
      ]
    })
    setOptions(option)
  })

const charRef = ref()
const { setOptions } = useECharts(charRef)
const degrees = ['E', '30°', '60', 'S', '120', '150', 'W', '210', '240', 'N', '300°', '330°']
const scales = ['0', '0.1', '0.2', '0.3', '0.4']

const chartOptions = {
  polar: {
    center: ['50%', '50%']
  },
  grid: {
    show: false,
    left: 23,
    right: 23,
    top: 23,
    bottom: 23
  },
  angleAxis: {
    type: 'category',
    startAngle: 0,
    data: degrees,
    boundaryGap: false,
    splitLine: {
      show: true
    }
  },
  radiusAxis: {
    min: 0,
    max: 18,
    splitNumber: 6,
    nameTextStyle: {
      color: '#fff',
      fontSize: 18
    },
    axisLabel: {
      fontSize: 10
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#fff',
        width: 2
      }
    },
    axisTick: {
      interval: 1,
      lineStyle: {
        color: '#fff',
        width: 2
      }
    }
  },
  xAxis: {
    name: 'x',
    show: false,
    min: -18,
    max: 18,
    minorTick: {
      show: true
    },
    minorSplitLine: {
      show: true
    },
    splitArea: { show: false }
  },
  yAxis: {
    name: 'y',
    show: false,
    min: -18,
    max: 18,
    minorTick: {
      show: true
    },
    minorSplitLine: {
      show: true
    },
    splitArea: { show: false }
  },
  dataZoom: [
    {
      show: false,
      type: 'inside',
      filterMode: 'none',
      xAxisIndex: [0],
      startValue: -18,
      endValue: 18,
      disabled: true
    },
    {
      show: false,
      type: 'inside',
      filterMode: 'none',
      yAxisIndex: [0],
      startValue: -18,
      endValue: 18,
      disabled: true
    }
  ],
  series: [
    {
      type: 'line',
      itemStyle: {
        color: '#26D1D4',
        borderColor: '#26D1D4'
      },
      clip: true,
      data: []
    }
  ]
}

setOptions(chartOptions)

</script>

<style lang="less" scoped>
.coordinate {
  text-align: center;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  &_title {
    min-height: 20px;
    font-size: 10px;
  }
}

.chartShift {
  width: 200px;
}

.coordinate_title {
  opacity: 0;
  transform: translateX(30px);
}

.fadeSlide{
  opacity: 1;
  transition: .3s linear;
  transform: translateX(0px);
}
</style>