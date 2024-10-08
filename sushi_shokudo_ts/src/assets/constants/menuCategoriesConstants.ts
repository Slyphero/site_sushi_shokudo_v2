import type { MenuCategory } from '../models/menuCategoryInterface'
import type { MenuTitleEntry } from '../models/menuTitleEntryInterface'
import { imageFolderPath } from "@/assets/constants/imageFolderPathConstant"

import { menusEntries } from './menusEntriesConstants'
import { sushisEntries } from './sushisEntriesConstants'
import { makisEntries } from './makisEntriesConstants'
import { sashimisEntries } from './sashimisEntriesConstants'
import { tazunasEntries } from './tazunasEntriesConstants'
import { temakisEntries } from './temakisEntriesConstants'
import { californiasEntries } from './californiasEntriesConstants'
import { springsEntries } from './springsEntriesConstants'
import { gyozasEntries } from './gyozasEntriesConstants'
import { yakitorisEntries } from './yakitorisEntriesConstants'

export const menuCategories: MenuCategory[] = [
  {
    menuTitleEntry: {
      title: 'Menus',
      image: imageFolderPath.concat('sushi_shokudo.webp'),
      description: 'Notre sélection de menus.'
    },
    foodEntriesArray: menusEntries,
  },
  {
    menuTitleEntry: {
      title: 'Sushis',
      image: imageFolderPath.concat('sushi_shokudo.webp'),
      description: 'Notre sélection de sushis.'
    },
    foodEntriesArray: sushisEntries,
  },
  {
    menuTitleEntry: {
      title: 'Makis',
      image: imageFolderPath.concat('sushi_shokudo.webp'),
      description: 'Notre sélection de makis.'
    },
    foodEntriesArray: makisEntries,
  },
  {
    menuTitleEntry: {
      title: 'Sashimis',
      image: imageFolderPath.concat('sushi_shokudo.webp'),
      description: 'Notre sélection de sashimis.'
    },
    foodEntriesArray: sashimisEntries,
  },
  {
    menuTitleEntry: {
      title: 'Tazunas',
      image: imageFolderPath.concat('sushi_shokudo.webp'),
      description: 'Notre sélection de tazunas.'
    },
    foodEntriesArray: tazunasEntries,
  },
  {
    menuTitleEntry: {
      title: 'Temakis',
      image: imageFolderPath.concat('sushi_shokudo.webp'),
      description: 'Notre sélection de temakis.'
    },
    foodEntriesArray: temakisEntries,
  },
  {
    menuTitleEntry: {
      title: 'Californias',
      image: imageFolderPath.concat('sushi_shokudo.webp'),
      description: 'Notre sélection de californias.'
    },
    foodEntriesArray: californiasEntries,
  },
  {
    menuTitleEntry: {
      title: 'Springs',
      image: imageFolderPath.concat('sushi_shokudo.webp'),
      description: 'Notre sélection de springs.'
    },
    foodEntriesArray: springsEntries,

  },
  {
    menuTitleEntry: {
      title: 'Gyozas',
      image: imageFolderPath.concat('sushi_shokudo.webp'),
      description: 'Notre sélection de gyozas.'
    },
    foodEntriesArray: gyozasEntries,
  }, 
  {
    menuTitleEntry: {
      title: 'Yakitoris',
      image: imageFolderPath.concat('sushi_shokudo.webp'),
      description: 'Notre sélection de yakitoris.'
    },
    foodEntriesArray: yakitorisEntries,
  }
]