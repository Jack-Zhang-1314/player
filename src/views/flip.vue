<template>
  <router-view></router-view>
  <Container #flip="props">
    <ImageURI v-bind="props" />
  </Container>
</template>

<script setup lang="ts">
import { ImageURI, Container } from "@/components/flip"
</script>

<style scoped></style>
