import type { MenuCategory } from '../models/menuCategoryInterface'

import { menusEntries } from './menusEntriesConstants'
import { sushisEntries } from './sushisEntriesConstants'
import { makisEntries } from './makisEntriesConstants'
import { sashimisEntries } from './sashimisEntriesConstants'
import { tazunasEntries } from './tazunasEntriesConstants'
import { temakisEntries } from './temakisEntriesConstants'
import { californiasEntries } from './californiasEntriesConstants'
import { springsEntries } from './springsEntriesConstants'

export const menuCategories: MenuCategory[] = [
  {
    headingName: 'Menus',
    foodEntriesArray: menusEntries
  },
  {
    headingName: 'Sushis',
    foodEntriesArray: sushisEntries
  },
  {
    headingName: 'Makis',
    foodEntriesArray: makisEntries
  },
  {
    headingName: 'Sashimis',
    foodEntriesArray: sashimisEntries
  },
  {
    headingName: 'Tazunas',
    foodEntriesArray: tazunasEntries
  },
  {
    headingName: 'Temakis',
    foodEntriesArray: temakisEntries
  },
  {
    headingName: 'Californias',
    foodEntriesArray: californiasEntries
  },
  {
    headingName: 'Springs',
    foodEntriesArray: springsEntries
  }
]