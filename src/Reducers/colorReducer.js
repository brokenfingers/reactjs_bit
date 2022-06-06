function colorReducer(state, action) {
    let newState;

    newState = state;

    switch (action.type) {
        case 'make_black':
            newState = 'black'
            break
        case 'make_blue':
            newState = 'blue'
            break
        case 'make_toggle':
            newState = state === 'blue' ? 'black' : 'blue'
            break
        default:
            newState = state
    }

    return newState


}

export default colorReducer