module.exports = app => {
    const Tasks = app.db.models.Tasks;
    app.route("/tasks")
        .all(app.auth.authenticate())
        .get((req, res) => {
            // "/tasks" lista
            Tasks.findAll({
                where: {user_id: req.user.id }
            })
            .then(result => res.json(result))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
        })
        .post((req, res) => {
            //"/tasks" cadastra nova task
            req.body.user_id = req.user.id;
            Tasks.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({msg: error.message});
                });
        });
    app.route("/tasks/:id")
    .all(app.auth.authenticate())
    .get((req, res) => {
        // "/tasks/1": Consulta uma task
        Tasks.findOne({ where: {
            id: req.params.id,
            user_id: req.user.id
        }})
        .then(result => {
            if (result) {
                return res.json(result);
            } else {
                return res.sendStatus(404);
            }
        })
        .catch(error => {
            res.status(412).json({msg:error.message});
        });
    })
    .put((req, res) => {
        // "/tasks/1": Atualiza uma task
        Tasks.update(req.body, { where: {
            id: req.params.id,
            user_id: req.user.id
        }})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    })
    .delete((req, res) => {
        // "/task/1": Exclui uma task
        Tasks.destroy({ where: {
            id: req.params.id,
            user_id: req.user.id
        }})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    });
};
