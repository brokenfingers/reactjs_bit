import rand from '../Functions/rand'
function textReducer(state, action) {
    let newState

    switch (action.type) {
        case 'random_text':
            newState = rand(1111, 9999);
            break;
        default:
            newState = state
    }

    return newState
}

export default textReducer