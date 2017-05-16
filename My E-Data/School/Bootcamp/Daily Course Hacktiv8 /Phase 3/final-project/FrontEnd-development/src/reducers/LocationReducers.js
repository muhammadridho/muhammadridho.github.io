const initialState = {
  city : '',
  latitude : 0,
  longitude : 0
}

const locationReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case "FETCH_LOCATION": {
      console.log('masuk store lokasinya ', payload);
      let newState = {...payload}
      console.log(newState);
      return newState
    }
    default : {
      return state
    }
  }
}
export default locationReducer
