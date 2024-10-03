<script setup lang="ts">
defineProps<{
  title: string 
  image: string 
  piecesNumber: number
  price: number 
  elements?: string[]
}>()
</script>

<template>
<div class="menu-entry-container">
  <div class="entry-image-container">
    <img :src=image alt="">
  </div>
  <div class="entry-description-container">
    <div class="entry-title-container">
      <h6 v-if="piecesNumber > 1">{{ title }} ({{ piecesNumber }} pièces) : {{ price.toFixed(2) }} €</h6>
      <h6 v-else>{{ title }} ({{ piecesNumber }} pièce) : {{ price.toFixed(2) }} €</h6>
    </div>
    <div class="entry-elements-container">
      <ul>
        <li v-for="element in elements">{{ element }}</li>
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