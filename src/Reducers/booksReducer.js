function booksReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'uzkrauta':
            newState = action.payload
            break;
        case 'sort_abc':
            console.log('dddd')
            newState = [...state].sort((a, b) => {
                if (a.title[0] > b.title[0]) return 1
                if (a.title[0] < b.title[0]) return -1
            })

            break;
        default:
            newState = [...state]
    }

    return newState;
}

export default booksReducer;