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
	<div class="drinks-container">
		<table>
			<thead>
				<tr>
					<th class="drink-column">Boisson</th>
					<th class="price-column">Prix</th>
				</tr>
			</thead>
			<tbody>
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
					<td class="price-column">{{ drinkEntry.price.toFixed(2) }}€</td>
				</tr>
			</tbody>
		</table>
	</div>

	<h3>Alcools</h3>
	<div class="drinks-container">
		<table>
			<thead>
				<tr>
					<th class="drink-column">Alcool</th>
					<th class="price-column">Prix</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="alcoolEntry in alcoolsEntries">
					<td v-if="alcoolEntry.piecesNumber !== undefined && alcoolEntry.alcoolVolume !== undefined && alcoolEntry.elements === undefined" class="drink-column">
						{{ formatAlcoolEntry(alcoolEntry.title, alcoolEntry.piecesNumber, alcoolEntry.alcoolVolume) }}
					</td>
					<td v-if="alcoolEntry.piecesNumber !== undefined && alcoolEntry.alcoolVolume !== undefined && alcoolEntry.elements === undefined" class="price-column">{{ alcoolEntry.price.toFixed(2) }}€</td>
				</tr>

				<tr>
					<td v-if="vins.elements !== undefined" class="drink-column">
						{{
							vins.title.concat(" : ", vins.elements.join(", "))
						}}
					</td>
					<td class="price-column">{{ vins.price.toFixed(2) }}€</td>
				</tr>
			</tbody>
		</table>
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

	.drinks-container 
	{
		font-size: 1.1em;
		display: flex;
		justify-content: center;
		align-items: center;

		table 
		{
			width: 50%;

			td, th
			{
				padding: 10px 0;
			}

			th 
			{
				font-size: 1.2em;
			}

			.drink-column
			{
				width: 90%;
				text-align: left;
			}

			.price-column
			{
				text-align: right;
				width: 10%;
			}
		}
	}
}

@media only screen and (max-width: 1500px)
{
	.menus-page-container 
	{
		.category-container 
		{
			.category-list-container 
			{
				width: 90%;
			}
		}

		.drinks-container 
		{
			table 
			{
				width: 90%;
			}
		}
	}
}
</style>