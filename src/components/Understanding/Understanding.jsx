import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
            //TODO if time, add sweet alert
            alert('Please select a number between 0 and 5.');
        } else {
            dispatch({ type: 'ADD_UNDERSTANDING', payload: understanding });
            history.push("/Supported");

        }
    }

    const goBack = () => {
        history.push("/Feeling");
    }

    return (
        <div className="Understanding">
            <h2>How well are you understaning the content?</h2>
            <h4>0 = WTF?!?!</h4>
            <h4>5 = My (profitable) side hustle is teaching React. Just sayin...</h4>
            <input
                id="understanding"
                type="number"
                onChange={(event) => setUnderstanding(event.target.value)}
            />
            <button
                id="understanding-back"
                onClick={() => goBack()}>
                BACK
            </button>
            <button
                id="understanding-next"
                onClick={() => addUnderstanding()}>
                NEXT
            </button>
        </div>
    )
}

export default Understanding;

