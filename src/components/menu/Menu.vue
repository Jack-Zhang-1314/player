<template>
  <section class="wrap">
    <article class="content">
      <ul class="menu">
        <li class="item" v-for="item in menu" :key="item.icon">
          <span>{{ item.name }}</span>
        </li>
        <li class="item share">
          <div class="share-button">
            <span>😊 </span>
          </div>
          <ul class="share-item">
            <li class="item" v-for="item in menuItem" :key="item.name">
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </article>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  menu: { name: string; icon: string }[]
  menuItem: { name: string }[]
}>()
</script>

<style scoped>
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(135deg, #60f9d0, #0d5653);
  min-height: 100vh;
  font-size: 1rem;
}
.content {
  min-width: min(10vw, 140px);
  border-radius: 10px;
  background-image: linear-gradient(135deg, rgb(231, 249, 246), transparent);
  box-shadow: 5px 5px 5px #3b4646;
}

.menu {
  display: flex;
  position: relative;
}

.item {
  padding: 0.3rem 0.4rem;
  list-style: none;
  cursor: pointer;
}
.item:hover {
  background-color: #a9d5cd;
  border-radius: 10px;
}
.share-item {
  position: absolute;
  background-image: linear-gradient(135deg, #c0f4f2, transparent);
  border-radius: 10px;
  top: 2rem;
  right: -0.1rem;
  pointer-events: none;
  box-shadow: 0 5px 5px #596161;
  opacity: 0;
  transition: 0.2s ease;
}

/* 不能使用+选择器,这样会一直是动画的播放状态 */
.share:hover .share-item {
  opacity: 1;
  pointer-events: auto;
}
</style>
