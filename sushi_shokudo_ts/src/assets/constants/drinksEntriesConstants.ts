import type { DrinkEntry } from "../models/drinkEntryInterface";

export const drinksEntries: DrinkEntry[] = [
    {
        title: 'Coca-Cola',
        piecesNumber: 33,
        price: 2.3,
    },
    {
        title: 'Coca-Cola Zéro',
        piecesNumber: 33,
        price: 2.3,
    },
    {
        title: 'Fuze Tea',
        piecesNumber: 33,
        price: 2.3,
    },
    {
        title: 'Ice Tea Pêche',
        piecesNumber: 33,
        price: 2.3,
    },
    {
        title: 'Orangina',
        piecesNumber: 33,
        price: 2.3,
    },
    {
        title: 'Evian',
        piecesNumber: 50,
        price: 2.3,
    },
    {
        title: 'San Pellegrino',
        piecesNumber: 50,
        price: 2.3,
    },
    {
        title: 'Schweppes Agrumes',
        piecesNumber: 33,
        price: 2.3,
    },
    {
        title: 'Jus de fruits',
        piecesNumber: 25,
        price: 2.9,
        elements: [
            "Orange",
            "Pomme",
            "Ananas",
            "Fraise",
            "Multifruits",
            "Coco",
            "Litchi"
        ]
    },
    {
        title: 'Mangajo',
        piecesNumber: 25,
        price: 3.8,
        elements: [
            "Grenade-Thé Vert",
            "Citron-Thé Vert",
            "Baie de Goji-Thé Vert"
        ]
    },
    {
        title: 'Ramune',
        piecesNumber: 20,
        price: 3.5,
        elements: [
            "Nature",
            "Litchi",
            "Matcha",
            "Cola"
        ]
    },
]