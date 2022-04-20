<template>
  <slot name="watch" v-bind="metaData.attrs"></slot>
</template>

<script setup lang="ts">
import { metaData } from "./gloabl-flip"
console.log(metaData)
</script>

<style scoped></style>
