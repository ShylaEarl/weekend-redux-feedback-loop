import { useHistory } from 'react-router-dom';

function Home() {

    const history = useHistory();

    const startSurvey = () => {
        history.push("/Feeling");
    }

    return(
        <div>
            <h2>Hello Friend!</h2>
            <h3>We are interested to learn about your expereience.</h3>
            <button onClick={() => startSurvey()}>Start Survey</button>
        </div>
    )
} 

export default Home;