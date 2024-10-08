import type { FoodEntry } from '../models/foodEntryInterface'
import { imageFolderPath } from "./imageFolderPathConstant"

export const gyozasEntries: FoodEntry[] = [
  {
    title: 'Gyoza végétarien',
    price: 5.2,
    piecesNumber: 5,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
  },
  {
    title: 'Gyoza poulet, légumes',
    price: 5.8,
    piecesNumber: 5,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
  },
  {
    title: 'Gyoza boeuf, légumes',
    price: 6.5,
    piecesNumber: 5,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
  },
]