<template>
  <div class="submit_box">
    <d-button btn-type="submit" /> <d-button btn-type="submit" disabled />
  </div>
</template>
<style lang="less" scoped>
  .submit_box{
    display: flex;
    justify-content: flex-start;
    .d-button{
      margin-right: 20px;
    }
  }
</style>