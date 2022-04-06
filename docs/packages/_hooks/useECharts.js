import { tryOnUnmounted, useDebounceFn } from '@vueuse/core'
import { unref, nextTick, computed, ref } from 'vue'
import { useTimeoutFn } from './useTimeout'

import { useEventListener } from './useEventListener'
import echarts from '../_utils/lib/echarts'

export function useECharts (
  elRef,
  theme = 'default' // 'light' | 'dark' | 'default'
) {
  // echarts实例
  let chartInstance = null
  // 监听窗口尺寸
  let resizeFn = resize
  const cacheOptions = ref({})
  let removeResizeFn = () => {}

  // 延迟调用，避免窗口监听次数溢出警告
  resizeFn = useDebounceFn(resize, 200)

  const getOptions = computed(() => cacheOptions.value)

  /** 初始化 */
  function initCharts (t = theme) {
    const el = unref(elRef)
    if (!el || !unref(el)) {
      return
    }

    chartInstance = echarts.init(el, t)
    const { removeEvent } = useEventListener({
      el: window,
      name: 'resize',
      listener: resizeFn
    })
    removeResizeFn = removeEvent
    if (el.offsetHeight === 0) {
      useTimeoutFn(() => {
        resizeFn()
      }, 30)
    }
  }

  /**
   * 设置echart配置
   * @param {object} options echarts配置项
   * @param {boolean} clear 是否清除series
   */
  function setOptions (options, clear = true) {
    cacheOptions.value = options
    if (unref(elRef)?.offsetHeight === 0) {
      useTimeoutFn(() => {
        setOptions(unref(getOptions))
      }, 30)
      return
    }
    nextTick(() => {
      useTimeoutFn(() => {
        if (!chartInstance) {
          initCharts()

          if (!chartInstance) return
        }
        clear && chartInstance?.clear()

        chartInstance?.setOption(unref(getOptions))
      }, 30)
    })
  }

  /** 重置图表宽高 */
  function resize () {
    chartInstance?.resize()
  }

  // 实例销毁时删除监听
  tryOnUnmounted(() => {
    if (!chartInstance) return
    removeResizeFn()
    chartInstance.dispose()
    chartInstance = null
  })

  // 获取实例
  function getInstance () {
    if (!chartInstance) {
      initCharts()
    }
    return chartInstance
  }

  return {
    setOptions,
    resize,
    echarts,
    getInstance
  }
}
