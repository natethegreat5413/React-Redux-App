import React, {useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchJoke } from '../actions/jokeActions'


const Joke = props => {
    useEffect(() => {
        // call an action creator
        props.fetchJoke()
    }, []);

    return(
        <div>
            <h1>The BEST Jokes!</h1>
            {props.isFetching && 
            <Loader 
            type='puff' 
            color='#00BFFF' 
            height={70} 
            width={70} />}
            <div className='card'>
                {props.setup && <h3>"{props.setup}"</h3>}
                {props.punchline && <h3>"{props.punchline}"</h3>}
                {props.error && <p className='error' >{props.error}</p>}
                <button onClick={props.fetchJoke}>Not funny? Try again!</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        setup: state.jokes.setup ,
        punchline: state.jokes.punchline,
        isFetching: state.jokes.isFetching,
        error: state.jokes.error
    }
}

export default connect(mapStateToProps, {fetchJoke})(Joke)

