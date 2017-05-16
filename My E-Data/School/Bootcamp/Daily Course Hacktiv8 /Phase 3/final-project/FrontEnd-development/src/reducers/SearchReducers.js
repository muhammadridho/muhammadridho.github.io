const searchReducer = (state = '', {type, payload}) => {
  switch(type){
    case "SEARCH_KEYWORDS" : return payload
    case "CLEAN_SEARCH" : return ''
    default : return state
  }
}
export default searchReducer
