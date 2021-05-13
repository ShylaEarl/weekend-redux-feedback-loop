import { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css';

function Admin() {

    //lists feedback on page load
    useEffect(() => {
        getFeedback()
    }, []);

    //sets local state
    const [feedback, setFeedback] = useState([]);

    //GET request to get feedback from DB
    const getFeedback = () => {
        axios.get('/feedback')
            .then((response) => {
                setFeedback(response.data);
            })
            .catch((error) => {
                console.log('error in Admin get', error);
            });
    }

    //DELETE request 
    const deleteFeedback = (id) => {
        console.log('in delete request', id);

        axios.delete(`/feedback/${id}`)
            .then((response) => {
                console.log('delete request', response);
                getFeedback();
            })
            .catch((error) => {
                console.log('error in DELETE', error);
            })
    }

    //Sweet Alert confirms desire to delete
    const deleteFeedbackHandler = (id) => {
        swal({
            title: "Hello!",
            text: "Are you sure you want to delete this feedback?",
            buttons: {
                cancel: true,
                confirm: "Delete"
            }
        }).then(val => {
            if (val) {
                swal({
                    text: "You've deleted your feedback.",
                });
                deleteFeedback(id); 
            }
        });
    }

    return (
        <div>
            <h2 id="admin-h2">Feedback Results!</h2>
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
                        return (
                            <tr key={item.id}>
                                <td>{item.feeling}</td>
                                <td>{item.understanding}</td>
                                <td>{item.support}</td>
                                <td>{item.comments}</td>
                                <td><button onClick={(event) => deleteFeedbackHandler(item.id)}>DELETE</button></td>
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

