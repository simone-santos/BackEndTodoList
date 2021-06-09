module.exports = function (app) {

const statusController = require('../controllers/statusController')

app.route('/statusRoute') 
   .get(statusController.listAll)
   .post(statusController.createOne)

app.route('/statusRoute/:id')
    .get(statusController.listOne)
    .put(statusController.updateOne)
    .delete(statusController.deleteOne)
    
}