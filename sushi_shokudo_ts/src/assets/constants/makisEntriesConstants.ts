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
  },
  {
    title: 'Maki saumon',
    piecesNumber: 6,
    price: 4.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
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
  },
  {
    title: 'Maki thon',
    piecesNumber: 6,
    price: 4.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
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
  },
  {
    title: 'Maki salmon roll',
    piecesNumber: 6,
    price: 7.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    elements: [
      'Riz et cream cheese enroulés de saumon'
    ],
  },
  {
    title: 'Maki thon cuit',
    piecesNumber: 6,
    price: 4.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
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
  },
]
