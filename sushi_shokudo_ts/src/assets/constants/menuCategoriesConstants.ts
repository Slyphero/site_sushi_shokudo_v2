import type { MenuCategory } from '../models/menuCategoryInterface'

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
    headingName: 'Menus',
    foodEntriesArray: menusEntries,
    isDrink: false, 
    isCountable: true
  },
  {
    headingName: 'Sushis',
    foodEntriesArray: sushisEntries,
    isDrink: false, 
    isCountable: true
  },
  {
    headingName: 'Makis',
    foodEntriesArray: makisEntries,
    isDrink: false, 
    isCountable: true
  },
  {
    headingName: 'Sashimis',
    foodEntriesArray: sashimisEntries,
    isDrink: false, 
    isCountable: true
  },
  {
    headingName: 'Tazunas',
    foodEntriesArray: tazunasEntries,
    isDrink: false, 
    isCountable: true
  },
  {
    headingName: 'Temakis',
    foodEntriesArray: temakisEntries,
    isDrink: false, 
    isCountable: true
  },
  {
    headingName: 'Californias',
    foodEntriesArray: californiasEntries,
    isDrink: false, 
    isCountable: true
  },
  {
    headingName: 'Springs',
    foodEntriesArray: springsEntries,
    isDrink: false, 
    isCountable: true
  },
  {
    headingName: 'Gyozas',
    foodEntriesArray: gyozasEntries,
    isDrink: false, 
    isCountable: true
  }, 
  {
    headingName: 'Yakitoris',
    foodEntriesArray: yakitorisEntries,
    isDrink: false, 
    isCountable: true
  }
]