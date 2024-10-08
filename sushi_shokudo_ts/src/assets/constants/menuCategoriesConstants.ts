import type { MenuCategory } from '../models/menuCategoryInterface'

import { menusEntries } from '@/assets/constants/menusEntriesConstants'
import { sushisEntries } from '@/assets/constants/sushisEntriesConstants'
import { makisEntries } from '@/assets/constants/makisEntriesConstants'
import { sashimisEntries } from '@/assets/constants/sashimisEntriesConstants'
import { tazunasEntries } from '@/assets/constants/tazunasEntriesConstants'
import { temakisEntries } from '@/assets/constants/temakisEntriesConstants'
import { californiasEntries } from '@/assets/constants/californiasEntriesConstants'
import { springsEntries } from '@/assets/constants/springsEntriesConstants'

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