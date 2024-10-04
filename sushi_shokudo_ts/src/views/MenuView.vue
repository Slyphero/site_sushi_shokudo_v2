<script setup lang="ts">
import { menuEntries } from '@/assets/constants/menuEntriesConstants'
import { sushisEntries } from '@/assets/constants/sushisEntriesConstants'

import MenuEntry from '@/components/MenuEntry.vue'

</script>

<template>

<div class="food-entry-container">
  <MenuEntry v-for="menuEntry in menuEntries" :foodEntry=menuEntry />
</div>

<div class="food-entry-container">
  <MenuEntry v-for="sushiEntry in sushisEntries" :foodEntry=sushiEntry />
</div>

</template>

<style scoped lang="scss">
  .food-entry-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>