const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//return all list items
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "list_items"
    JOIN "items" ON "items".id = "list_items".items_id
    WHERE "list_id" = 1`
    console.log('in get list', req.body)
    pool.query(queryText)
        .then(result => {
            console.log(result.rows)
            res.send(result.rows)
        }).catch(error => {
            console.log('error in list items GET', error)
            res.sendStatus(500);
        })
})

// add a new item to list 
router.post('/', (req, res) => {
    console.log('Sending this item to database:', req.body)
    const newItem = req.body.id;
    console.log('user id:',req.body.user_id)
    const queryText = `INSERT INTO "list_items" ("list_id","items_id", "user_id") VALUES (1, $1, 1)`;
    pool.query(queryText, [newItem])
        .then(() => { res.sendStatus(200) })
        .catch((err) => {
            console.log('error in post route query thing', err)
            res.sendStatus(500);
        })
});


router.delete('/:id',  (req, res) => {
    console.log('user id', req.user_id)
    const id = req.params.id
    user_id = req.user.id
    console.log(req.params)
    console.log('in delete route', id)   
        const queryText = `DELETE FROM "list_items" WHERE "items_id" = $1 AND "user_id" = $2;`
        pool.query(queryText, [id, user_id])
        .then(() => {res.sendStatus(200)})
        .catch((err) => {
        console.log(err)
        res.sendStatus(500)
    })
})

module.exports = router;
