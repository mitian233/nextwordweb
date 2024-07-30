<script setup lang="tsx">
const topbarRef = ref<HTMLElement | null>(null)
import gsap from 'gsap'
import { Observer } from 'gsap/src/all'
import store from "~/utils/stateStore"

gsap.registerPlugin(Observer)

onMounted(() => {
  Observer.create({
    target: window,
    type: 'touch,scroll',
    onUp: () => store.showTopBar = true,
    onDown: () => store.showTopBar = false
  })
})

watch(() => store.showTopBar, (value) => {
  if (value === false) topbarRef.value?.classList.add('hideTopBar')
  else topbarRef.value?.classList.remove('hideTopBar')
})
</script>

<template>
  <div ref="topbarRef" class="global-screen bg-base-100 sticky z-50 border-b-[2px] top-0 right-0 left-0 flex flex-row justify-between items-center py-5 topbar">
    <div class="flex flex-row items-center gap-3">
      <img src="/NextWordLogo.png" alt="NextWord Logo" class="h-10">
      <p><span class="font-bold">NextWord</span>App</p>
    </div>
    <button class="btn btn-xs sm:btn-sm md:btn-md">Login</button>
  </div>
</template>

<style scoped>
.topbar {
  transition: all 0.3s ease-in-out;
}
.hideTopBar {
  transform: translateY(-100%);
}
</style>
