import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchDog } from '../actions'
import Loader from 'react-loader-spinner'

const DogPhoto = props => {
    useEffect(() => {
        fetchDog();
    }, [])

    if (props.isFetching) {
        return <h2>Loading...</h2>
    }

    return(
        <>
        {props.isFetching &&
        <Loader
        type='puff'
        color='#00BFFF'
        height={70}
        width={70} />}
        <div>
            <img src={props.message}/>
            {props.error && <p>{props.error}</p>}
        </div>  
        <button onClick={props.fetchDog}>Click for another Pup</button>

        </>
    )
}

const mapStateToProps = state => {
    return {
        message: state.message,
        isFetching: state.isFetching,
        error: state.error

    }
}

export default connect(mapStateToProps, {fetchDog})(DogPhoto)
