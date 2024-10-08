import type { FoodEntry } from '../models/foodEntryInterface'
import { imageFolderPath } from "./imageFolderPathConstant"

export const sushisEntries: FoodEntry[] = [
  {
    title: 'Sushi avocat',
    piecesNumber: 2,
    price: 3,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    elements: [
      'avocat', 
      'feuille de nori'
    ]
  },
  {
    title: 'Sushi saumon',
    piecesNumber: 2,
    price: 3.9,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
  },
  {
    title: 'Sushi saumon snacké',
    piecesNumber: 2,
    price: 3.9,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    elements: [
      'saumon snacké', 
      'teriyaki', 
      'sésame'
    ]
  },
  {
    title: 'Sushi saumon cheese',
    piecesNumber: 2,
    price: 4.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    elements: [
      'Cream cheese', 
      '7 épices'
    ]
  },
  {
    title: 'Sushi thon',
    piecesNumber: 2,
    price: 4.3,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
  },
  {
    title: 'Sushi thon spicy',
    piecesNumber: 2,
    price: 4.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    elements: [
      'mayonnaise épicée', 
      'piment en topping'
    ]
  },
  {
    title: 'Sushi thon snacké',
    piecesNumber: 2,
    price: 4.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    elements: ['Thon snacké', 'teriyaki', 'sésame']
  },
  {
    title: 'Sushi daurade',
    piecesNumber: 2,
    price: 4.3,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
  },
  {
    title: 'Sushi crevette Ebi',
    piecesNumber: 2,
    price: 4.6,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    elements: ['Crevette', 'feuille de nori']
  },
  {
    title: 'Sushi oeufs de saumon',
    piecesNumber: 2,
    price: 6,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
  },
  {
    title: 'Sushi crabe',
    piecesNumber: 2,
    price: 6,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
  },
  {
    title: 'Sushi tulip ikura saumon',
    piecesNumber: 3,
    price: 10.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'), 
    elements: ['avocat', 'oeufs de saumon']
  },
]