import type { FoodEntry } from "../models/foodEntryInterface";
import { imageFolderPath } from "./imageFolderPathConstant";

export const chirashisEntries: FoodEntry[] = [
    {
        title: 'Chirashi saumon sésame',
        price: 14.5,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
    {
        title: 'Chirashi saumon avocat sésame',
        price: 15.5,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
    {
        title: 'Chirashi thon sésame',
        price: 15.5,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
    {
        title: 'Chirashi thon avocat sésame',
        price: 16.5,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
    {
        title: 'Chirashi tartare saumon avocat',
        price: 14.8, 
        image: imageFolderPath.concat("sushi_shokudo.webp"),
        elements: [
            "Saumon",
            "Persil",
            "Parmesan",
            "Huile d'olive"
        ]
    },
    {
        title: 'Chirashi tartare thon avocat',
        price: 14.8, 
        image: imageFolderPath.concat("sushi_shokudo.webp"),
        elements: [
            "Thon",
            "Persil",
            "Parmesan",
            "Huile d'olive"
        ]
    },
    {
        title: 'Chirashi assortiment thon, saumon, daurade, crevette, oeufs de saumon',
        price: 18,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
    {
        title: 'Chirashi mix thon, saumon mariné',
        price: 17.5,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
        elements: [
            "Saumon",
            "Thon",
            "Concombre",
            "Menthe",
            "Coriandre",
            "Poireau",
            "Marinade maison",
        ]
    },
    {
        title: 'Chirashi mix thon, saumon',
        price: 16.5,
        image: imageFolderPath.concat("sushi_shokudo.webp"),
    },
]