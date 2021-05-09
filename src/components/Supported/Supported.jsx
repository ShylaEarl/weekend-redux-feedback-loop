import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Input } from '@material-ui/core';

function Supported() {

    //sets state/captures input data from user
    const [supported, setSupported] = useState('');

    //on action call, sends payload (setState) to redux store reducer
    const dispatch = useDispatch();

    //advances to the next page
    const history = useHistory();

    const addSupported = () => {
        console.log('add supported data', supported);
        if (supported === '' || supported < 0 || supported > 5) {
            swal({
                text: 'Please select a number between 0 and 5.',
                buttons: {
                    ok: true,
                }
            }).then(() => { //TODO if time get this functional
                setSupported('');
            });
        } else {
            dispatch({ type: 'ADD_SUPPORTED', payload: supported });
            history.push("/Comments");

        }
    }

    const goBack = () => {
        history.push("/Understanding");
    }

    return (
        <div className="card">
            <Typography variant="h4">How well are you being supported?</Typography>
            <Typography variant="h5">0 = I'm adrift in a turbulent sea with nothing solid in sight.</Typography>
            <Typography variant="h5">5 = I'm surrounded by kind, helpful, compassionate folks who hold it down.</Typography>
            <Input
                type="number"
                onChange={(event) => setSupported(event.target.value)}
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
                onClick={() => addSupported()}>
                NEXT
            </Button>
        </div>
    )
}

export default Supported;

