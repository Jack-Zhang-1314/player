<template>
  <div class="smaller-player"></div>
  <div class="box-back-player">
    <!-- 小视频 -->
    <!-- 播放器 -->
    <div ref="playerFatherRef" class="big-player">
      <teleport to=".smaller-player" :disabled="isOpen">
        <div style="height: 100%" ref="playerRef"></div>
      </teleport>
    </div>
  </div>
</template>

<script setup lang="ts">
import dplayer from "dplayer"
import { onMounted, ref } from "vue"
import { useIntersectionObserver } from "@vueuse/core"

// 初始化播放器
const playerRef = ref<HTMLDivElement>()

//监听播放器父元素
const playerFatherRef = ref<HTMLDivElement>()

//是否开启teleport
const isOpen = ref(true)

onMounted(() => {
  const player = new dplayer({
    container: playerRef.value!,
    video: {
      url: "https://zyjcould.ltd/mv/player.mp4",
    },
  })

  useIntersectionObserver(playerFatherRef, ([{ isIntersecting }]) => {
    isOpen.value = isIntersecting
  })
})
</script>

<style scoped>
.box-back-player {
  display: flex;
  height: 200%;
  width: 100%;
  background-image: url(@/assets/img/0.jpg);
  background-size: cover;
  justify-content: center;
}

.smaller-player {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 15rem;
  height: 10rem;
  border-radius: 1rem;
  border: 2px solid rgb(14, 29, 36);
  /* backdrop-filter: blur(10px); */
}

.big-player {
  flex: auto;
  margin-top: 5rem;
  max-width: 50%;
  height: 20%;
}

.dplayer {
  border-radius: 1rem;
  box-shadow: 1rem 1rem 1rem 1rem rgba(0, 0, 0, 0.5);
}
</style>
