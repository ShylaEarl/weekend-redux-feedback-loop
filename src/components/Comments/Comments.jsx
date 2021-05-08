import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Comments(){

    //accesses redux store data
    //const understanding = useSelector(store => store.understandingReducer);
    //*** OR */
    //sets state/captures input data from user
    const [comments, setComments] = useState('');

    //on action call, sends payload (setState) to redux store reducer
    const dispatch = useDispatch();

    //advances to the next page
    const history = useHistory();

    const addComments = () => {
        console.log('add comments data', comments);
        // if(comments === ''){
        //     //TODO if time, add sweet alert
        //     alert('If you have nothing else to say, type a.');
        // } else {
            dispatch({type: 'ADD_COMMENTS', payload: comments});
            //setComments('');
            history.push("/Review");
            
        
    }

    return(
        <div>
            <h3>Please leave any additonal comments below.</h3>
            <textarea 
                id="comments" 
                onChange={(event) => setComments(event.target.value)}
                rows="4"
                cols="50"
                name="comments"
                form="userForm">
            </textarea>
            <button 
                id="comments"
                onClick={() => addComments()}>
                NEXT
            </button>
        </div>
    )
}

export default Comments;

