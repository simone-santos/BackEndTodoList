module.exports = function (app) {

const categoriaController = require('../controllers/categoriaControlle')


app.route('/categoriaRoute') 
   .get(categoriaController.listAll)
   .post(categoriaController.createOne)

app.route('/categoriaRoute/:id')
    .get(categoriaController.listOne)
    .put(categoriaController.updateOne)
    .delete(categoriaController.deleteOne)
    
}