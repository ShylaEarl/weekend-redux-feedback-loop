import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router';

function Review(){

    //accesses redux store data
    const reduxStore = useSelector(store => store);

    //on action call, sends payload (setState) to redux store reducer
    const dispatch = useDispatch();

    //advances to the next page
    const history = useHistory();

    //on click, post data to server/DB, alert user, 
    //clear store, and route to final page
    const submitData = () => {
        console.log('review submit button clicked');
        axios.post('/feedback', reduxStore)
        .then((response) => {
            console.log(response);
            //TODO if time, add sweet alert
            alert("Your feedback has been submitted!");
            dispatch({type: 'CLEAR', payload: ''});
            history.push("/FinalPage");
        })
        .catch((error) => {
            console.log('error POSTing data from review', error);
        })
    }

    return(
        <>
            <h3>Please Review Your Feedback.</h3>
            <p>Feelings: {reduxStore.feelingReducer}</p>
            <p>Understanding: {reduxStore.understandingReducer}</p>
            <p>Support: {reduxStore.supportedReducer}</p>
            <p>Comments: {reduxStore.commentsReducer}</p>
            <button onClick={submitData}>SUBMIT</button>
        </>
    )
}

export default Review;