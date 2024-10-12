import type { MenuCategory } from "../models/menuCategoryInterface";
import { imageFolderPath } from "@/assets/constants/imageFolderPathConstant";

import { menusEntries } from "./menusEntriesConstants";
import { sushisEntries } from "./sushisEntriesConstants";
import { makisEntries } from "./makisEntriesConstants";
import { sashimisEntries } from "./sashimisEntriesConstants";
import { tazunasEntries } from "./tazunasEntriesConstants";
import { temakisEntries } from "./temakisEntriesConstants";
import { californiasEntries } from "./californiasEntriesConstants";
import { springsEntries } from "./springsEntriesConstants";
import { gyozasEntries } from "./gyozasEntriesConstants";
import { yakitorisEntries } from "./yakitorisEntriesConstants";
import { tartaresEntries } from "./tartaresEntriesConstants";
import { chirashisEntries } from "./chirashisEntriesConstants";
import { pokeBowlsEntries } from "./pokeBowlsEntriesConstants";

export const menuCategories: MenuCategory[] = [
	{
		menuTitleEntry: {
			title: "Menus",
			image: imageFolderPath.concat("sushi_shokudo.webp"),
			description: "Notre sélection de menus."
		},
		foodEntriesArray: menusEntries,
	},
	{
		menuTitleEntry: {
			title: "Sushis",
			image: imageFolderPath.concat("sushi_shokudo.webp"),
			description: "Un sushi est une quenelle de riz vinaigré sur laquelle nous déposons une tranche de poisson."
		},
		foodEntriesArray: sushisEntries,
	},
	{
		menuTitleEntry: {
			title: "Temakis",
			image: imageFolderPath.concat("sushi_shokudo.webp"),
			description: "Notre sélection de temakis."
		},
		foodEntriesArray: temakisEntries,
	},
	{
		menuTitleEntry: {
			title: "Makis",
			image: imageFolderPath.concat("sushi_shokudo.webp"),
			description: "Un maki est un cube de riz entouré d'une feuille de nori. Il est agrémenté de poisson cru et de crudités."
		},
		foodEntriesArray: makisEntries,
	},
	{
		menuTitleEntry: {
			title: "Californias",
			image: imageFolderPath.concat("sushi_shokudo.webp"),
			description: "Un california est un cube de riz agrémenté de sésame à l'extérieur ainsi que d'une feuille de nori et de poisson à l'intérieur."
		},
		foodEntriesArray: californiasEntries,
	},
	{
		menuTitleEntry: {
			title: "Springs",
			image: imageFolderPath.concat("sushi_shokudo.webp"),
			description: "Un spring est un cube de riz agrémenté de poisson et de crudités entouré d'une feuille de riz."
		},
		foodEntriesArray: springsEntries,
	},
	{
		menuTitleEntry: {
			title: "Tazunas",
			image: imageFolderPath.concat("sushi_shokudo.webp"),
			description: "Notre sélection de tazunas."
		},
		foodEntriesArray: tazunasEntries,
	},
	{
		menuTitleEntry: {
			title: "Sashimis",
			image: imageFolderPath.concat("sushi_shokudo.webp"),
			description: "Un sashimi est une tranche de poisson frais."
		},
		foodEntriesArray: sashimisEntries,
	},
	{
		menuTitleEntry: {
			title: "Tartares",
			image: imageFolderPath.concat("sushi_shokudo.webp"),
			description: "Notre sélection de tartares"
		},
		foodEntriesArray: tartaresEntries,
	},
	{
		menuTitleEntry: {
			title: "Chirashis",
			image: imageFolderPath.concat("sushi_shokudo.webp"),
			description: "Un chirashi est un plat à base de tranches de poissons sur un lit de riz vinaigré. Nous l'accompagnons d'une soupe miso."
		},
		foodEntriesArray: chirashisEntries,
	},
	{
		menuTitleEntry: {
			title: "Poke Bowls",
			image: imageFolderPath.concat("sushi_shokudo.webp"),
			description: "Un poke bowl est un plat composé d'une base de riz vinaigré. Tous nos poke bowls sont agrémentés d'avocat, d'edamame, de concombre, de radis, de tomates cerises, de carottes et de sésame."
		},
		foodEntriesArray: pokeBowlsEntries,
	},
	{
		menuTitleEntry: {
			title: "Yakitoris",
			image: imageFolderPath.concat("sushi_shokudo.webp"),
			description: "Notre sélection de yakitoris."
		},
		foodEntriesArray: yakitorisEntries,
	},
	{
		menuTitleEntry: {
			title: "Gyozas",
			image: imageFolderPath.concat("sushi_shokudo.webp"),
			description: "Un gyoza est un ravioli japonais, à la fois grillé à la poêle et cuit à la vapeur d'eau."
		},
		foodEntriesArray: gyozasEntries,
	}, 
];