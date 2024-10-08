export interface FoodEntry {
  title: string 
  image: string 
  piecesNumber: number
  price: number 
  elements?: string[]
  isDrink: boolean 
  isCountable: boolean
}