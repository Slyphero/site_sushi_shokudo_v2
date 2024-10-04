import type { FoodEntry } from '../models/foodEntryInterface'

import { imageFolderPath } from './imageFolderPathConstant'

export const sashimisEntries: FoodEntry[] = [
  {
    title: 'Sashimi saumon',
    piecesNumber: 14,
    price: 14.9,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'Prix 6 pièces : 7,90 €'
    ]
  },
  {
    title: 'Sashimi thon',
    piecesNumber: 14,
    price: 16.9,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'Prix 6 pièces : 8,50 €',
    ]
  },
  {
    title: 'Mix sashimis thon saumon',
    piecesNumber: 14,
    price: 14.9,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'Prix 6 pièces : 7,90 €',
    ]
  },
  {
    title: 'Assortiment : thon, saumon, daurade, crevette',
    piecesNumber: 14,
    price: 16.9,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
  },
  {
    title: 'Tataki saumon snacké',
    piecesNumber: 14,
    price: 15.9,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
  },
  {
    title: 'Tataki thon snacké',
    piecesNumber: 14,
    price: 17.3,
    image: imageFolderPath.concat('sushi_shokudo.webp'),

  },  
]