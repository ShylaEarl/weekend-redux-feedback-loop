import { useState, useEffect } from 'react';
import axios from 'axios';

function Admin(){

    //lists feedback on page load
    useEffect(() => {
        getFeedback()
    }, []);

    //sets local state
    const [feedback, setFeedback] = useState([]);

    //GET request from feedback from DB
    const getFeedback = () => {
        axios.get('/getFeedback')
        .then((response) => {
            setFeedback(response.data);
        })
        .catch((error) => {
            console.log('error in Admin get', error);
        });
    }

    //DELETE request 
    const deleteFeedback = () => {
        console.log('in delete request');
        //TODO write axios request, swal to confirm delete
    }

    return(
        <div>
            <h2>Feedback Results!</h2>
            <table>
                <thead>
                    <tr>
                        <td>Feeling</td>
                        <td>Comprehension</td>
                        <td>Support</td>
                        <td>Comments</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                    {feedback.map(item => {
                        return(
                            <tr key={item.id}>
                                <td>{item.feeling}</td>
                                <td>{item.understanding}</td>
                                <td>{item.support}</td>
                                <td>{item.comments}</td>
                                <td><button onClick={deleteFeedback}>DELETE</button></td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr></tr>
                </tfoot>
            </table>
        </div>
    )
}

export default Admin;