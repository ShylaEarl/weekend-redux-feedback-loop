import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Input } from '@material-ui/core';

function Understanding() {

    //sets state/captures input data from user
    const [understanding, setUnderstanding] = useState('');

    //on action call, sends payload (setState) to redux store reducer
    const dispatch = useDispatch();

    //advances to the next page
    const history = useHistory();

    const addUnderstanding = () => {
        console.log('add understanding data', understanding);
        if (understanding === '' || understanding < 0 || understanding > 5) {
            swal({
                text: 'Please select a number between 0 and 5.',
                buttons: {
                    ok: true,
                }
            }).then(val => { //TODO if time get this functional
                if (val) {
                    setUnderstanding('');
                }
            });
        } else {
            dispatch({ type: 'ADD_UNDERSTANDING', payload: understanding });
            history.push("/Supported");

        }
    }

    const goBack = () => {
        history.push("/Feeling");
    }

    return (
        <div className="card">
            <Typography variant="h4">How well do you understand the content?</Typography>
            <Typography variant="h5">0 = WTF?!?!</Typography>
            <Typography variant="h5">5 = My (profitable) side hustle is teaching React. Just sayin...</Typography>
            <Input
                type="number"
                onChange={(event) => setUnderstanding(event.target.value)}
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
                onClick={() => addUnderstanding()}>
                NEXT
            </Button>
        </div>
    )
}

export default Understanding;





