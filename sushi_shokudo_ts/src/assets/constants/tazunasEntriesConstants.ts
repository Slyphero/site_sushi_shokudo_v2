import type { FoodEntry } from "../models/foodEntryInterface";
import { imageFolderPath } from "./imageFolderPathConstant";

export const tazunasEntries: FoodEntry[] = [
	{
		title: "Dragon Roll",
		price: 11.9,
		piecesNumber: 8,
		image: imageFolderPath.concat("sushi_shokudo.webp"),
		elements: [
			"Dessus : Avocat, mayonnaise",
			"Intérieur : Mayonnaise, crevette panée, avocat"
		]
	},
	{
		title: "Salmon Teriyaki",
		price: 11.5,
		image: imageFolderPath.concat("sushi_shokudo.webp"),
		piecesNumber: 8,
		elements: [
			"Dessus : saumon snacké, sauce teriyaki, chips, piment, ciboulette",
			"Intérieur : Thon, mayonnaise épicée, avocat, masago"
		]
	},
	{
		title: "Tuna Spicy",
		price: 11,
		image: imageFolderPath.concat("sushi_shokudo.webp"),
		piecesNumber: 8,
		elements: [
			"Dessus : Tartare de thon épicée, sauce épicée, ciboulette",
			"Intérieur : Mayonnaise, crevette panée, avocat"
		]
	},
	{
		title: "Wakame",
		price: 11.5,
		image: imageFolderPath.concat("sushi_shokudo.webp"),
		piecesNumber: 8,
		elements: [
			"Dessus : Wakame, 7 épices",
			"Intérieur : Thon, avocat"
		]
	},
];