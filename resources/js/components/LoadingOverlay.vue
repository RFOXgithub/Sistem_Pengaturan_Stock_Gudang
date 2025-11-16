<template>
  <div v-if="show" class="loading-overlay">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  props: ["show"]
};
</script>