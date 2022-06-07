import rand from '../Functions/rand'

function listReducer(state, action) {

    let newState;
    switch (action.type) {
        case 'generate_list':
            newState = Array.from({ length: 10 }, itm => rand(100, 999))
            console.log(newState)
            break;
        case 'sort_list':
            newState = state.slice().sort((a, b) => b - a)
            break;
        default:
            newState = [...state]
    }
    return newState
}

export default listReducer;