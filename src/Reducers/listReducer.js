import rand from '../Functions/rand'
import randColor from '../Functions/randColor'

function listReducer(state, action) {

    let newState;
    switch (action.type) {
        case 'generate_list':
            newState = Array.from({ length: 10 }, itm => ({ number: rand(100, 999), color: randColor() }))
            console.log(newState)
            break;
        case 'sort_list':
            newState = state.slice().sort((a, b) => b.number - a.number)
            break;
        default:
            newState = [...state]
    }
    return newState
}

export default listReducer;