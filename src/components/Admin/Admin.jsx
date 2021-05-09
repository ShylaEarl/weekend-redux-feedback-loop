import { useState, useEffect } from 'react';
import axios from 'axios';

function Admin(){

    //lists feedback on page load
    useEffect(() => {
        getFeedback()
    }, []);

    //sets local state
    const [feedback, setFeedback] = useState([]);

    const getFeedback = () => {
        axios.get('/getfeedback') //this may just be '/' or '/feedback'
        .then((response) => {
            setFeedback(response.data);
        })
        .catch((error) => {
            console.log('error in Admin get', error);
        });
    }

    return(
        <div>
            <h2>Hello?</h2>
            <table>
                <thead>
                    <tr>
                        <td>Feeling</td>
                        <td>Understanding</td>
                        <td>Supported</td>
                        <td>Comments</td>
                    </tr>
                </thead>
                <tbody>
                    {feedback.map((item, id) =>
                        <tr key={id}>
                            <td>{feedback.feeling}</td>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.supported}</td>
                            <td>{feedback.comments}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;