<script setup lang="ts">
import type {WordJsonData} from "~/model/jsonData"

const bgControllerRef = ref<HTMLDivElement | null>(null)

defineProps<{
  wordData: WordJsonData,
  wordLoading: boolean,
  wordIndex: number
}>()
defineEmits({
  prevWord: null,
  nextWord: null,
  test: null
})

const handleLike = (index: number) => {
  const likedP = `<p>liked${index}</p>`
  bgControllerRef.value?.insertAdjacentHTML('beforeend', likedP)
}
</script>

<template>
  <div class="h-full w-full relative">
    <div class="h-full w-full rounded-3xl shadow-lg overflow-hidden">
      <div v-if="wordLoading" class="h-full w-full skeleton"/>
      <div v-else class="h-full w-full flex justify-center items-center bg-black">
        <img v-if="wordData?.gifUrl !== ''" :src="wordData?.gifUrl" alt="word image" class="word-image">
        <div v-else class="h-full w-full flex justify-center items-center">
          <p class="text-4xl text-white">No Image</p>
        </div>
      </div>
      <div ref="bgControllerRef" @dblclick="handleLike(wordIndex)" class="absolute top-0 left-0 right-0 bottom-0"/>
    </div>
    <div class="word-card p-4 bg-base-100 backdrop-blur-lg bg-opacity-50">
      <div v-if="wordLoading" class="h-full w-full">
        <div class="skeleton h-4 w-28"></div>
        <div class="skeleton h-4 w-full"></div>
        <div class="skeleton h-4 w-full"></div>
      </div>
      <div v-else>
        <p>
          <p class="text-xl inline-block mr-2">{{ wordData?.en.word }}</p>
          <p class="text-sm inline-block">{{ wordData?.en.pronunciation }}</p>
        </p>
        <p>{{ wordData?.en.paragraphs }}</p>
        <p>{{ wordData?.en.sentence }}</p>
      </div>
    </div>
    <div id="controller" class="controller">
      <button @click="$emit('prevWord')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-chevron-up">
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </button>
      <button @click="$emit('nextWord')">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-chevron-down">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-heart">
          <path
              d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      </button>
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="lucide lucide-ellipsis-vertical">
          <circle cx="12" cy="12" r="1"/>
          <circle cx="12" cy="5" r="1"/>
          <circle cx="12" cy="19" r="1"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .word-card {
    @apply right-10 scale-75;
    transform-origin: 0 100%;
  }

  .word-image {
    @apply w-full
  }
}

.word-card {
  @apply absolute rounded-lg bottom-5 left-5 md:bottom-10 md:left-10 md:max-w-[calc(50%)];
  transition: all 0.3s ease-in-out;
}

.word-card:hover {
  opacity: 0;
}

.word-image {
  @apply md:h-full object-cover;
}

.controller {
  @apply absolute right-2 md:right-5 top-[30%] flex flex-col gap-2 items-center text-white;
}

.controller button {
  transition: all 0.1s ease-in-out;
  text-shadow: 2px 2px 2px black;
}

.controller button:active {
  transform: scale(0.9);
}

.controller button svg {
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 1));
  height: 40px;
  width: 40px;
}
</style>
