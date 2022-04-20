<template>
  <div class="box-btn">
    <button
      @click="item.callback"
      class="btn"
      v-for="item in btnData"
      :key="item.name"
    >
      {{ item.name }}
    </button>
  </div>
  <div class="box-pos">
    <Proxy :height="200" :width="200" borderRadius="50%"></Proxy>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router"
import Proxy from "./proxy.vue"

const router = useRouter()

const back = () => {
  router.back()
}

const rush = () => {}

const btnData = {
  back: { name: "back", callback: back },
  rush: { name: "rush", callback: rush },
}
</script>
<style scoped>
@import "@/assets/css/flip-btn.css";
.box-pos .bot-btn {
  flex-basis: 1;
}
.box-pos {
  display: flex;
  justify-content: center;
  width: auto;
  flex-wrap: wrap;
}
</style>
