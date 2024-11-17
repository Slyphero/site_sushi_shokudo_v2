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
import { friedEntries } from "./friedEntriesConstants";
import { sidesEntries } from "./sidesEntriesConstants";
import { dessertsEntries } from "./dessertsEntriesConstants";

export const menuCategories: MenuCategory[] = [
	{
		menuTitleEntry: {
			title: "Menus",
			image: imageFolderPath.concat("_NIC1692.png"),
			description: "Notre sélection de menus."
		},
		foodEntriesArray: menusEntries,
	},
	{
		menuTitleEntry: {
			title: "Sushis",
			image: imageFolderPath.concat("_NIC1708.png"),
			description: "Un sushi est une quenelle de riz vinaigré sur laquelle nous déposons une tranche de poisson."
		},
		foodEntriesArray: sushisEntries,
	},
	{
		menuTitleEntry: {
			title: "Temakis",
			image: imageFolderPath.concat("_NIC1756.png"),
			description: "Notre sélection de temakis."
		},
		foodEntriesArray: temakisEntries,
	},
	{
		menuTitleEntry: {
			title: "Makis",
			image: imageFolderPath.concat("_NIC1721.png"),
			description: "Un maki est un cube de riz entouré d'une feuille de nori. Il est agrémenté de poisson cru et de crudités."
		},
		foodEntriesArray: makisEntries,
	},
	{
		menuTitleEntry: {
			title: "Californias",
			image: imageFolderPath.concat("_NIC1732.png"),
			description: "Un california est un cube de riz agrémenté de sésame à l'extérieur ainsi que d'une feuille de nori et de poisson à l'intérieur."
		},
		foodEntriesArray: californiasEntries,
	},
	{
		menuTitleEntry: {
			title: "Springs",
			image: imageFolderPath.concat("_NIC1735.png"),
			description: "Un spring est un cube de riz agrémenté de poisson et de crudités entouré d'une feuille de riz."
		},
		foodEntriesArray: springsEntries,
	},
	{
		menuTitleEntry: {
			title: "Tazunas",
			image: imageFolderPath.concat("_NIC1742.png"),
			description: "Notre sélection de tazunas."
		},
		foodEntriesArray: tazunasEntries,
	},
	{
		menuTitleEntry: {
			title: "Sashimis",
			image: imageFolderPath.concat("_NIC1751.png"),
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
			image: imageFolderPath.concat("_NIC1790.png"),
			description: "Notre sélection de yakitoris."
		},
		foodEntriesArray: yakitorisEntries,
	},
	{
		menuTitleEntry: {
			title: "Gyozas",
			image: imageFolderPath.concat("_NIC1754.png"),
			description: "Un gyoza est un ravioli japonais, à la fois grillé à la poêle et cuit à la vapeur d'eau."
		},
		foodEntriesArray: gyozasEntries,
	}, 
	{
		menuTitleEntry: {
			title: "Fritures",
			image: imageFolderPath.concat("_NIC1791.png"),
			description: "Notre sélection de fritures."
		},
		foodEntriesArray: friedEntries,
	}, 
	{
		menuTitleEntry: {
			title: "Accompagnements",
			image: imageFolderPath.concat("sushi_shokudo.webp"),
			description: "Notre sélection d'accompagnements."
		},
		foodEntriesArray: sidesEntries,
	}, 
	{
		menuTitleEntry: {
			title: "Desserts",
			image: imageFolderPath.concat("_NIC1800.png"),
			description: "Notre sélection de desserts."
		},
		foodEntriesArray: dessertsEntries,
	}
];