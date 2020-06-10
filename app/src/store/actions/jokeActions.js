import axios from 'axios'

export const fetchJoke = () => {
    return dispatch => {
        dispatch({ type: "FETCH_JOKE_START" })
        axios
        .get('https://official-joke-api.appspot.com/jokes/random')
        .then(res => {
            console.log(res)
            dispatch({ type: 'FETCH_JOKE_SUCCESS', payload: res.data})
            
        })
        .catch(err => {
            dispatch({ type: 'FETCH_QUOTE_FAILURE', payload: `Error ${err.status}:${err.response.data}`})
        })
        
    }
}

export const updateTitle = newTitle => {
    return {}
}