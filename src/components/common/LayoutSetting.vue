
<template>
  <div>
    <n-tooltip trigger="hover" placement="left">
      <template #trigger>
        <div class="f-c-c rounded-4 bg-primary p-8" @click="modalRef.open()">
          <i class="i-fe:settings cursor-pointer bg-white text-20" />
        </div>
      </template>
      布局设置
    </n-tooltip>

    <MeModal ref="modalRef" :title="$t('common.changeThemeLayout')" :show-footer="false" width="600px">
      <n-space justify="space-between">
        <div class="flex-col cursor-pointer justify-center" @click="appStore.setLayout('simple')">
          <div class="flex">
            <n-skeleton :width="20" :height="60" />
            <div class="ml-4">
              <n-skeleton :width="80" :height="60" />
            </div>
          </div>
          <n-button
            class="mt-12"
            size="small"
            :type="appStore.layout === 'simple' ? 'primary' : ''"
            ghost
          >
            简约
          </n-button>
        </div>
        <div class="flex-col cursor-pointer justify-center" @click="appStore.setLayout('normal')">
          <div class="flex">
            <n-skeleton :width="20" :height="60" />
            <div class="ml-4">
              <n-skeleton :width="80" :height="10" />
              <n-skeleton class="mt-4" :width="80" :height="46" />
            </div>
          </div>
          <n-button
            class="mt-12"
            size="small"
            :type="appStore.layout === 'normal' ? 'primary' : ''"
            ghost
          >
            通用
          </n-button>
        </div>

        <div class="flex-col cursor-pointer justify-center" @click="appStore.setLayout('full')">
          <div class="flex">
            <n-skeleton :width="20" :height="60" />
            <div class="ml-4">
              <n-skeleton :width="80" :height="6" />
              <n-skeleton class="mt-4" :width="80" :height="4" />
              <n-skeleton class="mt-4" :width="80" :height="42" />
            </div>
          </div>
          <n-button
            class="mt-12"
            size="small"
            :type="appStore.layout === 'full' ? 'primary' : ''"
            ghost
          >
            全面
          </n-button>
        </div>
        <div class="flex-col cursor-pointer justify-center" @click="appStore.setLayout('empty')">
          <div class="flex">
            <n-skeleton :width="104" :height="60" />
          </div>
          <n-button
            class="mt-12"
            size="small"
            :type="appStore.layout === 'empty' ? 'primary' : ''"
            ghost
          >
            空白
          </n-button>
        </div>
      </n-space>
      <p class="mt-16 opacity-50">
        {{$t('common.themeWarning')}}
      </p>

      <div class="space-y-6 mt-20">
        <n-h4>{{ $t('common.chooseTheme') }}</n-h4>
        <ThemeSetting />
      </div>
    </MeModal>
  </div>
</template>

<script setup>
import { MeModal } from '@/components'
import { useAppStore } from '@/store'
import { useModal } from '@/composables'
import {ThemeSetting} from "@/components/index.js";

const appStore = useAppStore()
const [modalRef] = useModal()
</script>
