<template>
  <div>
    <d-pagination :total="total" :page-size="pageSize" :currentPage="currentPage" @size-change="onSizeChange" @current-change="onCurrentChange" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
let total = ref(50);
let pageSize = ref(10);
let currentPage = ref(1);
let onCurrentChange = (val) => {
  currentPage.value = val;
}
let onSizeChange = (val) => {
  pageSize.value = val;
}
</script>