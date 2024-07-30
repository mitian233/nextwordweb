<script setup lang="tsx">
import store from "~/utils/stateStore"
import {wordLoading, words, nowWordNum} from "~/utils/wordStore"
import {clientFetchDemoData} from "~/utils/fetchMethods";
import type {WordJsonData} from "~/model/jsonData";
import DevMode from "~/utils/DevMode";

const wordCardRef = ref<HTMLElement | null>(null)

onMounted(async () => {
  //自动滚动页面到 WordCard
  wordCardRef.value?.scrollIntoView({behavior: 'smooth'})
  store.showTopBar = false
})

const {pending: wordDataPending, data: wordFetchData} = await clientFetchDemoData()

watch(wordDataPending, (value) => {
  wordLoading.value = value
  words.value.push(wordFetchData.value as WordJsonData)
})

const handlePrevWord = () => {
  if (DevMode) console.log('prevWord')
  if (nowWordNum.value > 0) nowWordNum.value--
}

const handleNextWord = () => {
  if (DevMode) console.log('nextWord')
  if (nowWordNum.value < words.value.length - 1) nowWordNum.value++
}
</script>

<template>
  <div ref="wordCardRef" class="mt-2 py-5 h-[100svh] global-screen" id="WordCard">
    <WordCard :word-loading="wordLoading" :word-data="words[nowWordNum]" :word-index="nowWordNum" v-on:prevWord="handlePrevWord" v-on:nextWord="handleNextWord" />
  </div>
  <div class="h-[100svh]"></div>
</template>

<style scoped>

</style>
