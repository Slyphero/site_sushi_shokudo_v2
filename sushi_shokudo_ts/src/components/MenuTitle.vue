<script setup lang="ts">
import type { MenuTitleEntry } from "@/assets/models/menuTitleEntryInterface";
import { createDocumentRegistry } from "typescript";

defineProps<{
    menuTitle: MenuTitleEntry;
    index: number;
}>()

function createIdTitle(index: number): string {
	return "category-" + index;
}
</script>

<template>
<div v-if="index % 2 === 0" class="menu-title-container">
	<div class="menu-image-title-container">
		<div v-if="menuTitle.image !== undefined" class="menu-image-container">
			<img :src=menuTitle.image alt="">
		</div>

		<div class="menu-title-description-container">
			<div class="menu-title">
				<h2 :id=createIdTitle(index)>
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
				<h2 :id=createIdTitle(index)>
					{{ menuTitle.title }}
				</h2>
			</div>

			<div class="menu-description">
				{{ menuTitle.description }}
			</div>
		</div>

		<div v-if="menuTitle.image !== undefined" class="menu-image-container">
			<img :src=menuTitle.image alt="">
		</div>
	</div>
</div>
</template>

<style scoped lang="scss">
.menu-title-container {
	@include property-color-opacity(background-color, $complementary-color, 0.3);
	display: flex;
	justify-content: center;

	.menu-image-title-container {
		@include flex-direction-alignment(row, space-between, center);
		width: 50%;

		.menu-title-description-container {
			width: 70%;
			@include flex-direction-alignment(column, center, center);

			.menu-title {
				h2 {
					font-size: 72px;
				}
			}

			.menu-description {
				font-size: 24px;
			}
		}

		.menu-image-container {
			width: 30%;
			display: flex;
			justify-content: center;
			img {
				height: 30vh;
			}

			padding: 10px 0;
		}
	}
}

@media only screen and (max-width: 1200px){
	.menu-title-container {
		.menu-image-title-container {
			width: 90%;
		}
	}
}

@media only screen and (max-width: 900px) {
	.menu-title-container {
		.menu-image-title-container {
			.menu-image-container {
				img {
					height: 150px;
				}
			}
			
			.menu-title-description-container {
				.menu-title {
					h2 {
						font-size: 3em;
					}
				}

				.menu-description {
					font-size: 1.1em;
				}
			}
		}
	}
}
</style>