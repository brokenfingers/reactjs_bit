function booksReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'uzkrauta':
            newState = action.payload
            break;
        default:
            newState = state
    }

    return newState;
}

export default booksReducer;