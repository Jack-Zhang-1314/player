<template>
  <div class="box-btn">
    <button class="btn" @click="push">go</button>
  </div>
  <Proxy borderRadius="1rem"></Proxy>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"
import Proxy from "./proxy.vue"
const router = useRouter()
const push = () => {
  router.push("/flip/flip-child")
}
</script>

<style scoped>
@import "@/assets/css/flip-btn.css";
</style>
