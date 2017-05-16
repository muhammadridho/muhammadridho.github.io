const initialState = []

const snackReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case "FETCH_SNACK": {
      console.log('masuk store ', payload);
      let newState = Object.assign(payload)
      console.log('statenya',newState);
      return newState
    }
    default : {
      return state
    }
  }
}

export default snackReducer
