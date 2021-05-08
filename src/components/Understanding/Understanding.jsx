import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Understanding(){

    //accesses redux store data
    //const understanding = useSelector(store => store.understandingReducer);
    //*** OR */
    //sets state/captures input data from user
    const [understanding, setUnderstanding] = useState('');

    //on action call, sends payload (setState) to redux store reducer
    const dispatch = useDispatch();

    //advances to the next page
    const history = useHistory();

    const addUnderstanding = () => {
        console.log('add understanding data', understanding);
        if(understanding === '' || understanding < 0 || understanding > 5){
            //TODO if time, add sweet alert
            alert('Please select a number between 0 and 5.');
        } else {
            dispatch({type: 'ADD_UNDERSTANDING', payload: understanding});
            setUnderstanding('');
            history.push("/Supported");
            
        }
    }

    return(
        <div className="Understanding">
            <h2>How well are you understaning the content?</h2>
            <h4>0 = WTF?!?!</h4>
            <h4>5 = My (profitable) side hustle is teaching React. Just saying...</h4>
            <input 
                id="understanding" 
                type="number" 
                onChange={(event) => setUnderstanding(event.target.value)} //onChange={addData}?? value={}??
            />
            <button 
                id="understanding" 
                onClick={() => addUnderstanding()}>
                NEXT
            </button>
        </div>
    )
}

export default Understanding;