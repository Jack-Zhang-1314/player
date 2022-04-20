import { reactive, ref } from "vue"

export const metaData = reactive({
  attrs: {},
  props: {},
})

export const proxyEl = ref<HTMLElement | null>()
