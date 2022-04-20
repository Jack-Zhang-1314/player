<template></template>

<script setup lang="ts">
import { useAttrs } from "vue"
import { metaData } from "./gloabl-flip"

const props = defineProps<{
  modelValue?: boolean
}>()
const attrs = useAttrs()
metaData.props = props
metaData.attrs = attrs
</script>

<style scoped></style>
