import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
	],

	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url))
		}
	},
	
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
				@import "src/assets/scss/_variables.scss";
				@import "src/assets/scss/_mixins.scss";
				@import url("https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&display=swap");
				@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
				`
			}
		}
	}
})
