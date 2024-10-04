<script setup lang="ts">
import { menuEntries } from '@/assets/constants/menuEntriesConstants'
import { sushisEntries } from '@/assets/constants/sushisEntriesConstants'
import { makisEntries } from '@/assets/constants/makisEntriesConstants'
import { sashimisEntries } from '@/assets/constants/sashimisEntriesConstants';
import { tazunasEntries } from '@/assets/constants/tazunasEntriesConstants';
import { temakisEntries } from '@/assets/constants/temakisEntriesConstants';

import MenuEntry from '@/components/MenuEntry.vue'

</script>

<template>

<div class="food-entry-container">
  <MenuEntry v-for="menuEntry in menuEntries" :foodEntry=menuEntry />
</div>

<div class="food-entry-container">
  <MenuEntry v-for="sushiEntry in sushisEntries" :foodEntry=sushiEntry />
</div>

<div class="food-entry-container">
  <MenuEntry v-for="makiEntry in makisEntries" :foodEntry=makiEntry />
</div>

<div class="food-entry-container">
  <MenuEntry v-for="sashimiEntry in sashimisEntries" :foodEntry=sashimiEntry />
</div>

<div class="food-entry-container">
  <MenuEntry v-for="tazunaEntry in tazunasEntries" :foodEntry=tazunaEntry />
</div>

<div class="food-entry-container">
  <MenuEntry v-for="temakiEntry in temakisEntries" :foodEntry=temakiEntry />
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