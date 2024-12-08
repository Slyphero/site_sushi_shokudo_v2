<script setup lang="ts">

import { RouterLink, RouterView } from "vue-router";
import logo from "/sushi_shokudo.webp";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope, faPhone, faLocationDot, faArrowUp, faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { navEntries } from "./assets/constants/navEntriesConstants";

import { uberLink, instagramLink, mapsLink, address, email, phone, weekSchedules, sundaySchedules, mailto } from "./assets/constants/constants";

import { ref, computed, onMounted } from 'vue';
import Popup  from '@/components/Popup.vue';

const showPopup = ref(false);

const startHour = 5;
const endHour = 22;

const shouldShowPopup = computed(() => {
	const currentHour = new Date().getHours();
	return currentHour >= startHour && currentHour < endHour;
});

const scrollToTop = (): void => {
	window.scrollTo({top: 0, behavior: "smooth"});
}

const showNavMenu = (): void => {
	let nav: HTMLElement | null = document.getElementById("nav-menu");

	if (nav !== null) {
		nav.classList.toggle("show");
	}
}

onMounted(() => {
	if (shouldShowPopup.value) {
		showPopup.value = true;
	}
});

</script>

<template>

<div>
	<Popup v-if="showPopup" @close="showPopup = false" />
</div>

<button @click="scrollToTop" class="scroll-up-button" id="scroll-up-button">
  	<FontAwesomeIcon :icon=faArrowUp />
</button>

<div class="header-container">
	<header>
		<div class="logo-nav-menu-button-container">
			<div class="header-logo-container">
				<img class="header-logo" :src="logo" alt="">
			</div>

			<FontAwesomeIcon @click="showNavMenu()" :icon="faBars" class="nav-menu-icon" />
		</div>

		<nav id="nav-menu" class="header-links">
			<RouterLink class="header-link link" v-for="navEntry in navEntries" :to=navEntry.link>
				{{ navEntry.name }}
			</RouterLink>
			<a :href=uberLink target="_blank"><button class="order-button">Commander</button></a>
		</nav>
	</header>
</div>

<RouterView />

<div class="footer-container">
	<footer>
		<div class="footer-logo-container">
			<img class="footer-logo" :src="logo" alt="">
		</div>
		
		<div class="footer-links-container">
			<nav class="footer-links">
				<RouterLink class="footer-link link" v-for="navEntry in navEntries" :to=navEntry.link>
					{{ navEntry.name }}
				</RouterLink>
				<a :href=uberLink target="_blank" class="link">Commander</a>
			</nav>

			<div class="infos-socials-container">
				<div class="infos-container">
					<ul>
						<li class="info-entry">
							<a :href=mapsLink class="link" target="_blank">
								<FontAwesomeIcon :icon="faLocationDot" /> {{ address }} 
							</a>
						</li>

						<li class="info-entry">
							<a :href=mailto class="link">
								<FontAwesomeIcon :icon="faEnvelope" /> {{ email }}
							</a>
						</li>

						<li class="info-entry">
							<FontAwesomeIcon :icon="faPhone" /> {{ phone }}
						</li>
						<li class="info-entry">
							{{ weekSchedules }}
						</li>
						<li class="info-entry">
							{{ sundaySchedules }}
						</li>
					</ul>
				</div>

				<div class="socials-container">
					<ul>
						<li>
							<a :href=instagramLink target="_blank">
								<FontAwesomeIcon :icon="faInstagram" class="social-link link" />
							</a>
						</li>

						<!-- <li>
							<a href="#">
								<FontAwesomeIcon :icon="faFacebook" class="social-link link" />
							</a>
						</li> -->
					</ul>
				</div>
			</div>
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
		bottom: 5%;
		right: 2%;
		font-size: 2em; 
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
	@include flex-direction-alignment(row, center, center);

	header {
		width: 60%;
		min-height: 12vh;
		@include flex-direction-alignment(row, space-between, center);

		.header-logo-container {
			padding: 10px 0px;

			.header-logo {
				height: 10vh;
			}
		}

		.header-links {
			font-size: 1.5em;
			width: 50%;
			@include flex-direction-alignment(row, space-between, center);

			.order-button {
				padding: 10px;
				@include property-color-opacity(color, $background-color, 1);
				@include property-color-opacity(background-color, $primary-color, 1);
				border: 0px;
				border-radius: 5px;
				font-size: 0.8em;
			}
			
			.order-button:hover {
				@include property-color-opacity(background-color, $background-color, 1);
				@include property-color-opacity(color, $text-color, 1);
				transition: 0.2s ease-in-out;
			}
		}

		.nav-menu-icon {
			display: none;
			font-size: 2em;
		}
	}
}

.footer-container {
	width: 100%;
	@include property-color-opacity(background-color, $secondary-color, .2);
	@include flex-direction-alignment(row, center, center);

	footer {
		width: 70%;
		@include flex-direction-alignment(row, space-between, center);

		.footer-logo-container {
			padding: 20px 0px;

			.footer-logo {
				height: 20vh;
			}
		}

		.footer-links-container {
			width: 70%;
			@include flex-direction-alignment(row, space-between, center);

			.footer-links {
				font-size: 2em;
				height: 80%;
				@include flex-direction-alignment(column, space-between, start);
			}

			.infos-socials-container {
				width: 65%;
				@include flex-direction-alignment(row, space-between, center);

				.infos-container {
					.info-entry {
						font-size: 1.5em;
					}
				}

				.socials-container {
					.social-link {
						font-size: 4em;
						padding: 10px 0;
					}
				}
			}
		}
	}
}

@media only screen and (max-width: 1500px) {
	.header-container {
		header {
			width: 80%;
		}
	}

	.footer-container {
		footer {
			.footer-links-container {
				width: 80%;

				.infos-socials-container {
					width: 70%;
				}
			}
		}
	}
}

@media only screen and (max-width: 1200px) {
	.header-container {
		header {
			.header-links {
				width: 70%;
			}
		}
	}

	.footer-container {
		footer {
			width: 90%;
			flex-direction: column;
			.footer-links-container {
				width: 90%;
				justify-content: space-between;

				.infos-socials-container {
					width: 65%;
				}
			}
		}
	}
}

@media only screen and (max-width: 900px) {
	.header-container {
		header {
			.header-links {
				width: 80%;
			}
		}
	}

	.footer-container {
		footer {
			width: 98%;
			.footer-links-container {
				.infos-socials-container {
					width: 70%;
				}
			}
		}
	}
}

@media only screen and (max-width: 768px) {
	.scroll-up-button {
		bottom: 10%;
		right: 18%;
	}
	.header-container {
		header {
			flex-direction: column;

			.logo-nav-menu-button-container {
				@include flex-direction-alignment(row, space-between, center);
				width: 100%;
			}

			.header-links {
				@include flex-direction-alignment(column, center, center);
				display: none;
				top: -100%;

				.header-link {
					padding: 10px 0;
				}
			}

			.nav-menu-icon {
				display: block;
			}

			.show {
				display: flex;
			}
		}
	}

	.footer-container {
		footer {
			.footer-links-container {
				align-items: baseline;

				.footer-links {
					font-size: 1.1em;
				}

				.infos-socials-container {
					flex-direction: column;
					align-items: center;
					justify-content: center;

					.infos-container {
						.info-entry {
							font-size: 0.7em;
						}
					}

					.socials-container {
						width: 50%;

						ul {
							display: flex;
							flex-direction: row;
							justify-content: space-between;
						}
					}
				}
			}
		}
	}
}
</style>

