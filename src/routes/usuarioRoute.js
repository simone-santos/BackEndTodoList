module.exports = function (app) {

const usuarioController = require('../controllers/usuarioController')

app.route('/usuarioRoute') 
   .get(usuarioController.listAll)
   .post(usuarioController.createOne)

app.route('/usuarioRoute/:id')
    .get(usuarioController.listOne)
    .put(usuarioController.updateOne)
    .delete(usuarioController.deleteOne)
   
 	  
}