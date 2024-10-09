<script setup lang="ts">
import type { MenuTitleEntry } from "@/assets/models/menuTitleEntryInterface";

defineProps<{
    menuTitle: MenuTitleEntry;
    index: number;
}>()
</script>

<template>
<div v-if="index % 2 === 0" class="menu-title-container">
	<div class="menu-image-title-container">
		<div class="menu-image-container">
			<img :src=menuTitle.image alt="">
		</div>

		<div class="menu-title-description-container">
			<div class="menu-title">
				<h2>
					{{ menuTitle.title }}
				</h2>
			</div>

			<div class="menu-description">
				{{ menuTitle.description }}
			</div>
		</div>
	</div>
</div>

<div v-else class="menu-title-container">
	<div class="menu-image-title-container">
		<div class="menu-title-description-container">
			<div class="menu-title">
				<h2>
					{{ menuTitle.title }}
				</h2>
			</div>

			<div class="menu-description">
				{{ menuTitle.description }}
			</div>
		</div>

		<div class="menu-image-container">
			<img :src=menuTitle.image alt="">
		</div>
	</div>
</div>
</template>

<style scoped lang="scss">
.menu-title-container 
{
	@include property-color-opacity(background-color, $complementary-color, 0.3);
	display: flex;
	justify-content: center;

	.menu-image-title-container 
	{
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 50%;

		.menu-title 
		{
			h2 
			{
				font-size: 72px;
			}
		}

		.menu-description 
		{
			font-size: 24px;
		}

		.menu-image-container 
		{
			img 
			{
				height: 30vh;
			}

			padding: 10px 0;
		}
	}
}
</style>