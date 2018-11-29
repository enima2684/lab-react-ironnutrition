
/**
 * Builds the filterFoods Action
 */
export function act__filterFoods(search){
  return {
    type:'foods:filter',
    payload: search
  }
}


/**
 * Action to select an item for FoodSelector and put it on the recap
 * @param food
 */
export function act__selectFood(food){
  return {
    type: 'food:select',
    payload: food,
  }
}