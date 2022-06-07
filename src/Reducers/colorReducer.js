import randColor from "../Functions/randColor";

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
        case 'make_random':
            newState = '#' + randColor()
            break
        case 'make_pick':
            newState = action.payload
            break
        default:
            newState = state
    }

    return newState


}

export default colorReducer