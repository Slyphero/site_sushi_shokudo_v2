import type { FoodEntry } from "../models/foodEntryInterface"
import { imageFolderPath } from "./imageFolderPathConstant"

export const menusEntries: FoodEntry[] = [
  {
    title: 'Plateau Original',
    piecesNumber: 12,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 13.90,
    elements: [
      '6 californias saumon avocat',
      '3 sushis saumon',
      '3 sashimis saumon',
      'Edamame',
      'Salade de chou'      
    ],
  },
  {
    title: 'Plateau Maki',
    piecesNumber: 18,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 14.95,
    elements: [
      '6 makis saumon',
      '6 makis thon',
      '6 makis avocat cheese',
      'Edamame',
      'Salade de chou',
    ],
  },
  {
    title: 'Plateau Végétarien',
    piecesNumber: 15,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 13.50,
    elements: [
      '6 californias végétariens',
      '3 springs avocat cheese',
      '6 springs concombre cheese',
      'Edamame',
      'Salade de chou',
    ],
  },
  {
    title: 'Plateau Sushi Saumon',
    piecesNumber: 10,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 15.95,
    elements: [
      '10 sushis saumon',
      'Edamame',
      'Salade de chou',
    ]
  },
  {
    title: 'Plateau Sushi Mix',
    piecesNumber: 10,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 17.5,
    elements: [
      '5 sushis saumon',
      '5 sushis thon',
      'Edamame', 
      'Salade de chou',
    ]
  },
  {
    title: 'Sushi Lovers',
    piecesNumber: 18,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 17.9,
    elements: [
      '6 californias saumon avocat',
      '6 springs saumon avocat',
      '6 sushis saumon',
      'Edamame',
      'Salade de chou',
    ],
  },
  {
    title: 'Sushi Assortiment',
    piecesNumber: 10,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 19.5,
    elements: [
      '2 sushis saumon',
      '2 sushis thon',
      '2 sushis crevette',
      '2 sushis daurade',
      '2 sushis ikura',
      'Edamame',
      'Salade de chou',
    ]
  },
  {
    title: 'Plateau California',
    piecesNumber: 18,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 16.95,
    elements: [
      '3 californias saumon avocat',
      '6 californias thon avocat',
      '3 californias thon cuit avocat',
      '3 californias végétariens',
      '3 californias saumon cheese avocat',
      'Edamame',
      'Salade de chou',
    ]
  },
  {
    title: 'Plateau Spring',
    piecesNumber: 18,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 17.5,
    elements: [
      '3 springs saumon avocat',
      '3 springs thon avocat',
      '6 springs thon cuit avocat',
      '3 springs avocat cheese',
      '3 springs concombre cheese',
      'Edamame',
      'Salade de chou'
    ]
  },
  {
    title: 'Plateau Salmon',
    piecesNumber: 24,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 21.9,
    elements: [
      '6 californias saumon avocat',
      '6 makis salmon roll',
      '6 makis salmon',
      '6 springs saumon avocat',
      'Edamame',
      'Salade de chou',
    ]
  },
  {
    title: 'Plateau Assortiment',
    piecesNumber: 18,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 17.5,
    elements: [
      '3 californias saumon avocat',
      '3 californias thon avocat', 
      '3 springs saumon avocat',
      '3 springs thon avocat',
      '6 makis salmon roll',
      'Edamame',
      'Salade de chou',
    ]
  },
  {
    title: 'Plateau Royal',
    piecesNumber: 18,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 21.9,
    elements: [
      '3 californias saumon avocat',
      '3 springs saumon avocat',
      '2 sushis saumon', 
      '2 sushis thon',
      '2 sushis daurade',
      '1 sushi crevette',
      '1 sushi ikura',
      'Edamame',
      'Salade de chou',
    ],
  },
  {
    title: 'Plateau Gourmand',
    piecesNumber: 20,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 23.9,
    elements: [
      '6 californias saumon avocat',
      '6 springs saumon avocat',
      '2 sushis saumon',
      '2 sushis thon',
      '2 sushis daurade',
      '1 sushi crevette',
      '1 sushi ikura',
      'Edamame',
      'Salade de chou',
    ],
  },
  {
    title: 'Box pour 2 ou 3',
    piecesNumber: 42,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 44,
    elements: [
      '6 makis salmon roll',
      '6 makis saumon',
      '6 californias saumon avocat',
      '6 springs saumon avocat',
      '6 springs thon cuit avocat',
      '4 sushis saumon',
      '2 sushis thon',
      '3 sashimis saumon',
      '3 sashimis thon',
    ]
  },
  {
    title: 'Box Sushi Shokudo',
    piecesNumber: 46,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 55,
    elements: [
      '4 sushis saumon',
      '2 sushis thon',
      '2 tulips tartare saumon avocat',
      '6 makis salmon roll',
      '6 californias saumon avocat',
      '6 californias foie gras',
      '6 springs crevette avocat',
      '6 springs tataki saumon',
      '8 tazuna rolls salmon teriyaki',
    ]
  },
  {
    title: 'Box à partager',
    piecesNumber: 60,
    image: imageFolderPath.concat('sushi_shokudo.webp'),
    price: 74,
    elements: [
      '6 sushis saumon',
      '4 sushis thon',
      '2 sushis crevette',
      '2 sushis tartare saumon',
      '2 sushis tartare thon',
      '6 makis salmon roll',
      '6 makis thon',
      '6 californias saumon avocat',
      '6 californias thon cuit avocat',
      '6 springs tataki saumon',
      '6 springs saumon avocat',
      '4 sashimis saumon',
      '4 sashimis thon',
    ]
  }
]