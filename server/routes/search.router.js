const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    // return all categories
    let query = [`%${req.query.searchterm}%`];
    console.log('in search router', query)
        const queryText = `SELECT * FROM items
        WHERE "item_name" ILIKE $1`;
        pool.query(queryText, query)
            .then((result) => {
                res.send(result.rows);
                console.log(result.rows);
            })
            .catch((error) => {
                console.log(`Error in query, ${error}`);
                res.sendStatus(500);
            });
        })

module.exports = router;