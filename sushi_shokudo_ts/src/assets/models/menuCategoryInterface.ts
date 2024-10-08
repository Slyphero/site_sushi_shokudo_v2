import type { FoodEntry } from "./foodEntryInterface"
import type { MenuTitleEntry } from "./menuTitleEntryInterface"

export interface MenuCategory {
  menuTitleEntry: MenuTitleEntry
  foodEntriesArray: FoodEntry[]
}