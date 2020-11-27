////en la linea 2 de la funcion pasa que esto tendra una demora porque tendra que realizar una consulta
//pero nodejs no para nodejs deja que cuando termine de ejecutarse le envien respuesta

function requestHandler(req, res) {
    User.findById(req.userId, function (error, user) {
        if (error) res.send(error);
        else Tasks.findById(user.taskId, function (err, taskv) {
            if (err) res.send(err);
            else {
                tasks.completed = true;
                SVGAnimatedTransformList.save(function (err) {
                    if (err) return res.send(err);
                    else {
                        res.send('Task Completed');
                    }
                });
            }
        });

    });
}