import { initialState } from "./initialState";

/**
 * Answers to a "foods:filter" event - updates the foodsFiltered array in the store
 * @param state
 * @param action
 */
export function mySingleReducer(state = initialState, action){

  switch (action.type){

    case 'foods:filter':
      // filters the food list given the search input
      let search = action.payload;
      return {
        ...state,
        foodsFiltered: [...state.foodsAll].filter(food => food.name.toLowerCase().includes(search.toLowerCase()))
      };

    case 'food:select':
      // select a new food and displays it
      let food = action.payload;
      return {
        ...state,
        foodsSelected: addFoodToFoodsSelected(food, [...state.foodsSelected])
      };

    default:
      return state;
  }

}

function addFoodToFoodsSelected(food, foodsSelected){

  let out = [...foodsSelected];
  let indexFood = foodsSelected.map(meal => meal.name).indexOf(food.name);
  let isNewFood =  indexFood === -1;

  if(isNewFood){
    food.quantity = 1;
    out.push(food);
  } else{
    out[indexFood].quantity += 1;
  }
  return out
}