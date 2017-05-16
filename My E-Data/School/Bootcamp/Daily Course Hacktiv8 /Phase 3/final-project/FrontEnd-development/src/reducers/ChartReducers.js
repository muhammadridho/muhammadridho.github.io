const initialState = {
  cartItems :
  [
  ],
  cartSummary : [
  ],
  totalPrice : 0
}

const chartReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case "ADD_TO_CHART": {
      let newCart =  [...state.cartItems, payload]
      let productsBought = newCart.reduce((acc, curr) => {

        let indexItem = acc.findIndex((e) => e.id === curr.id)

        if(indexItem > -1){
          acc[indexItem].qty++
          return acc
        }else {
          let objItem = Object.assign({}, { ...curr}, {'qty': 1})
          acc.push(objItem)
          return acc
        }
      }, [])

      let sum = productsBought.reduce((acc, curr) => {
        let total = acc + curr.price * curr.qty
        return total
      }, 0)

      console.log("ini total klo nambah =====>", sum);

      let newState = {...state, cartItems: newCart, cartSummary: productsBought, totalPrice: sum}

      return newState
    }
    case "REMOVE_FROM_CHART" : {

      let indexItem = state.cartItems.findIndex((item) => item.id === payload.id)
      let copyState = state.cartItems.slice(0);

      if (indexItem > -1) {
        copyState.splice(indexItem, 1);

        let newCart =  copyState
        let productsBought = newCart.reduce((acc, curr) => {

          let indexItem = acc.findIndex((e) => e.id === curr.id)

          if(indexItem > -1){
            acc[indexItem].qty++
            return acc
          }else {
            let objItem = Object.assign({}, { ...curr}, {'qty': 1})
            acc.push(objItem)
            return acc
          }

        }, [])

        let sum = productsBought.reduce((acc, curr) => {
          let total = acc + curr.price * curr.qty
          return total
        }, 0)
        console.log("ini total klo kurang =====>", sum);
        let newState = {...state, cartItems: newCart, cartSummary: productsBought, totalPrice: sum}

        return newState
      } else {

          return state
      }

    }
    default : {
      return state
    }
  }
}
export default chartReducer
