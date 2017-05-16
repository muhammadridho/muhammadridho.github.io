const initialState = []

const snackReducer = (state = initialState, {type, payload}) => {
  switch(type){

    case "TOTAL_SUM_AND_QUANTITY": {
      let newState = payload
      return newState
    }
    default : {
      return state
    }
  }
}

export default snackReducer
