import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

function Comments() {

    //sets state/captures input data from user
    const [comments, setComments] = useState('');

    //on action call, sends payload (setState) to redux store reducer
    const dispatch = useDispatch();

    //advances to the next page
    const history = useHistory();

    const addComments = () => {
        console.log('add comments data', comments);
        dispatch({ type: 'ADD_COMMENTS', payload: comments });
        history.push("/Review");
    }

    const goBack = () => {
        history.push("/Supported");
    }

    return (
        <div className="card">
            <Typography variant="h4">What else would you like us to know?</Typography>
            <textarea
                id="comments"
                onChange={(event) => setComments(event.target.value)}
                rows="4"
                cols="50"
                name="comments"
                form="userForm">
            </textarea>
            <Button
                variant="outlined"
                color="secondary"
                onClick={() => goBack()}>
                BACK
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => addComments()}>
                NEXT
            </Button>
        </div>
    )
}

export default Comments;



