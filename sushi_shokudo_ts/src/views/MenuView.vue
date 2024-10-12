<script setup lang="ts">
import MenuEntry from "@/components/MenuEntry.vue";
import MenuTitle from "@/components/MenuTitle.vue";

import { menuCategories } from "@/assets/constants/menuCategoriesConstants";

function createIndexPrefixId(prefix: string, index: number): string 
{
	return prefix.concat("-", index.toString())
}

</script>

<template>

<div class="menus-page-container">
	<div v-for="(menuCategory, index) in menuCategories" class="category-container">
		<div class="category-title-container" :id="createIndexPrefixId('category', index)">
			<MenuTitle :menuTitle=menuCategory.menuTitleEntry :index=index />
		</div>
		<div class="category-list-container">
			<MenuEntry v-for="entry in menuCategory.foodEntriesArray" :foodEntry=entry />
		</div>
	</div>
</div>

</template>

<style scoped lang="scss">
.menus-page-container 
{
	.category-container 
	{
		display: flex; 
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.category-title-container 
		{
			width: 100%;
		}

		.category-list-container 
		{
			width: 70%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
		}
	}
}
</style>