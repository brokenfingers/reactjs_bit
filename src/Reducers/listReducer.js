import rand from '../Functions/rand'
import randColor from '../Functions/randColor'

function listReducer(state, action) {



    let newState;
    switch (action.type) {
        case 'generate_list':
            newState = Array.from({ length: 10 }, (itm, i) => ({ number: rand(100, 999), color: '#' + randColor(), show: true, row: i }))
            break;
        case 'sort_list':
            newState = state.slice().sort((a, b) => b.number - a.number)
            break;
        case 'add_blackToList':
            newState = [...state, { number: rand(100, 999), color: '#000000', show: true }]

            break;
        case 'higher_than_500':
            newState = state.map(itm => ({ ...itm, show: itm.number > 500 ? true : false }))

            break;
        case 'lower_than_400':

            newState = state.map(itm => ({ ...itm, show: itm.number < 400 ? true : false }))

            break;
        case 'more_than_input':

            newState = state.map(itm => ({ ...itm, show: itm.number > action.payload ? true : false }))

            break;
        case 'less_than_input':

            newState = state.map(itm => ({ ...itm, show: itm.number < action.payload ? true : false }))

            break;
        case 'default_sort':

            newState = [...state].sort((a, b) => a.row - b.row)
            break;
        case 'Show_all':
            newState = state.map(itm => ({ ...itm, show: true }))

            break;

        default:
            newState = [...state]
    }
    return newState
}

export default listReducer;