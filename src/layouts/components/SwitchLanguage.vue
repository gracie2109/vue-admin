<template>

<div class="flex gap-6 items-center h-full mr-7 cursor-pointer">
  <n-tooltip placement="bottom" trigger="hover">
    <template #trigger>
        <div  @click="switchLanguage('vi')" :class="{'disable': locale !=='vi'}" class="mt-5">
          <img src="@/assets/images/vietnam.png" alt="" class="w-25 h-25 object-cover inline-block ">
        </div>
    </template>
    <span> {{t('locale.vi')}} </span>

  </n-tooltip>

  <n-tooltip placement="bottom" trigger="hover">
    <template #trigger>
      <div  @click="switchLanguage('en')" :class="{'disable': locale !=='en'}" class="mt-5">
        <img src="@/assets/images/uk.png" alt="" class="w-25 h-25 object-cover inline-block ">
      </div>
    </template>
    <span> {{t('locale.en')}} </span>
  </n-tooltip>

</div>


</template>


<script setup lang="ts">
import {useI18n} from "vue-i18n";
import Tr from "@/i18n/translation"
import { useRouter } from "vue-router"

const { locale, t } = useI18n();
const router = useRouter()

const switchLanguage = async (newLocale: string) => {
  await Tr.switchLanguage(newLocale)

  try {
    await router.replace({ params: { locale: newLocale } })
  } catch(e) {
    console.log(e)
    router.push("/")
  }}

</script>
<style scoped>
  .disable > img{
    filter: grayscale(100%);
  }
</style>
