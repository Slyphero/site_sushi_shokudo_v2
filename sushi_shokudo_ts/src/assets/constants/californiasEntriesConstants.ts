import type { FoodEntry } from '../models/foodEntryInterface'
import { imageFolderPath } from "./imageFolderPathConstant";

export const californiasEntries: FoodEntry[] = [
  {
    title: 'California saumon avocat',
    piecesNumber: 6,
    price: 5.5,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'saumon',
      'avocat',
      'sésame',
    ]
  },
  {
    title: 'California saumon avocat cheese',
    piecesNumber: 6,
    price: 6.8,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'Tartare de saumon',
      'cream cheese',
      'mayonnaise épicée',
      'ciboulette',
      'avocat',
      'sésame',
    ]
  },
  {
    title: 'California saumon wasabi',
    piecesNumber: 6,
    price: 6.9,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'Sésame wasabi',
      'mayonnaise wasabi',
      'avocat',
      'ciboulette',
      'roquette'
    ]
  },
  {
    title: 'California thon avocat',
    piecesNumber: 6,
    price: 5.8,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'Thon',
      'avocat',
      'sésame'
    ]
  },
  {
    title: 'California thon cuit avocat',
    piecesNumber: 6,
    price: 5.8,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'Thon cuit',
      'avocat',
      'sésame'
    ]
  },
  {
    title: 'California Ebi fry',
    piecesNumber: 6,
    price: 7,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'Sésame',
      'mayonnaise épicée',
      'crevette tempura',
      'avocat'
    ]
  },
  {
    title: 'California Salmon Burrito',
    piecesNumber: 6,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 7.5,
    elements: [
      'Saumon snacké aux 7 épices',
      'saumon',
      'cream cheese',
      'ciboulette'
    ]
  },
  {
    title: 'California végétarien',
    piecesNumber: 6,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 5.5,
    elements: [
      'Sésame',
      'roquette',
      'carotte',
      'mangue',
      'avocat',
      'concombre'
    ]
  },
  {
    title: 'California daurade wasabi',
    piecesNumber: 6,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 6.9,
    elements: [
      'Sésame wasabi',
      'mayonnaise wasabi',
      'daurade',
      'roquette',
      'avocat',
      'ciboulette'
    ]
  },
  {
    title: 'California foie gras',
    piecesNumber: 6,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 7.9,
    elements: [
      'Foie gras',
      'Praline',
      'Confiture de figues',
      'Avocat'
    ]
  },
  {
    title: 'California poulet pané',
    piecesNumber: 6,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 5.9,
    elements: [
      'Poulet pané',
      'Sésame',
      'Mayonnaise',
      'Roquette',
      'Avocat'
    ]
  },
  {
    title: 'California crabe avocat',
    piecesNumber: 6,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 7.5,
    elements: [
      'Masago',
      'Crabe',
      'Mayonnaise japonaise',
      'Avocat'
    ]
  },
  {
    title: 'California crevette avocat sésame',
    piecesNumber: 6,
    price: 7,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    elements: [
      'Crevette',
      'Avocat',
      'Sésame'
    ]
  },
]