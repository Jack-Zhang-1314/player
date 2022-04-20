<template>
  <article class="main-layer">
    <div @click="link($event)">player</div>
    <div @click="link($event)">drag</div>
    <div @click="link($event)">rcMenu</div>
    <div @click="link($event)">flip</div>
  </article>
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
      console.log((event.target! as HTMLElement).innerText)
      break
    case "drag":
      router.push("/drag")
      break
    case "rcMenu":
      router.push("/rcMenu")
      break
    case "flip":
      router.push("/flip")
      break
  }
}
</script>

<style scoped>
.main-layer {
  display: grid;
  min-height: 100%;
  grid: repeat(5, 1fr) / repeat(5, 1fr);
  gap: 1rem;
}
div {
  background: linear-gradient(
    to right,
    rgba(43, 60, 81, 0.544),
    rgb(148, 210, 220)
  );
  text-align: center;
}
div:hover {
  border: solid 0.0625rem #a4f7d8;
  box-shadow: 0 0 0.5rem #464847 inset;
}
</style>
