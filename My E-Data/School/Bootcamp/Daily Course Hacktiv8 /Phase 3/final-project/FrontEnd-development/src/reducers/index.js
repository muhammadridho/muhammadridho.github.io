import { combineReducers} from 'redux'

import accountReducer from './AccountReducers'
import foodReducer from './FoodReducers'
import snackReducer from './SnackReducers'
import chartReducer from './ChartReducers'
import accesoriesReducer from './AccesoriesReducers'
import locationReducers from './LocationReducers'
import searchReducer from './SearchReducers'
import pageStepReducer from './PageStepReducers'
import pickUpPlaceReducer from './PickUpPlaceReducers'
import TotalSumAndQuantityCartReducers from './TotalSumAndQuantityCartReducers'

const rootReducer = combineReducers({
  account : accountReducer,
  foods : foodReducer,
  snacks : snackReducer,
  charts : chartReducer,
  accessories : accesoriesReducer,
  location : locationReducers,
  search : searchReducer,
  step : pageStepReducer,
  pickUpPlace : pickUpPlaceReducer,
  totalPriceAndQty : TotalSumAndQuantityCartReducers
})


export default rootReducer
