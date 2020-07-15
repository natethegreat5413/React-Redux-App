import {
    FETCH_DOG_SUCCESS,
    FETCH_DOG_START
} from '../actions'

const initialState = {
    title: "DOGS!!",
    message: '',
    isFetching: false,
    error: ''

}


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DOG_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCH_DOG_SUCCESS:
            return {
                ...state,
                message: action.payload,
                isFetching: false
            }
        default: 
        return state;
    }
}