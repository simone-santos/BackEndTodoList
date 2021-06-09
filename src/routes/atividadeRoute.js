module.exports = function (app) {

const atividadeController = require('../controllers/atividadeController')

app.route('/atividadeRoute') 
   .get(atividadeController.listAll)
   .post(atividadeController.createOne)

app.route('/atividadeRoute/:id')
    .get(atividadeController.listOne)
    .put(atividadeController.updateOne)
    .delete(atividadeController.deleteOne)
 }