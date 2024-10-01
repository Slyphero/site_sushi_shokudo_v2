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
			<div class="logo-container">
				<img :src="logo" alt="">
			</div>
			
			<nav>
				<RouterLink v-for="navEntry in navEntries" :to=navEntry.link>{{ navEntry.name }}</RouterLink>
			</nav>
		</header>
	</div>
  <RouterView />
  <footer>
  </footer>
</template>

<style lang="scss">
	* {
		margin: 0;
		padding: 0;
		font-family: $body-font;
	}

	img {
		height: 100px;
	}

	.heading {
		font-family: $headings-font;
	}

	.heading, .accent-text {
		@include color-variation-opacity(color, $primary-color, 1);
	}

	.header-container {
		display: flex;
		justify-content: center;
		border-bottom: 1px solid rgba(0, 0, 0, .2);

		header {
			width: 50%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;

			nav {
				width: 50%;
				display: flex;
				justify-content: space-between;
			}
		}
	}

	
</style>

