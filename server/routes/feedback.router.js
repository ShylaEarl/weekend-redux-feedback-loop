const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//POST new feedback to the server/DB
router.post('/',  (req, res) => {
    let newFeedback = req.body;
    console.log(`new feedback`, newFeedback);
  
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