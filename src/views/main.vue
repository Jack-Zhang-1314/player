<template>
  <button @click="link($event)">player</button>
  <button @click="link($event)">drag</button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()
const link = (event: MouseEvent) => {
  //使用注释忽略也是可以的
  //@ts-ignore
  switch ((event.target! as HTMLElement).innerText) {
    case "player":
      router.push("/player")
      break
    case "drag":
      router.push("/drag")
      break
  }
}
</script>

<style scoped></style>
