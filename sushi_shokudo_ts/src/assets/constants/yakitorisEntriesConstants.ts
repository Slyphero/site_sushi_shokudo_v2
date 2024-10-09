import type { FoodEntry } from "../models/foodEntryInterface";
import { imageFolderPath } from "./imageFolderPathConstant";

export const yakitorisEntries: FoodEntry[] = [
	{
		title: "Yakitori poulet, sauce teriyaki, ciboulette",
		price: 3.99,
		piecesNumber: 2,
		image: imageFolderPath.concat("sushi_shokudo.webp"),
	},
	{
		title: "Yakitori boeuf-fromage, sauce teriyaki, ciboulette",
		price: 5.5,
		piecesNumber: 2,
		image: imageFolderPath.concat("sushi_shokudo.webp"),
	},
	{
		title: "Yakitori boulettes de poulet, sauce teriyaki, ciboulette",
		price: 3.99,
		piecesNumber: 2,
		image: imageFolderPath.concat("sushi_shokudo.webp"),
	},
];