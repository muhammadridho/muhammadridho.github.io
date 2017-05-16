const initialState = [
]

const foodReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case "FETCH_FOOD": {
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
export default foodReducer
