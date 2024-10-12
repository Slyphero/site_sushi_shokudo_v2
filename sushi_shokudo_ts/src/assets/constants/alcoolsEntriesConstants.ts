import type { DrinkEntry } from "../models/drinkEntryInterface";

export const alcoolsEntries: DrinkEntry[] = [
    {
        title: "Bière Asahi",
        price: 3.9,
        piecesNumber: 33,
        alcoolVolume: 5.2,
    },
    {
        title: "Bière Kirin",
        price: 3.9,
        piecesNumber: 33,
        alcoolVolume: 5,
    },
    {
        title: "Bière Tsingtao",
        price: 3.9,
        piecesNumber: 33,
        alcoolVolume: 4.7,
    },
    {
        title: "Bière Coedo Shiro",
        price: 5,
        piecesNumber: 33,
        alcoolVolume: 4.7,
    },
    {
        title: "Bière Coedo Marihana",
        price: 5,
        piecesNumber: 33,
        alcoolVolume: 4.5,
    },
    {
        title: "Saké Kaori",
        price: 6.8,
        piecesNumber: 18,
        alcoolVolume: 14.5,
    },
    {
        title: "Saké Classic Junmai",
        price: 5.5,
        piecesNumber: 18,
        alcoolVolume: 15,
    },
    {
        title: "Verre de vin",
        price: 4,
        elements: [
            "Blanc (Chardonnay 14 %)",
            "Rosé (La Gayolle 13.5%)",
            "Rouge (Fond Croze Confidence 14.5 %)"
        ]
    }
]