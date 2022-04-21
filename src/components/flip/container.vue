<template>
  {{ rect }}
  <div class="box-pos">
    <slot name="flip" v-bind="metaData.attrs"></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from "vue"
import { metaData, proxyEl } from "./gloabl-flip"
import { useElementBounding } from "@vueuse/core"

// watch(
//   () => proxyEl.value,
//   (newVal) => {
//     rect.value = newVal?.getBoundingClientRect()
//     console.log(newVal?.getBoundingClientRect())
//   },
//   {
//     immediate: true,
//     deep: true,
//   }
// )

const rect = reactive(useElementBounding(proxyEl))

const x = computed(() => {
  return `${rect.x}px`
})
const y = computed(() => {
  console.log(rect.y)
  return `${rect.y}px`
})
</script>

<style scoped>
.box-pos {
  position: absolute;
  left: v-bind(x);
  top: v-bind(y);
  transition: all 0.5s 0s;
}
</style>
