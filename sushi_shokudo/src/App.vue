<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Sushi Shokudo</h1>
		<p>Restaurant familial de <span class="accent-text">Sushis</span></p>
  </header>
  <RouterView />
  <footer>

  </footer>
</template>

<style lang="scss">
	* {
		font-family: 'Gabarito';
	}

	p {
		font-size: 1.3em;
	}

	h1, .accent-text {
		@include color-variation-opacity(color, $primary-color, 1);
	}
</style>
