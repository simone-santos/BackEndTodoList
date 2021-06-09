const Categoria = require('../models').Categoria

exports.listAll = (req, res) => {
   Categoria.findAll()
    .then(categoria => { res.send(categoria) } )
    .catch(error => { res.send(error) })    	
}

exports.listOne = (req, res) => {
  Categoria.findAll({where: { id:req.params.id}})
    .then(categoria => { res.send(categoria) })
    .catch(error => { res.send(error) })
}

exports.createOne = (req, res) => {
  console.log(Categoria)
  const {descricao} = req.body
  Categoria.create({descricao})
    .then(categoria => { res.send(categoria) })
    .catch(error => { res.send(error) })
}

exports.updateOne = (req, res) => {
  const {descricao} = req.body
  Categoria.update({descricao}, 
                 {where: { id:req.params.id}})
    .then(categoria => { res.send(categoria) })
    .catch(error => { res.send(error) })
} 

exports.deleteOne = (req, res) => {
  Categoria.destroy( {where: { id:req.params.id}} )
    .then(categoria => { 
      res.json({
        message: "Categoria deletado com sucesso",
        data: categoria
      })
    })
    .catch(error => { res.send(error) })
}