<template>
  <Card title="预警消息">
    <div class="warning_type_header">
      <div
        v-show="!infos.length"
        class="no_alarm_data">
        <span>暂无预警</span>
      </div>
      <swiper
        v-show="infos.length"
        :modules="modules"
        direction="vertical"
        :slides-per-view="infos.length > 1? 2: 1"
        :space-between="20"
        :observer="true"
        :observe-parents="false"
        :loop="true"
        :autoplay="{
          delay: 60000,
          disableOnInteraction: true
        }"
        @slideChangeTransitionEnd="handleSlideChangeTransitionEnd"
      >
        <SwiperSlide
          v-for="(info, index) of infos"
          :key="index"
          class="swiper_item">
          <span><i class="circle"></i></span>
          <span v-html="info.content"></span>
        </SwiperSlide>
      </swiper>
    </div>
  </Card>
</template>
<script setup>
import { ref, watch } from 'vue'

import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { uniqBy } from 'lodash-es'
import Card from './Card.vue'
import 'swiper/css'

const props = defineProps({
  infos: {
    type: Array,
    default: () => []
  },
  uniqKey: {
    type: String,
    default: () => 'id'
  }
})

const modules = [Autoplay]

const infoListRef = ref([])
watch(props.infos, (data) => {
  debugger
  infoListRef.value.push(...data)
  infoListRef.value = uniqBy(infoListRef.value, uniqKey)
})

const handleSlideChangeTransitionEnd = () => {
  if (infoListRef.value.length > 10) {
    infoListRef.value.pop()
  }
}

</script>
<style lang="less">
.warning_type_header {
  height: 240px;
  .swiper_item {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    font-size: 10px;
    border: 1px solid #0A43BC;
    background: #05153b00;
    padding: 10px;
  }
}

.warning_type_total {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.marg_bottom_4px {
  margin-bottom: 4px;
}

.circle {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 10px;
  background: url('./assets/alarm_info.png');
  background-size: cover;
}

.alarm {
  height: 100px;
}
</style>
<style lang="less">
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: 50px;
}

.no_alarm_data {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee;
}

</style>
