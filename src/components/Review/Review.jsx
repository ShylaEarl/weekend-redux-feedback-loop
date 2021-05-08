import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function Review() {

    //accesses redux store data
    const feedbackData = useSelector(store => store);

    //on action call, sends payload (setState) to redux store reducer
    const dispatch = useDispatch();

    //advances to the next page
    const history = useHistory();

    //on click, post data to server/DB, alert user, 
    //clear store, and route to final page
    const submitData = () => {
        console.log('review submit button clicked', feedbackData);
        axios.post('/feedback', feedbackData)
            .then((response) => {
                console.log(response);
                //TODO if time, add sweet alert
                alert("Your feedback has been submitted!");
                dispatch({ type: 'CLEAR', payload: '' });
                history.push("/FinalPage");
            })
            .catch((error) => {
                console.log('error POSTing data from review', error);
            })
    }

    const goBack = () => {
        history.push("/Comments");
    }

    return (
        <div>
            <h3>Please Review Your Feedback.</h3>
            <p>Feelings: {feedbackData.feelingReducer}</p>
            <p>Understanding: {feedbackData.understandingReducer}</p>
            <p>Support: {feedbackData.supportedReducer}</p>
            <p>Comments: {feedbackData.commentsReducer}</p>
            <button
                id="review-back"
                onClick={() => goBack()}>
                BACK
            </button>
            <button 
                id="review-next"
                onClick={submitData}>
                SUBMIT
            </button>
        </div>
    )
}

export default Review;

