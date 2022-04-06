<template>
  <div
    class="dpi_card"
    :style="{width:`${width}px`,height: `${height}px`}"
  >
    <span class="top-left"/>
    <span class="top-right"/>
    <span class="bottom-left"/>
    <span class="bottom-right"/>

    <header
      class="dpi_card_header"
    >
      <span class="dpi_card_title">
        <span class="dpi_card_ion1" />
        <slot name="title">{{ title }}</slot>
      </span>
    </header>
    <article class="dpi_card_body">
      <slot><div class="dpi_card_empty">暂无数据</div></slot>
    </article>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    default: () => ''
  },
  width: {
    type: Number,
    default: () => null
  },
  height: {
    type: Number,
    default: () => null
  }
})
</script>
<style lang="less" scoped>
@card_padding: 0px;
@bg-color: #0B1735;
@text_color: #00ECFC;
@border_color: #0A43BC;
@angle_width: 3px;

.dpi_card {
  position: relative;
  background: @bg-color;
  color: @text_color;
  padding: 10px 16px;
  font-size: 16px;
  // height: 300px;
  border: 2px solid @border_color;
  .top-left{
      position: absolute;
      left: -2px;
      top: -2px;
      padding: 10px;
      border-style: solid;
      border-color: @text_color;
      border-width: @angle_width 0 0 @angle_width;
  }
  .top-right{
      position: absolute;
      right: -2px;
      top: -2px;
      padding: 10px;
      border-style: solid;
      border-color: @text_color;
      border-width: @angle_width @angle_width 0 0;
  }
  .bottom-left{
      position: absolute;
      right: -2px;
      bottom: -2px;
      padding: 10px;
      border-style: solid;
      border-color: @text_color;
      border-width: 0 @angle_width @angle_width 0;
  }
  .bottom-right{
      position: absolute;
      left: -2px;
      bottom: -2px;
      padding: 10px;
      border-style: solid;
      border-color: @text_color;
      border-width: 0 0 @angle_width @angle_width;
  }
}

.dpi_card_header {
  font-size: 14px;
  .dpi_card_title {
    display: flex;
    align-items: center;
  }
}

.dpi_card_body {
  padding: 8px;
}

.dpi_card_empty {
  text-align: center;
}

.title_image {
  margin-left: 10px;
}

.flex {
  flex: 1;
  text-align: right;
}

</style>
