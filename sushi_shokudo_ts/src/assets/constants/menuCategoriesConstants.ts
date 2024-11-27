import type { MenuCategory } from "../models/menuCategoryInterface";

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
			image: "/plateau_gourmand.png",
			description: "Notre sélection de menus."
		},
		foodEntriesArray: menusEntries,
	},
	{
		menuTitleEntry: {
			title: "Sushis",
			image: "/_NIC1708.png",
			description: "Un sushi est une quenelle de riz vinaigré sur laquelle nous déposons une tranche de poisson."
		},
		foodEntriesArray: sushisEntries,
	},
	{
		menuTitleEntry: {
			title: "Temakis",
			image: "/_NIC1756.png",
			description: "Notre sélection de temakis."
		},
		foodEntriesArray: temakisEntries,
	},
	{
		menuTitleEntry: {
			title: "Makis",
			image: "/_NIC1721.png",
			description: "Un maki est un cube de riz entouré d'une feuille de nori. Il est agrémenté de poisson cru et de crudités."
		},
		foodEntriesArray: makisEntries,
	},
	{
		menuTitleEntry: {
			title: "Californias",
			image: "/_NIC1732.png",
			description: "Un california est un cube de riz agrémenté de sésame à l'extérieur ainsi que d'une feuille de nori et de poisson à l'intérieur."
		},
		foodEntriesArray: californiasEntries,
	},
	{
		menuTitleEntry: {
			title: "Springs",
			image: "/_NIC1735.png",
			description: "Un spring est un cube de riz agrémenté de poisson et de crudités entouré d'une feuille de riz."
		},
		foodEntriesArray: springsEntries,
	},
	{
		menuTitleEntry: {
			title: "Tazunas",
			image: "/_NIC1742.png",
			description: "Notre sélection de tazunas."
		},
		foodEntriesArray: tazunasEntries,
	},
	{
		menuTitleEntry: {
			title: "Sashimis",
			image: "/_NIC1751.png",
			description: "Un sashimi est une tranche de poisson frais."
		},
		foodEntriesArray: sashimisEntries,
	},
	{
		menuTitleEntry: {
			title: "Tartares",
			image: "/tartare_saumon_avocat.png",
			description: "Notre sélection de tartares"
		},
		foodEntriesArray: tartaresEntries,
	},
	{
		menuTitleEntry: {
			title: "Chirashis",
			image: "/chirashi_saumon_avocat.png",
			description: "Un chirashi est un plat à base de tranches de poissons sur un lit de riz vinaigré. Nous l'accompagnons d'une soupe miso."
		},
		foodEntriesArray: chirashisEntries,
	},
	{
		menuTitleEntry: {
			title: "Poke Bowls",
			image: "/Poke_bowl_saumon.png",
			description: "Un poke bowl est un plat composé d'une base de riz vinaigré. Tous nos poke bowls sont agrémentés d'avocat, d'edamame, de concombre, de radis, de tomates cerises, de carottes et de sésame."
		},
		foodEntriesArray: pokeBowlsEntries,
	},
	{
		menuTitleEntry: {
			title: "Yakitoris",
			image: "/_NIC1790.png",
			description: "Notre sélection de yakitoris."
		},
		foodEntriesArray: yakitorisEntries,
	},
	{
		menuTitleEntry: {
			title: "Gyozas",
			image: "/_NIC1754.png",
			description: "Un gyoza est un ravioli japonais, à la fois grillé à la poêle et cuit à la vapeur d'eau."
		},
		foodEntriesArray: gyozasEntries,
	}, 
	{
		menuTitleEntry: {
			title: "Fritures",
			image: "/_NIC1791.png",
			description: "Notre sélection de fritures."
		},
		foodEntriesArray: friedEntries,
	}, 
	{
		menuTitleEntry: {
			title: "Accompagnements",
			image: "/sushi_shokudo.webp",
			description: "Notre sélection d'accompagnements."
		},
		foodEntriesArray: sidesEntries,
	}, 
	{
		menuTitleEntry: {
			title: "Desserts",
			image: "/_NIC1800.png",
			description: "Notre sélection de desserts."
		},
		foodEntriesArray: dessertsEntries,
	}
];