const initialState = {
  transportType : null,
  pickUpList : [],
  selected : {}
}

const pickUpPlaceReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case "CHANGE_TYPE": {
      let newState = { ...state, transportType : payload}
      return newState
    }
    case "SELECTED_PLACE": {
      let newState = { ...state, selected : payload }
      console.log("selected place ==========",newState);
      return newState
    }
    case "FETCH_PICK_UP_PLACES": {
      let newState = { ...state, pickUpList : payload }
      return newState
    }
    default : {
      return state
    }
  }
}
export default pickUpPlaceReducer
