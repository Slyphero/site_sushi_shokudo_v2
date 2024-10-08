<script setup lang="ts">
import MenuEntry from '@/components/MenuEntry.vue'

import { menuCategories } from '@/assets/constants/menuCategoriesConstants';

</script>

<template>

<div class="menus-page-container">
  <div class="menus-container">
    <section class="food-container" v-for="menuCategory in menuCategories">
      <h2 class="heading">{{ menuCategory.headingName }}</h2>
      <div class="food-entry-container">
        <MenuEntry v-for="entry in menuCategory.foodEntriesArray" :foodEntry=entry />
      </div>
    </section>
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