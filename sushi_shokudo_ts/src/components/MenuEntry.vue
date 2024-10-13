<script setup lang="ts">
import type { FoodEntry } from "@/assets/models/foodEntryInterface";

defineProps<{
  	foodEntry: FoodEntry;
}>()
</script>

<template>
<div class="menu-entry-container">
	<div v-if="foodEntry.image !== undefined" class="entry-image-container">
		<img :src=foodEntry.image alt="">
	</div>

	<div class="entry-description-container">
		<div v-if="foodEntry.piecesNumber !== undefined" class="entry-title-container">
			<h6 v-if="foodEntry.piecesNumber > 1">
				{{ foodEntry.title }} ({{ foodEntry.piecesNumber }} pièces) : {{ foodEntry.price.toFixed(2) }}€
			</h6>

			<h6 v-else>
				{{ foodEntry.title }} ({{ foodEntry.piecesNumber }} pièce) : {{ foodEntry.price.toFixed(2) }}€
			</h6>
		</div>

		<div v-else class="entry-title-container">
			<h6>
				{{ foodEntry.title }} : {{ foodEntry.price.toFixed(2) }}€
			</h6>
		</div>

		<div v-if="foodEntry.elements !== undefined" class="entry-elements-container">
			<ul>
				<li v-for="element in foodEntry.elements">
					{{ element }}
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<style scoped lang="scss">
.menu-entry-container 
{
	width: 30%;
	@include property-color-opacity(background-color, $secondary-color, .2);
	margin: 10px 0;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: left;
	align-items: center;
	border-radius: 5px;

	.entry-image-container 
	{
		img 
		{
			height: 15vh;
		}
	}

	.entry-description-container 
	{
		display: flex;
		flex-direction: column;
		justify-content: center;

		.entry-title-container 
		{
			display: flex;
			justify-content: center;
			text-align: center;
			
			h6 
			{
				font-size: 1.3em;
			}
		}

		.entry-elements-container 
		{
			display: flex;
			justify-content: center;
		}
	}
}

@media only screen and (max-width: 1200px) 
{
	.menu-entry-container 
	{
		width: 40%;
	}
}

@media only screen and (max-width: 900px) 
{
	.menu-entry-container 
	{
		width: 80%;
	}
}

@media only screen and (max-width: 600px) 
{
	.menu-entry-container 
	{
		width: 90%;
	}
}
</style>