<script setup lang="ts">
import MenuEntry from "@/components/MenuEntry.vue";
import MenuTitle from "@/components/MenuTitle.vue";

import { menuCategories } from "@/assets/constants/menuCategoriesConstants";

import { drinksEntries } from "@/assets/constants/drinksEntriesConstants";
import { alcoolsEntries } from "@/assets/constants/alcoolsEntriesConstants";
import type { DrinkEntry } from "@/assets/models/drinkEntryInterface";

const vinsArray: DrinkEntry[] = alcoolsEntries.slice(-1);
const vins: DrinkEntry = vinsArray[0];

function createIndexPrefixId(prefix: string, index: number): string 
{
	return prefix.concat(
		"-", 
		index.toString()
	);
}

function formatDrinkEntry(title: string, quantity: number): string 
{
	return title.concat(
		" (", 
		quantity.toString(), 
		" cL)"
	);
}

function formatAlcoolEntry(
	title: string, 
	quantity: number, 
	degree: number
): string
{
	return formatDrinkEntry(title, quantity).concat(
		" (", 
		degree.toString(), 
		" %)"
	);
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

	<div class="drinks-container-title">
		<h2 class="drinks-title">Boissons</h2>
	</div>

	<h3>Sans alcool</h3>
	<table>
		<tr>
			<th>Boisson</th>
			<th>Prix</th>
		</tr>
		<tr v-for="drinkEntry in drinksEntries">
			<td v-if="drinkEntry.piecesNumber !== undefined && drinkEntry.elements === undefined">
				{{ formatDrinkEntry(drinkEntry.title, drinkEntry.piecesNumber) }}
			</td>
			<td v-else-if="drinkEntry.piecesNumber !== undefined && drinkEntry.elements !== undefined">
				{{ 
					formatDrinkEntry(
						drinkEntry.title, 
						drinkEntry.piecesNumber).concat(
							" : ", 
							drinkEntry.elements.join(", ")
						) 
				}}
			</td>
			<td>{{ drinkEntry.price.toFixed(2) }}€</td>
		</tr>
	</table>

	<h3>Alcools</h3>
	<table>
		<tr>
			<th>Alcool</th>
			<th>Prix</th>
		</tr>

		<tr v-for="alcoolEntry in alcoolsEntries">
			<td v-if="alcoolEntry.piecesNumber !== undefined && alcoolEntry.alcoolVolume !== undefined && alcoolEntry.elements === undefined">
				{{ formatAlcoolEntry(alcoolEntry.title, alcoolEntry.piecesNumber, alcoolEntry.alcoolVolume) }}
			</td>
			<td v-if="alcoolEntry.piecesNumber !== undefined && alcoolEntry.alcoolVolume !== undefined && alcoolEntry.elements === undefined">{{ alcoolEntry.price.toFixed(2) }}€</td>
		</tr>

		<tr>
			<td v-if="vins.elements !== undefined">
				{{
					vins.title.concat(" : ", vins.elements.join(", "))
				}}
			</td>
			<td>{{ vins.price.toFixed(2) }}€</td>
		</tr>
	</table>
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

	.drinks-container-title 
	{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		height: 20vh;

		h2 
		{
			font-size: 72px;
		}
	}

	h3 
	{
		text-align: center;
		font-size: 48px;
	}
}
</style>