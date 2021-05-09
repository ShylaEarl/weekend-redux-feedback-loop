const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET feedback from DB, add to admin page
router.get('/', (req, res) => {
  //get all feedback entries from DB
  pool.query('SELECT * FROM "feedback" ORDER BY "id" DESC;')
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

  //TODO add sweet alert here if time and include client side validation for comments so you can add comment validation here too
  //server side validation (Thanks for the pro tip Edan!)
  if(!newFeedback.feelingReducer || !newFeedback.understandingReducer || !newFeedback.supportedReducer){
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

