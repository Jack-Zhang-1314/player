<template>
  <div class="flip">
    <router-view></router-view>
    <Container #flip="props">
      <ImageURI v-bind="props" />
    </Container>
  </div>
</template>

<script setup lang="ts">
import { ImageURI, Container } from "@/components/flip"
</script>

<style scoped>
.flip {
  height: 100vh;
  background-color: rgb(23, 29, 29);
}
</style>
