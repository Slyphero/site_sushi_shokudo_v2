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

<div class="menus-page-container">
  <div class="menus-container">
    
    <div class="food-container">
      <div class="heading-container">
        <h2 class="heading">Menus</h2>
      </div>
      <div class="food-entry-container">
        <MenuEntry v-for="menuEntry in menuEntries" :foodEntry=menuEntry />
      </div>
    </div>

    <div class="food-container">
      <div class="heading-container">
        <h2 class="heading">Sushis</h2>
      </div>
      <div class="food-entry-container">
        <MenuEntry v-for="sushiEntry in sushisEntries" :foodEntry=sushiEntry />
      </div>
    </div>

    <div class="food-container">
      <div class="heading-container">
        <h2 class="heading">Makis</h2>
      </div>
      <div class="food-entry-container">
        <MenuEntry v-for="makiEntry in makisEntries" :foodEntry=makiEntry />
      </div>
    </div>

    <div class="food-container">
      <div class="heading-container">
        <h2 class="heading">Sashimis</h2>
      </div>
      <div class="food-entry-container">
        <MenuEntry v-for="sashimiEntry in sashimisEntries" :foodEntry=sashimiEntry />
      </div>
    </div>
    
    <div class="food-container">
      <div class="heading-container">
        <h2 class="heading">Tazunas</h2>
      </div>
      <div class="food-entry-container">
        <MenuEntry v-for="tazunaEntry in tazunasEntries" :foodEntry=tazunaEntry />
      </div>
    </div>

    <div class="food-container">
      <div class="heading-container">
        <h2 class="heading">Temakis</h2>
      </div>
      <div class="food-entry-container">
        <MenuEntry v-for="temakiEntry in temakisEntries" :foodEntry=temakiEntry />
      </div>
    </div>
  </div>
</div>

</template>

<style scoped lang="scss">
.menus-page-container {
  display: flex;
  justify-content: center;

  .menus-container {
    width: 70%;

    .food-container {
      display: flex;
      flex-direction: column;

      .food-entry-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    }
  }
}
</style>