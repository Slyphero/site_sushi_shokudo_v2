<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import logo from './assets/img/logo_normal_transparent.png'

interface NavEntry {
	name: string;
	link: string;
}

const navEntries: NavEntry[] = [
	{ name: 'Accueil', link: '/accueil' },
	{ name: 'Menu', link: '/menu' },
	{ name: 'Commander', link: '/commander' },
	{ name: 'A propos', link: '/a-propos' }
]
</script>

<template>
  <div class="header-container">
		<header>
			<div class="header-logo-container">
				<img class="header-logo" :src="logo" alt="">
			</div>
			
			<nav class="header-links">
				<RouterLink class="header-link" v-for="navEntry in navEntries" :to=navEntry.link>{{ navEntry.name }}</RouterLink>
			</nav>
		</header>
	</div>
  <RouterView />
  <div class="footer-container">
		<footer>
			<div class="footer-logo-container">
				<img class="footer-logo" :src="logo" alt="">
			</div>
			
			<nav class="footer-links">
				<RouterLink class="footer-link" v-for="navEntry in navEntries" :to=navEntry.link>{{ navEntry.name }}</RouterLink>
			</nav>

			<div class="contact-container">
				<ul>
					<li>sushi.shokudo.lyon@gmail.com</li>
					<li>Numéro</li>
				</ul>
			</div>

			<div class="socials-container">
				<ul>
					<li>Lien facebook</li>
					<li>Lien insta</li>
				</ul>
			</div>
		</footer>
	</div>
</template>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		font-family: $body-font;
	}

	.header-logo {
		height: 100px;
	}

	.heading {
		font-family: $headings-font;
	}

	.heading, .accent-text {
		@include property-color-opacity(color, $primary-color, 1);
	}

	.header-container {
		width: 100%;
		display: flex;
		justify-content: center;
		border-bottom: 1px solid rgba(0, 0, 0, .2);

		header {
			width: 90%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			.header-logo-container {
				padding: 10px 0px;
			}

			.header-links {
				font-size: 24px;
				width: 40%;
				display: flex;
				justify-content: space-between;

				.header-link {
					text-decoration: none;
					@include property-color-opacity(color, $text-color, 1);
				}

				.header-link:hover {
					text-decoration: underline;
				}
			}
		}
	}

	.footer-container {
		width: 100%;
		@include property-color-opacity(background-color, $secondary-color, .2);
		display: flex;
		justify-content: center;

		footer {
			width: 80%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			ul {
				list-style-type: none;
			}

			.footer-logo {
				height: 200px;
			}

			.footer-logo-container {
				padding: 20px 0px;
			}

			.footer-links {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				font-size: 24px;
				height: 80%;
				
				.footer-link {
					text-decoration: none;
				}

				.footer-link:hover {
					text-decoration: underline;
				}
			}
		}
	}

</style>

