const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/", (req, res) => {
    db.Todos.findAll({
    }).then((results) => {
        res.render('index', { todos: results });
    });
});

//ADD CUSTOMER IF IT'S NOT ALREADY ON THE LIST
router.post('/api/customer', (req, res) => {
    db.Todos.create({
        task: req.body.task,
    }).then((results) => {
        res.json(results);
    })
})

router.put('api/todos/:id', (req, res) => {
    db.Todos.update(
        {
            task: req.body.task,
            done: req.body.done,
        }
        , {
            where: {
                id: req.params.id
            }
        }).then((results) => {
            res.end();
        })
});

router.delete('api/todos/:id', (req, res) => {
    db.Todos.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
    })
});
module.exports = router;

