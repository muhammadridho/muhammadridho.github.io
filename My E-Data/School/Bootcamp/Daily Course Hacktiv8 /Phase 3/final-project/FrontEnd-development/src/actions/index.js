import axios from 'axios'


export const loginAccount = (payload) => {
  return (dispatch) => {
    dispatch({
      type : 'LOGIN_ACCOUNT',
      payload : payload
    })
  }
}

export const registerAccount = (payload) => {
  return (dispatch) => {
    axios.post('http://localhost:3000/register',{
    name : payload.name,
    photo : payload.photo,
    email : payload.email,
    password : payload.password
  }).then(response => {
    console.log('jalan cuy',response)
    dispatch({
      type : 'LOGIN_ACCOUNT',
      payload : response.data.client
    })
  })
  .catch(error => console.log(error))
  }
}


export const fetchFood = (payload) => {
  return (dispatch) => {
    axios.get('http://buahtanganbackend-dev.ap-southeast-1.elasticbeanstalk.com/api/products/'+payload+'/food').then(response => {
    console.log('jalan cuy foodsnya',response)
    dispatch({
      type : 'FETCH_FOOD',
      payload : response.data
    })
  })
  .catch(error => console.log(error))
  }
}

export const fetchSnack = (payload) => {
  return (dispatch) => {
    axios.get('http://buahtanganbackend-dev.ap-southeast-1.elasticbeanstalk.com/api/products/'+payload+'/snack').then(response => {
    console.log('jalan cuy snacknya',response)
    dispatch({
      type : 'FETCH_SNACK',
      payload : response.data
    })
  })
  .catch(error => console.log(error))
  }
}

export const fetchItem = (payload) => {
  return (dispatch) => {
    axios.get('http://localhost:3000/item/'+payload.city).then(response => {
    console.log('jalan cuy itemny',response)
    dispatch({
      type : 'FETCH_ITEM',
      payload : response.data.snacks
    })
  })
  .catch(error => console.log(error))
  }
}

export const addToChart = (payload) => {
  return (dispatch) => {
    console.log('masuk action add to chart', payload)
    dispatch({
      type : 'ADD_TO_CHART',
      payload : payload
    })
  }
}

export const removeFromCart = (payload) => {
  return (dispatch) => {
    dispatch({
      type : 'REMOVE_FROM_CHART',
      payload : payload
    })
  }
}

export const addLocation = (payload) => {
  return (dispatch) => {
    dispatch({
      type : 'FETCH_LOCATION',
      payload : payload
    })
  }
}

export const searchKeywords = (keyword) => {
  return {
    type : 'SEARCH_KEYWORDS',
    payload : keyword
  }
}

export const cleanSearch = () => {
  return(dispatch) => {
    dispatch({
      type : 'CLEAN_SEARCH',
      payload : ''
    })
  }
}

export const changePageStep = () => {
  return (dispatch) => {
    dispatch({
      type : 'NEXT_PAGE'
    })
  }
}

export const changeTransport = (data) => {
  return (dispatch) => {
    dispatch({
      type : 'CHANGE_TYPE',
      payload : data
    })
  }
}

export const selectPlace = (data) => {

  return (dispatch) => {
    dispatch({
      type : 'SELECTED_PLACE',
      payload : data
    })
  }
}


export const getPublicPlaces = (city_name) => {
  return (dispatch) => {
    axios.get(`http://buahtanganbackend-dev.ap-southeast-1.elasticbeanstalk.com/api/place/${city_name}`)
    .then(response => {
      dispatch({
        type : 'FETCH_PICK_UP_PLACES',
        payload : response.data
      })
    })
    .catch(error => console.log(error))
  }
}
