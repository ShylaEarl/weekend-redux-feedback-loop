import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Feeling(){

    //accesses redux store data
    //const feeling = useSelector(store => store.feelingReducer);
    //*** OR */
    //sets state/captures input data from user
    const [feeling, setFeeling] = useState('');

    //on action call, sends payload (setState) to redux store reducer
    const dispatch = useDispatch();

    //advances to the next page
    const history = useHistory();

    const addFeeling = () => {
        console.log('add feeling data', feeling);
        if(feeling === '' || feeling < 0 || feeling > 5){
            //TODO if time, add sweet alert
            alert('Please select a number between 0 and 5.');
        } else {
            dispatch({type: 'ADD_FEELING', payload: feeling});
            //setFeeling('');
            history.push("/Understanding");
            
        }
    }

    return(
        <div className="feeling">
            <h2>How are you feeling today?</h2>
            <h4>0 = Down in the Dumps...</h4>
            <h4>5 = Spectacular!</h4>
            <input 
                id="feeling" 
                type="number" 
                onChange={(event) => setFeeling(event.target.value)} //onChange={addData}?? value={}??
            />
            <button 
                id="feeling" 
                onClick={() => addFeeling()}>
                NEXT
            </button>
        </div>
    )
}

export default Feeling;


// //captures input data 
// setFeeling({feeling: event.target.value}); //double check this syntax