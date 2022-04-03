<template>
  <button @click="link()">player</button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()
const link = () => {
  router.push("/player")
}
</script>

<style scoped></style>
