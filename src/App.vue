<template>
  <header>
  </header>
  <RouterView />
  <TabBar v-if="isShowNav"/>
</template>
<script setup lang="ts">
import { watch, ref, onMounted } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'
import TabBar from '@/components/TabBar/TabBar.vue'
// 监听路由变化
const route = useRoute()
const isShowNav = ref(false)

onMounted(() => {
  isChangeNav(route)
})

watch(route, newVal => {
  isChangeNav(newVal)
})

// 做一些特殊处理
const isChangeNav = (data:any) => {
  if ('isShowNav' in data.meta) {
    isShowNav.value = <boolean> data.meta.isShowNav
  } else {
    isShowNav.value = false
  }
}
</script> 
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
