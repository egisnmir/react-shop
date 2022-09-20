const initialState = {
    count: 100,
    personName: 'Tom'
}

export const countReducer2 = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
        {
            return { 
                ...state,
                count: state.count + 1
            };
        }
        case 'DECREMENT':
        {
            return {
                ...state,
                count: state.count - 1
            };
        }
        default:
            return state;
    }
}
