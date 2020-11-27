//em6 intega promises

//mismo ejemplo de callbacks pero con promises
function requestHandler(req, res) {
    User.findById(req.usersId).then(function (user) {
            return Tasks.findById(user.taskId);
        }).then(function (task) {
            tasks.completed = true;
            return tasks.save();
        }).then(function () {
            res.send('Tasks completed');
        })
        .catch(function (errors) {
            res.send(errors);
        });
}