
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



/**
 * Action to add a new food from the form to the array foodsAll
 * @param food
 */
export function act__addNewFood(food){
  return {
    type: 'food:addNew',
    payload: food,
  }
}

/**
 * Removes the given food name from the foodsSelected
 * @param foodName
 */
export function act__unselectFood(foodName){
  return {
    type: 'food:unselect',
    payload: foodName
  }
}