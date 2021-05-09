import { useHistory } from 'react-router';
import { Button, Typography } from '@material-ui/core';

function FinalPage() {

    const history = useHistory();

    const startAgain = () => {
        console.log('final page click');
        history.push("/Feeling");
    }

    return (
        <div className="card">
            <Typography variant="h2">Thank You!</Typography>
            <Button
                variant="contained"
                color="secondary"
                onClick={startAgain}>
                Click to Leave New Feedback
            </Button>
        </div>
    )
}

export default FinalPage;

