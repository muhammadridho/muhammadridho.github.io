export const filterUrlsByKeywords = (state, keywords) => {
  return state.filter(item => item.name.toLowerCase().includes(keywords.toLowerCase()))
}
