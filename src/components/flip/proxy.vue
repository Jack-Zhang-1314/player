<template>
  <div ref="el" class="box-proxy"></div>
</template>

<script setup lang="ts">
import { ref, useAttrs, onMounted } from "vue"
import { metaData, proxyEl } from "./gloabl-flip"

const props = defineProps<{
  modelValue?: boolean
}>()

const attrs = useAttrs() as {
  height: number
  width: number
  borderRadius: string
}
const { height, width, borderRadius } = attrs
const el = ref<HTMLElement>()
metaData.props = props
metaData.attrs = attrs

onMounted(() => {
  proxyEl.value = el.value
})
</script>

<style scoped>
.box-proxy {
  height: v-bind(height + "px");
  width: v-bind(width + "px");
  border-radius: v-bind(borderRadius);
}
</style>
