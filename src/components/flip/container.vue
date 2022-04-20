<template>
  {{ rect }}
  <div class="box-pos">
    <slot name="flip" v-bind="metaData.attrs"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue"
import { metaData, proxyEl } from "./gloabl-flip"

const rect = ref<DOMRect>()

watch(
  () => proxyEl.value,
  (newVal) => {
    rect.value = newVal?.getBoundingClientRect()
  },
  {
    immediate: true,
  }
)

const left = computed(() => {
  return `${rect.value?.left}px`
})
const top = computed(() => {
  return `${rect.value?.right}px`
})
</script>

<style scoped>
.box-pos {
  position: absolute;
  left: v-bind(left);
  top: v-bind(top);
}
</style>
