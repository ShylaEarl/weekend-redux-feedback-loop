const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//DELETE feedback from DB, admin page
router.delete('/:id', (req, res) => {
  console.log('in DELETE', req.params.id);
  let sqlString = 'DELETE FROM "feedback" WHERE "id"=$1;';
  pool.query(sqlString, [req.params.id])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log('error in DELETE', error);
      res.sendStatus(500);
    });
})

//GET feedback from DB, add to admin page
router.get('/', (req, res) => {
  //get all feedback entries from DB
  let sqlString = 'SELECT * FROM "feedback" ORDER BY "id" DESC;';
  pool.query(sqlString)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log('error in GET', error);
      res.sendStatus(500);
    });
})

//POST new feedback to the server/DB
router.post('/', (req, res) => {
  let newFeedback = req.body;
  console.log(`new feedback`, newFeedback);

  //Server side validation 
  if (!newFeedback.feelingReducer || !newFeedback.understandingReducer || !newFeedback.supportedReducer) {
    res.status(400).send({
      message: 'Hi friend! You forgot something. Would you kindly double check your feedback?'
    });
    return;
  }

  let sqlString = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
  pool.query(sqlString, [newFeedback.feelingReducer, newFeedback.understandingReducer, newFeedback.supportedReducer, newFeedback.commentsReducer])
    .then(result => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log(`Error adding new feedback`, error);
      res.sendStatus(500);
    });
});

module.exports = router;

