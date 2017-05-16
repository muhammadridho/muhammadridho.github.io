const initialState = {
  page : 1,
  labels: ["Detail Item Ordered","Pick Up Place","Payment Method","Order Summary", "Succeed"]
}

const pageStepReducer = (state = initialState, { type }) => {
  switch(type){
    case "NEXT_PAGE": {
      let newState
      if (state.page == 5) {
        newState = state
        return newState
      }else{
        newState = { ...state , page : state.page + 1 }
        return newState
      }
    }
    default : {
      return state
    }
  }
}

export default pageStepReducer
