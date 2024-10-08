import type { FoodEntry } from './foodEntryInterface'

export interface DrinkEntry extends FoodEntry {
  alcoolVolume: number
}