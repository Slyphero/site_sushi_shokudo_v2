<script setup lang="ts">
import logo from '../assets/img/logo_normal_transparent.webp'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="home-container">
  <div class="home-slide-container">
    <div class="home-logo-container">
      <img class="homepage-logo" :src="logo" alt="">
    </div>

    <div class="home-title-buttons-container">
      <div class="home-title-container">
        <h1>
          Restaurant familial de <span class="accent-text">Sushis</span>
        </h1>
      </div>

      <div class="home-buttons-container">
        <RouterLink class="primary-button home-link link" to="/menu">
          Menus
        </RouterLink>

        <RouterLink class="secondary-button home-link link" to="/commander">
          Commander
        </RouterLink>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.home-container {
  background-color: rgba(#B8F0F9, 0.3);
  display: flex;
  justify-content: center;
  min-height: 88vh;

  .home-slide-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    padding: 100px 0;

    .home-logo-container {
      .homepage-logo {
        height: 500px;
      }
    }

    .home-title-buttons-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      height: 50%;
      width: 50%;

      .home-title-container {
        h1 {
          font-size: 72px;
        }
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
</style>