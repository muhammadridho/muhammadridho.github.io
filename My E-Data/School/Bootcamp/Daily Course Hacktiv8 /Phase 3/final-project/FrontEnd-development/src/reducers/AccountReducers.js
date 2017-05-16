const initialState = {
  name : '',
  image_url : 'http://vignette2.wikia.nocookie.net/moviedatabase/images/8/8c/Tony_Stark.jpg',
  email : '',
  username : '',
  token : ''
}

const accountReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case "REGISTER_ACCOUNT": {
      console.log('masuk store ', payload);
      let newState = {...payload}
      return newState
    }
    case "LOGIN_ACCOUNT" : {
      console.log('masuk store login', payload);
      let newState = {...payload}
      return newState
    }
    default : {
      return state
    }
  }
}
export default accountReducer
