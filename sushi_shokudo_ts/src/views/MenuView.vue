<script setup lang="ts">
import { menuEntries } from '@/assets/constants/menuEntriesConstants'

import MenuEntry from '@/components/MenuEntry.vue'

</script>

<template>

<div class="menus-entry-container">
  <MenuEntry v-for="menuEntry in menuEntries" :foodEntry=menuEntry />
</div>

</template>

<style scoped lang="scss">
  .menus-entry-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>