import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';

function Review(){

    //accesses redux store data
    const reduxStore = useSelector(store => store);

    return(
        <>
            <h3>Please Review Your Feedback.</h3>
            <p>Feelings: {reduxStore.feelingReducer}</p>
            <p>Understanding: {reduxStore.understandingReducer}</p>
            <p>Support: {reduxStore.supportedReducer}</p>
            <p>Comments: {reduxStore.commentsReducer}</p>
            <button>SUBMIT</button>
        </>
    )
}

export default Review;