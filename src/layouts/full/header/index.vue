
<template>
  <AppCard class="flex items-center px-12" border-b="1px solid light_border dark:dark_border">
    <MenuCollapse />

    <BreadCrumb />

    <div class="ml-auto flex flex-shrink-0 items-center px-12 text-18 justify-between">
      <ToggleTheme />

      <Fullscreen />
      <SwitchLanguage />



      <UserAvatar />
    </div>
  </AppCard>
</template>

<script setup>
import { ToggleTheme } from '@/components'
import { BreadCrumb, Fullscreen, MenuCollapse, UserAvatar, SwitchLanguage} from '@/layouts/components'

</script>
