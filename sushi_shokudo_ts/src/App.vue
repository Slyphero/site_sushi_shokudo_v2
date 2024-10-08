<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'
import logo from '@/assets/img/sushi_shokudo.webp'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faPhone, faLocationDot, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

interface NavEntry {
	name: string
	link: string
}

const navEntries: NavEntry[] = [
	{ name: 'Accueil', link: '/accueil' },
	{ name: 'Menu', link: '/menu' },
	{ name: 'Commander', link: '/commander' },
	{ name: 'A propos', link: '/a-propos' }
]

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'})
}

</script>

<template>

<button @click="scrollToTop" class="scroll-up-button">
  <FontAwesomeIcon :icon=faArrowUp />
</button>

<div class="header-container">
  <header>
    <div class="header-logo-container">
      <img class="header-logo" :src="logo" alt="">
    </div>
    
    <nav class="header-links">
      <RouterLink class="header-link link" v-for="navEntry in navEntries" :to=navEntry.link>
        {{ navEntry.name }}
      </RouterLink>
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
      <RouterLink class="footer-link link" v-for="navEntry in navEntries" :to=navEntry.link>
        {{ navEntry.name }}
      </RouterLink>
    </nav>

    <div class="infos-container">
      <ul>
        <li class="info-entry">
          <a href="https://maps.app.goo.gl/gUXJruNjZMACemWh9" class="link">
            <FontAwesomeIcon :icon="faLocationDot" /> 124 Cours Lafayette, 69003 Lyon 3
          </a>
        </li>

        <li class="info-entry">
          <a href="mailto:sushi.shokudo.lyon@gmail.com" class="link">
            <FontAwesomeIcon :icon="faEnvelope" /> sushi.shokudo.lyon@gmail.com
          </a>
        </li>

        <li class="info-entry">
          <a href="tel:0982781941" class="link">
            <FontAwesomeIcon :icon="faPhone" /> 09 82 78 19 41
          </a>
        </li>
      </ul>
    </div>

    <div class="socials-container">
      <ul>
        <li>
          <a href="#">
            <FontAwesomeIcon :icon="faInstagram" class="social-link link" />
          </a>
        </li>

        <li>
          <a href="#">
            <FontAwesomeIcon :icon="faFacebook" class="social-link link" />
          </a>
        </li>
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

  .scroll-up-button {
    position: fixed; 
    bottom: 30px;
    right: 30px;
    font-size: 36px; 
    width: 60px;
    height: 60px;
    @include property-color-opacity(background-color, $secondary-color, 1);
    border-radius: 100%;
    border: none;
  }

  .scroll-up-button:hover {
    cursor: pointer;
    @include property-color-opacity(background-color, $primary-color, 1);
    transition: 0.2s ease-in-out;
  }

  ul {
    list-style-type: none;
  }

  .link {
    @include property-color-opacity(color, $text-color, 1);
    text-decoration: none;
  }

  .link:hover {
    @include property-color-opacity(color, $primary-color, 1);
    transition: 0.2s ease-in-out;
  }

  .heading {
    font-family: $headings-font;
    border-bottom: 1px solid rgba($primary-color, .2);
    text-transform: uppercase;
    margin: 10px 0;
  }

  h2 {
    font-size: 36px;
  }

  .heading, .accent-text {
    @include property-color-opacity(color, $primary-color, 1);
  }
}

.header-container {
  @include property-color-opacity(background-color, $secondary-color, .2);
  width: 100%;
  display: flex;
  justify-content: center;

  header {
    width: 60%;
    min-height: 12vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .header-logo-container {
      padding: 10px 0px;
      .header-logo {
        height: 100px;
      }
    }

    .header-links {
      font-size: 24px;
      width: 50%;
      display: flex;
      justify-content: space-between;
    }
  }
}

.footer-container {
  width: 100%;
  @include property-color-opacity(background-color, $secondary-color, .2);
  display: flex;
  justify-content: center;

  footer {
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer-logo-container {
      padding: 20px 0px;
      .footer-logo {
        height: 200px;
      }
    }

    .footer-links {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 24px;
      height: 80%;
    }

    .infos-container {
      .info-entry {
        font-size: 24px;
      }
    }

    .socials-container {
      .social-link {
        font-size: 72px;
        padding: 10px 0;
      }
    }
  }
}
</style>

