import {useHistory} from 'react-router';

function FinalPage(){

    const history = useHistory();

    const startAgain = () => {
        console.log('final page click');
        history.push("/Feeling");
    }

    return(
        <div>
            <h2>Thank You!</h2>
            <button onClick={startAgain}>Click to Leave New Feedback</button>
        </div>
    )
}

export default FinalPage;