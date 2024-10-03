<script setup lang="ts">
import MenuEntry from '../components/MenuEntry.vue'

const menu1Ingredients: string[] = [
  'Ingrédient 1',
  'Ingrédient 2',
  'Ingrédient 3',
]

const menu2Ingredients: string[] = [
  'Ingrédient 1',
  'Ingrédient 2',
  'Ingrédient 3',
  'Ingrédient 4',
  'Ingrédient 5',
  'Ingrédient 6',
  'Ingrédient 7'
]

const menu3Ingredients: string[] = [
  'Ingrédient 1',
  'Ingrédient 2',
  'Ingrédient 3',
  'Ingrédient 4',
  'Ingrédient 5',
  'Ingrédient 6',
  'Ingrédient 7',
  'Ingrédient 8',
  'Ingrédient 9',
  'Ingrédient 10'
]

</script>

<template>

<div class="menus-entry-container">
  <MenuEntry title="Menu 1" image="/sushi_shokudo.ico" :piecesNumber=1 :price=7.0 :elements=menu1Ingredients />

  <MenuEntry title="Menu 2" image="/sushi_shokudo.ico" :piecesNumber=18 :price=20 :elements=menu2Ingredients />

  <MenuEntry title="Menu 3" image="/sushi_shokudo.ico" :piecesNumber=25 :price=30 :elements=menu3Ingredients />

  <MenuEntry title="Menu 1" image="/sushi_shokudo.ico" :piecesNumber=1 :price=7.0 :elements=menu1Ingredients />

  <MenuEntry title="Menu 2" image="/sushi_shokudo.ico" :piecesNumber=18 :price=20 :elements=menu2Ingredients />

  <MenuEntry title="Menu 3" image="/sushi_shokudo.ico" :piecesNumber=25 :price=30 :elements=menu3Ingredients />

  
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