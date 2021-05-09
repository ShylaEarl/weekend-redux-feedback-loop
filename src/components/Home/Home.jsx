import { useHistory } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

function Home() {

    const history = useHistory();

    const startSurvey = () => {
        history.push("/Feeling");
    }

    return (
        <div className="card">
            <Typography variant="h4">Hello Friend!</Typography>
            <Typography variant="h5">We are excited to learn about your expereience.</Typography>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => startSurvey()}>
                Start Survey
            </Button>
        </div>
    )
}

export default Home;
