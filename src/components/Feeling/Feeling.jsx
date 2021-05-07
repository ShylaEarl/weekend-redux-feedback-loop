import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Feeling(){

    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState(0);

    const addData = (event) => {
        console.log('feeling data');
        setFeeling({feeling: event.target.value}); //double check this syntax
    }

    const nextPage = () => {
        console.log('feeling button clicked');
    }

    return(
        <div className="feeling">
            <h2>How are you feeling today?</h2>
            <h4>0 = Down in the Dumps</h4>
            <h4>5 = Spectacular!</h4>
            <input 
                id="feeling" 
                type="number" 
                onChange={addData} 
            />
            <button 
                id="feeling" 
                onClick={nextPage}>
                NEXT
            </button>
        </div>
    )
}

export default Feeling;