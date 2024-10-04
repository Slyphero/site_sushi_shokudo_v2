<script setup lang="ts">
import type { FoodEntry } from '@/assets/models/foodEntryInterface'

defineProps<{
  foodEntry: FoodEntry
}>()
</script>

<template>
<div class="menu-entry-container">
  <div class="entry-image-container">
    <img :src=foodEntry.image alt="">
  </div>
  <div class="entry-description-container">
    <div class="entry-title-container">
      <h6 v-if="foodEntry.piecesNumber > 1">{{ foodEntry.title }} ({{ foodEntry.piecesNumber }} pièces) : {{ foodEntry.price.toFixed(2) }} €</h6>
      <h6 v-else>{{ foodEntry.title }} ({{ foodEntry.piecesNumber }} pièce) : {{ foodEntry.price.toFixed(2) }} €</h6>
    </div>
    <div class="entry-elements-container">
      <ul>
        <li v-for="element in foodEntry.elements">{{ element }}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
  .menu-entry-container {
    width: 25%;
    @include property-color-opacity(background-color, $secondary-color, .2);
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    border-radius: 5px;

    .entry-image-container {
      img {
        height: 150px;
      }
    }

    .entry-description-container {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .entry-title-container {
        display: flex;
        justify-content: center;
        h6 {
          font-size: 24px;
        }
      }

      .entry-elements-container {
        display: flex;
        justify-content: center;
      }
    }
  }
</style>