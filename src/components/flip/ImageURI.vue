<template>
  <img src="https://zyjcould.ltd/erciyuan/0.jpg" alt="" />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    height?: number
    width?: number
    borderRadius?: string | number
  }>(),
  {
    height: 150,
    width: 150,
    borderRadius: "1rem",
  }
)
</script>

<style scoped>
img {
  width: v-bind(width + "px");
  height: v-bind(height + "px");
  border-radius: v-bind(borderRadius);
  transition: all 0.8s 0s;
}
</style>
