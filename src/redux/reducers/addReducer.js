
const addReducer = (state = [], action ) => {
    console.log('in add reducer',action.payload)
    if ( action.type === 'SET_ITEM') {
        return action.payload
    }
    return state
}

export default addReducer