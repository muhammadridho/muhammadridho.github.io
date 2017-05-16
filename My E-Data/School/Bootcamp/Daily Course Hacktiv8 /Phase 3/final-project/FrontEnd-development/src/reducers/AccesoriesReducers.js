
const initialState = []
const accesoriesReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case "FETCH_ACCESSORIES": {
      console.log('masuk store ', payload);
      let newState = [...state, payload]
      return newState
    }
    default : {
      return state
    }
  }
}
export default accesoriesReducer
