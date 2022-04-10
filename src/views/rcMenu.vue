<template>
  <Menu :menu="menu" :menuItem="menuItem"></Menu>
</template>

<script setup lang="ts">
import Menu from "@/components/menu"
const menu = [
  {
    name: "播放",
    icon: "play",
  },
  {
    name: "下载",
    icon: "download",
  },
  {
    name: "收藏",
    icon: "collect",
  },
  {
    name: "加速",
    icon: "speed",
  },
  {
    name: "分享",
    icon: "share",
  },
]

const menuItem = [
  {
    name: "👎",
  },
  {
    name: "👌",
  },
  {
    name: "🎂",
  },
]
</script>

<style scoped></style>
