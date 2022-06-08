function booksReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'uzkrauta':
            newState = [...action.payload].map((itm, i) => ({ ...itm, row: i, show: true }))
            break;
        case 'sort_abc':
            console.log('dddd')
            newState = [...state].sort((a, b) => {
                if (a.title[0] > b.title[0]) return 1
                if (a.title[0] < b.title[0]) return -1
                return 0
            })

            break;
        case 'sort_default':

            newState = [...state].sort((a, b) => a.row - b.row)

            break;
        case 'price_above_13':
            newState = state.map(itm => (+itm.price > 13) ? ({ ...itm, show: true }) : ({ ...itm, show: false }))

            break;
        case 'show_all':
            newState = state.map(itm => ({ ...itm, show: true }))

            break;
        case 'get_new':
            newState = null

            break;
        default:
            newState = [...state]
    }

    return newState;
}

export default booksReducer;