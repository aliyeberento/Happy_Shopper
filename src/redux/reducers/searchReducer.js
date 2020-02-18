const searchReducer = (state = [], action) => {
    // console.log('in search reducer. payload:', action.payload)
    if( action.type === 'SHOW_ITEMS') {
        return action.payload
    }
    return state
}

export default searchReducer