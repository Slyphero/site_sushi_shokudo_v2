import type { FoodEntry } from "../models/foodEntryInterface";
import { imageFolderPath } from "./imageFolderPathConstant";

export const friedEntries: FoodEntry[] = [
    {
        title: "Ebi fry : Crevette panée",
        piecesNumber: 4,
        price: 7,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
    {
        title: "Poulet pané",
        piecesNumber: 6,
        price: 7.3,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
]