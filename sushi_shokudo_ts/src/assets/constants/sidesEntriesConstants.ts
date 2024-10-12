import type { FoodEntry } from "../models/foodEntryInterface";
import { imageFolderPath } from "./imageFolderPathConstant";

export const sidesEntries: FoodEntry[] = [
    {
        title: 'Riz nature',
        price: 2,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
    {
        title: 'Riz vinaigré',
        price: 2.5,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
    {
        title: 'Soupe miso', 
        price: 3,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
    {
        title: 'Salade edamame',
        price: 4.5,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
    {
        title: 'Salade wakame',
        price: 4.5,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
    {
        title: 'Salade calamar',
        price: 5.5,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
    {
        title: 'Salade de choux saumon',
        price: 6.49,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
    {
        title: 'Salade de choux thon',
        price: 6.49,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
    {
        title: 'Salade de chou',
        price: 3,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
]