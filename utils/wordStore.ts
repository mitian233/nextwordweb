import {reactive, ref} from "vue"
import type {WordJsonData} from "~/model/jsonData";

export const wordStore = reactive({

})

export const words = ref<WordJsonData[]>([])

export const wordLoading = ref(true)

export const nowWordNum = ref(0)
