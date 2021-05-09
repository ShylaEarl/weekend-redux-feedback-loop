import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Input } from '@material-ui/core';

function Feeling() {

    //sets state/captures input data from user
    const [feeling, setFeeling] = useState('');

    //on action call, sends payload (setState) to redux store reducer
    const dispatch = useDispatch();

    //advances to the next page
    const history = useHistory();

    //input validation, dispatch state to redux store, route to next page
    const addFeeling = () => {
        console.log('add feeling data', feeling);
        if (feeling === '' || feeling < 0 || feeling > 5) {
            swal({
                text: 'Please select a number between 0 and 5.',
                buttons: {
                    ok: true,
                }
            }).then(() => setFeeling('')); //TODO if time, how do I capture this click event?
        } else {
            dispatch({ type: 'ADD_FEELING', payload: feeling });
            history.push("/Understanding");

        }
    }

    //route to previous page
    const goBack = () => {
        history.push("/");
    }

    return (
        <div className="card">
            <Typography variant="h4">How are you feeling today?</Typography>
            <Typography variant="h5">0 = Down in the Dumps...</Typography>
            <Typography variant="h5">5 = Spectacular!</Typography>
            <Input
                type="number"
                onChange={(event) => setFeeling(event.target.value)}
            />
            <Button
                variant="outlined"
                color="secondary"
                onClick={() => goBack()}>
                BACK
            </Button>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => addFeeling()}>
                NEXT
            </Button>
        </div>
    )
}

export default Feeling;



