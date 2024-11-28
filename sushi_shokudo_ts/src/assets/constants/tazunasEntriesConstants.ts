import type { FoodEntry } from "../models/foodEntryInterface";

export const tazunasEntries: FoodEntry[] = [
	{
		title: "Dragon Roll",
		price: 11.9,
		piecesNumber: 8,
		image: "/sushi_shokudo.webp",
		elements: [
			"Dessus : Avocat, mayonnaise",
			"Intérieur : Mayonnaise, crevette panée, avocat"
		]
	},
	{
		title: "Salmon Teriyaki",
		price: 11.5,
		image: "/sushi_shokudo.webp",
		piecesNumber: 8,
		elements: [
			"Dessus : saumon snacké, sauce teriyaki, chips, piment, ciboulette",
			"Intérieur : Thon, mayonnaise épicée, avocat, masago"
		]
	},
];