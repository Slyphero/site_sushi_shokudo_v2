import type { FoodEntry } from '../models/foodEntryInterface'

import { imageFolderPath } from './imageFolderPathConstant'

export const temakisEntries: FoodEntry[] = [
  {
    title: 'Temaki saumon avocat',
    piecesNumber: 1,
    price: 5,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'saumon',
      'avocat',
      'sésame'
    ]
  },
  {
    title: 'Temaki thon avocat',
    piecesNumber: 1,
    price: 5.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'thon',
      'avocat',
      'sésame'
    ]
  },
  {
    title: 'Temaki crevette avocat',
    piecesNumber: 1,
    price: 5.9,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'crevette',
      'avocat',
      'sésame'
    ]
  },
  {
    title: 'Temaki oeufs de saumon, avocat',
    piecesNumber: 1,
    price: 6,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'oeufs de saumon',
      'avocat'
    ]
  },
]