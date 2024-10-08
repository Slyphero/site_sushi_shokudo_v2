import type { FoodEntry } from '../models/foodEntryInterface'
import { imageFolderPath } from "./imageFolderPathConstant"

export const makisEntries: FoodEntry[] = [
  {
    title: 'Maki concombre cheese',
    piecesNumber: 6,
    price: 4.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    elements: [
      'concombre',
      'cream cheese'
    ],
    isDrink: false,
    isCountable: true,
  },
  {
    title: 'Maki avocat cheese',
    piecesNumber: 6,
    price: 4.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    elements: [
      'avocat',
      'cream cheese'
    ],
    isDrink: false,
    isCountable: true,
  },
  {
    title: 'Maki saumon',
    piecesNumber: 6,
    price: 4.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    isDrink: false,
    isCountable: true,
  },
  {
    title: 'Maki saumon spicy',
    piecesNumber: 6,
    price: 4.8,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    elements: [
      'saumon',
      'mayonnaise épicée',
      'ciboulette'
    ],
    isDrink: false,
    isCountable: true,
  },
  {
    title: 'Maki thon',
    piecesNumber: 6,
    price: 4.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    isDrink: false,
    isCountable: true,
  },
  {
    title: 'Maki thon spicy',
    piecesNumber: 6,
    price: 4.9,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    elements: [
      'thon',
      'mayonnaise épicée',
      'ciboulette'
    ],
    isDrink: false,
    isCountable: true,
  },
  {
    title: 'Maki daurade yuzu',
    piecesNumber: 6,
    price: 6.2,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    elements: [
      'daurade',
      'coriandre',
      'mayonnaise mis yuzu'
    ],
    isDrink: false,
    isCountable: true,
  },
  {
    title: 'Maki salmon roll',
    piecesNumber: 6,
    price: 7.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    elements: [
      'Riz et cream cheese enroulés de saumon'
    ],
    isDrink: false,
    isCountable: true,
  },
  {
    title: 'Maki thon cuit',
    piecesNumber: 6,
    price: 4.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    isDrink: false,
    isCountable: true,
  },   
  {
    title: 'Maki crevette',
    piecesNumber: 6,
    price: 5.9,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'crevette',
      'coriandre',
      '7 épices',
      'mangue'
    ],
    isDrink: false,
    isCountable: true,
  },
  {
    title: 'Maki crabe',
    piecesNumber: 6,
    price: 6.2,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'crabe',
      'mayonnaise'
    ],
    isDrink: false,
    isCountable: true,
  },
  {
    title: 'Maki végétarien',
    piecesNumber: 6,
    price: 4.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'mayonnaise',
      'wasabi',
      'avocat',
      'concombre',
      'roquette'
    ],
    isDrink: false,
    isCountable: true,
  },
]
