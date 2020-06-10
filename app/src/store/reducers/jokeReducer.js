const initialState = {
    setup: '',
    punchline: '',
    isFetching: false,
    error: '',
}

export const jokeReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_JOKE_START':
            return {...state,
            isFetching: true
            }
        case 'FETCH_JOKE_SUCCESS':
            return {
                ...state,
                isFetching: false,
                setup: action.payload.setup,
                punchline: action.payload.punchline,
                error: ''
            }
        case 'FETCH_JOKE_FAILURE':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default: 
        return state;
    }
}