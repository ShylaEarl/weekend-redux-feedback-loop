import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Supported(){

    //accesses redux store data
    //const understanding = useSelector(store => store.understandingReducer);
    //*** OR */
    //sets state/captures input data from user
    const [supported, setSupported] = useState('');

    //on action call, sends payload (setState) to redux store reducer
    const dispatch = useDispatch();

    //advances to the next page
    const history = useHistory();

    const addSupported = () => {
        console.log('add supported data', supported);
        if(supported === '' || supported < 0 || supported > 5){
            //TODO if time, add sweet alert
            alert('Please select a number between 0 and 5.');
        } else {
            dispatch({type: 'ADD_SUPPORTED', payload: supported});
            //setSupported('');
            history.push("/Comments");
            
        }
    }

    return(
        <div className="supported">
            <h2>How well are you being supported?</h2>
            <h4>0 = I'm adrift in a turbulent sea with nothing solid in sight.</h4>
            <h4>5 = I'm surrounded by helpful, kind, compassionate folks who hold it down.</h4>
            <input 
                id="supported" 
                type="number" 
                onChange={(event) => setSupported(event.target.value)} //onChange={addData}?? value={}??
            />
            <button 
                id="supported" 
                onClick={() => addSupported()}>
                NEXT
            </button>
        </div>
    )
}

export default Supported;