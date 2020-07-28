const initialState = {
    value: 1
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COUNTER':
            return { ...state, value: action.payload }
        case 'INCREMENT_COUNTER':
            return { ...state, value: state.value + 1 }
        case 'DECREMENT_COUNTER':
            return { ...state, value: state.value - 1 }
        default:
            return state;
    }
}

export default counter;