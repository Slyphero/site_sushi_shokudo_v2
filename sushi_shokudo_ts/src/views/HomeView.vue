<script setup lang="ts">
import logo from "/sushi_shokudo.webp";
import { RouterLink } from "vue-router";
import { uberLink } from "@/assets/constants/constants";
</script>

<template>
<div class="home-container">
	<div class="home-slide-container">
		<img class="homepage-logo" :src="logo" alt="" loading="lazy">

		<section class="home-title-buttons-container">
			<h1 style="color: white">
				Restaurant local de <strong class="accent-text">Sushis</strong>
			</h1>

			<div class="home-buttons-container">
				<RouterLink class="primary-button home-link link" to="/menu">
					Menus
				</RouterLink>
				<RouterLink class="secondary-button home-link link" to="/commander">
					Commander
				</RouterLink>
			</div>
		</section>
	</div>
</div>
</template>

<style scoped lang="scss">
.home-container {
	@include property-color-opacity(background-color, $complementary-color, 0.3);
	display: flex;
	justify-content: center;
	min-height: 88vh;

	background-image: url("/photo_page_accueil.jpg");

	.home-slide-container {
		@include flex-direction-alignment(row, space-between, center);
		width: 70%;
		padding: 100px 0;

		.homepage-logo {
			height: 500px;
			filter: drop-shadow(1px 1px 12px black);
		}

		.home-title-buttons-container {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 50%;
			width: 60%;

			h1 {
				font-size: 72px;
				text-shadow: 1px 1px 12px black;
			}

			.home-buttons-container {
				width: 50%;
				display: flex;
				justify-content: space-between;

				.home-link {
					text-decoration: none;
					font-size: 24px;
					padding: 20px;
					border-radius: 5px;
				}

				.home-link:hover {
					@include property-color-opacity(background-color, $background-color, 1);
					@include property-color-opacity(color, $text-color, 1);
					transition: 0.2s ease-in-out;
				}

				.primary-button {
					@include property-color-opacity(color, white, 1);
					@include property-color-opacity(background-color, $primary-color, 1);
				}

				.secondary-button {
					@include property-color-opacity(background-color, $secondary-color, 1);
				}
			}
		}
	}
}

@media only screen and (max-width: 1500px) {
	.home-container {
		.home-slide-container {
			.home-title-buttons-container {
				.home-buttons-container {
					width: 70%;
				}
			}
		}
	}
}

@media only screen and (max-width: 1200px) {
	.home-container {
		.home-slide-container {
			width: 90%;

			.home-title-buttons-container {
				width: 60%; 

				.home-buttons-container {
					width: 70%;
				}
			}
		}
	}
}

@media only screen and (max-width: 900px) {
	.home-container {
		.home-slide-container {
			.homepage-logo {
				height: 300px;
			}
		}
	}
}

@media only screen and (max-width: 900px) {
	.home-container {
		.home-slide-container {
			.homepage-logo {
				height: 250px;
			}
		}
		
		.home-title-buttons-container {
			.home-buttons-container 
			{
				width: 100%;
			}
		}
	}
}

@media only screen and (max-width: 768px) {
	.home-container {
		.home-slide-container {
			@include flex-direction-alignment(column, space-between, center);
			padding: 20px 0;

			.home-title-buttons-container {
				height: 80%;
				align-items: center;

				h1 {
					text-align: center;
				}

				.home-buttons-container {
					height: 40%;
					width: 90%;
					@include flex-direction-alignment(column, space-between, center);

					.home-link {
						width: 70%;
						text-align: center;
					}
				}
			}
		}
	}
}
</style>