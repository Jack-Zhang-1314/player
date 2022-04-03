<template>
  <article>
    <p :draggable="'true'" ref="dragImageRef" class="drag-image">拖放图片喽</p>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"

const dragImageRef = ref<HTMLDivElement>()

onMounted(() => {
  dragImageRef.value!.addEventListener("dragover", (e: DragEvent) => {
    //* 取消浏览器拖放图片会默认打开窗口的事件
    e.preventDefault()
  })

  dragImageRef.value!.addEventListener("drop", (e: DragEvent) => {
    e.preventDefault()
    Array.from(e.dataTransfer!.items).forEach((item) => {
      //console.log(item)
      if (item.kind === "file") {
        const file = item.getAsFile()
        const url = URL.createObjectURL(file!)
        const img = new Image()
        img.src = url
        img.style.maxHeight = "100%"
        img.style.maxWidth = "100%"
        ;(e.target! as HTMLElement).innerText = ""
        ;(e.target! as HTMLElement).appendChild(img)
      }
    })
  })
})
</script>

<style scoped>
article {
  display: flex;
  height: 50%;

  background-image: linear-gradient(rgb(32, 158, 139), rgb(250, 135, 53));
  justify-content: center;
  align-items: center;
}
.drag-image {
  padding: 4rem;
  border: 0.1rem dotted rgb(77, 248, 222);
  max-width: 50%;
  height: 50%;
}
</style>
