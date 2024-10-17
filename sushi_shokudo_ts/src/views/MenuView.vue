<script setup lang="ts">
import { onMounted } from "vue";

import MenuEntry from "@/components/MenuEntry.vue";
import MenuTitle from "@/components/MenuTitle.vue";

import { menuCategories } from "@/assets/constants/menuCategoriesConstants";

import { drinksEntries } from "@/assets/constants/drinksEntriesConstants";
import { alcoolsEntries } from "@/assets/constants/alcoolsEntriesConstants";
import type { DrinkEntry } from "@/assets/models/drinkEntryInterface";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faX, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const vinsArray: DrinkEntry[] = alcoolsEntries.slice(-1);
const vins: DrinkEntry = vinsArray[0];

let h2Array: NodeListOf<HTMLHeadingElement>;

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

function smoothScrollTo(target: string): void 
{
	let titleElement: HTMLElement | null = document.getElementById(target);
	if (titleElement)
	{
		window.scrollTo({
			top: titleElement.offsetTop,
			behavior: "smooth"
		});
	}
}

function createAsideLinks(headingsElements: NodeListOf<HTMLHeadingElement>): void 
{
	const ul: HTMLElement | null = document.getElementById("table-of-contents-links");
	let li: HTMLLIElement | null;
	let node: Text | null;

	for (let i = 0; i < headingsElements.length; i++)
	{
		li = document.createElement("li");
		if (headingsElements[i].textContent !== null)
		{
			node = document.createTextNode(headingsElements[i].textContent);
			if (ul !== null)
			{
				li.appendChild(node); 
				li.classList.add("table-of-contents-link");
				li.setAttribute("style", "padding: 10px 30px; font-size: 1.5em; cursor: pointer; overflow: auto");

				li.addEventListener("click", () => {
					smoothScrollTo(headingsElements[i].id)
				});

				ul.appendChild(li);
			}
		}
	}
}

function showTableOfContents(): void
{
	document.getElementById("aside-container")?.classList.add("show");
}

function hideTableOfContents(): void 
{
	document.getElementById("aside-container")?.classList.remove("show");
}

onMounted(() => {
	h2Array = document.querySelectorAll("h2");
	createAsideLinks(h2Array);
})
</script>

<template>
<div class="table-of-contents-button-container" @click="showTableOfContents">
	<FontAwesomeIcon :icon=faArrowRight class="table-of-contents-button" />
</div>

<div id="aside-container" class="aside-container">
	<aside>
		<h5>Carte</h5>
		<div class="close-table-of-contents-button-container" @click="hideTableOfContents">
			<FontAwesomeIcon :icon=faX class="table-of-contents-close-button" />
		</div>
		<ul id="table-of-contents-links">
			<!-- Contenu chargé par code Typescript -->
		</ul>
	</aside>
</div>

<div class="menus-page-container">
	<div v-for="(menuCategory, index) in menuCategories" class="category-container">
		<div class="category-title-container">
			<MenuTitle :menuTitle=menuCategory.menuTitleEntry :index=index />
		</div>
		<div class="category-list-container">
			<MenuEntry v-for="entry in menuCategory.foodEntriesArray" :foodEntry=entry />
		</div>
	</div>

	<div class="drinks-container-title">
		<h2 id="drinks-title" class="drinks-title">Boissons</h2>
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
.table-of-contents-button-container 
{
	position: fixed;
	top: 0;
	padding: 10px;
	.table-of-contents-button 
	{
		font-size: 2em;
	}
}

.aside-container 
{
	position: fixed;
	left: -100%;
	top: 0;
	@include property-color-opacity(background-color, $background-color, 1);
	height: 100%;
	width: 25%;

	aside 
	{
		height: 100%;
		h5 
		{
			font-size: 2em;
			text-align: center;
		}

		.close-table-of-contents-button-container 
		{
			padding: 10px 30px;
			.table-of-contents-close-button 
			{
				font-size: 2em;
			}
		}
	}

	transition: 0.5s ease-in-out;
}

.show 
{
	left: 0;
	transition: 0.5s ease-in-out;
}



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
	.aside-container 
	{
		width: 30%;
	}
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

@media only screen and (max-width: 900px)
{
	.aside-container 
	{
		width: 100%;
	}
	.menus-page-container 
	{
		.category-container
		{
			.category-list-container
			{
				justify-content: center;
			}
		}
	}
}
</style>