<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

const navEntries = [
	{ name: 'Accueil', link: '/accueil' },
	{ name: 'Menu', link: '/menu' },
	{ name: 'Commander', link: '/commander' },
	{ name: 'A propos', link: '/a-propos' }
]
</script>

<template>
  <header>
    <h1 class="heading">Sushi Shokudo</h1>
		<RouterLink v-for="navEntry in navEntries" :to=navEntry.link>{{ navEntry.name }}</RouterLink>
  </header>
  <RouterView />
  <footer>
  </footer>
</template>

<style lang="scss">
	* {
		font-family: $body-font;
	}

	.heading {
		font-family: $headings-font;
	}

	.heading, .accent-text {
		@include color-variation-opacity(color, $primary-color, 1);
	}
</style>

