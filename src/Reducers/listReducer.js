import rand from '../Functions/rand'
import randColor from '../Functions/randColor'

function listReducer(state, action) {

    let newState;
    switch (action.type) {
        case 'generate_list':
            newState = Array.from({ length: 10 }, itm => ({ number: rand(100, 999), color: '#' + randColor() }))
            break;
        case 'sort_list':
            newState = state.slice().sort((a, b) => b.number - a.number)
            break;
        case 'add_blackToList':
            newState = [...state, { number: rand(100, 999), color: '#000000' }]
            console.log(newState)
            break;
        case 'higher_than_500':
            newState = [...state].filter(itm => itm.number > 500)
            console.log(newState)
            break;

        default:
            newState = [...state]
    }
    return newState
}

export default listReducer;