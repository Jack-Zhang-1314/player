<template>
  <section ref="dragRef">
    <article class="drag-block">
      <div
        id="drag-item1"
        class="drag-item"
        style="background-color: cadetblue"
        :draggable="'true'"
      >
        huohuo
      </div>
      <div
        id="drag-item2"
        class="drag-item"
        style="background-color: gray"
        :draggable="'true'"
      >
        huohuo
      </div>
      <div
        id="drag-item3"
        class="drag-item"
        style="background-color: skyblue"
        :draggable="'true'"
      >
        huohuo
      </div>
      <div
        id="drag-item4"
        class="drag-item"
        style="background-color: yellowgreen"
        :draggable="'true'"
      >
        huohuo
      </div>
      <div
        id="drag-item5"
        class="drag-item"
        style="background-color: whitesmoke"
        :draggable="'true'"
      >
        huohuo
      </div>
      <div
        id="drag-item6"
        class="drag-item"
        style="background-color: khaki"
        :draggable="'true'"
      >
        huohuo
      </div>
    </article>
    <article class="drag-container"></article>
  </section>
  <dragImage></dragImage>
</template>

<script setup lang="ts">
import dragImage from "./dragImage.vue"
import { ref, onMounted } from "vue"

const dragRef = ref<HTMLDivElement>()
onMounted(() => {
  let startDragEle: HTMLElement | null = null,
    endDragEle: HTMLElement | null = null
  //* 开始拖拽
  dragRef.value!.addEventListener("dragstart", (e: DragEvent) => {
    e.dataTransfer!.setData("text/plain", (e.target as HTMLElement)!.id)
    if ((e.target as HTMLElement).className === "drag-item") {
      startDragEle = e.target as HTMLElement
    }
  })

  //* 拖拽过程
  dragRef.value!.addEventListener("dragover", (e: DragEvent) => {
    //* 阻止默认行为
    e.preventDefault()
  })

  dragRef.value!.addEventListener("dragenter", (e: DragEvent) => {
    if ((e.target as HTMLElement).className === "drag-item") {
      endDragEle = e.target as HTMLElement
    }
  })

  //* 放置元素
  dragRef.value!.addEventListener("drop", (e: DragEvent) => {
    //* 元素进入拖拽区域
    if (
      (e.target! as HTMLElement).className === "drag-container" ||
      (e.target! as HTMLElement).className === "drag-block"
    ) {
      const dragEle = e.dataTransfer?.getData("text/plain")
      ;(e.target! as HTMLElement).appendChild(
        document.getElementById(dragEle!)!
      )
    }

    //* 元素上下移动
    if ((e.target! as HTMLElement).className === "drag-item") {
      const dragEle = e.dataTransfer?.getData("text/plain")
      //* 插入目标的下一个元素
      ;(e.target! as HTMLElement).parentElement!.insertBefore(
        document.getElementById(dragEle!)!,
        (e.target! as HTMLElement).nextElementSibling!
      )
    }
  })
})
</script>

<style scoped>
section {
  display: flex;
  justify-content: space-evenly;
  background-image: url(@/assets/img/0.jpg);
  background-size: cover;
  height: 50%;
}

.drag-block,
.drag-container {
  border: 0.1rem solid none;
  /* border-image: linear-gradient(
      112deg,
      rgba(18, 85, 93, 0.73),
      rgb(255, 193, 112)
    )
    10 repeat; */
  backdrop-filter: blur(10px);
  min-width: 8rem;
}

.drag-item {
  flex: 5rem;
  margin: 0.8rem 0.8rem;
  padding: 0.6rem 2rem;
  border-radius: 0.5rem;
}
</style>
