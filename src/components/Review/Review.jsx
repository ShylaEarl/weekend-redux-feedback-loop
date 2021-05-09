import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, Typography } from '@material-ui/core';

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
                swal({
                    text: "Your feedback has been submitted!",
                    icon: "success"
                });
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
        <div className="card">
            <Typography variant="h4">Please Review Your Feedback.</Typography>
            <p>Feelings: {feedbackData.feelingReducer}</p>
            <p>Understanding: {feedbackData.understandingReducer}</p>
            <p>Support: {feedbackData.supportedReducer}</p>
            <p>Comments: {feedbackData.commentsReducer}</p>
            <Button
                variant="outlined"
                color="secondary"
                onClick={() => goBack()}>
                BACK
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={submitData}>
                SUBMIT
            </Button>
        </div>
    )
}

export default Review;

