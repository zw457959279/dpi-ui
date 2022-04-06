<template>
  <div class="demo_size">
    <d-count-to
      suffix="$"
      :color="'red'"
      :startVal="1"
      :endVal="300000"
      :decimals="2"
      :duration="6000"
      :useEasing="false"
    />
  </div>
</template>

<style lang="less">
.demo_size {
  font-size: 30px;
}
</style>