const Lista = require('../models').Lista
const Categoria = require('../models').Categoria
const Usuario = require('../models').Usuario
const Atividade = require('../models').Atividade
const Status = require('../models').Status

exports.createOne = (req, res) => {
  console.log(Lista)
  const {titulo, descricao, idUsuario ,idCategoria} = req.body
  Lista.create({titulo, descricao, idUsuario, idCategoria})
    .then(lista => { res.send(lista) })
    .catch(error => { res.send(error) })

}

exports.listAll = (req, res) => {
   Lista.findAll()
    .then(lista => { res.send(lista) } )
    .catch(error => { res.send(error) })      
}

exports.listOne = (req, res) => {
  Lista.findAll({
    where: { id:req.params.id },
      include:
        [ 
          { model: Usuario },
          { model: Categoria },
          { model: Atividade,
            include:
              [
                { model: Status }
              ]
          }
        ]
  })
  .then(lista => { res.send(lista) })
  .catch(error => { res.send(error) })
}

exports.updateOne = (req, res) => {
  const {titulo, descricao, idUsuario, idCategoria} = req.body
  Lista.update({titulo, descricao, idUsuario, idCategoria}, 
                 {where: { id:req.params.id}})
    .then(lista => { res.send(lista) })
    .catch(error => { res.send(error) })
} 

exports.deleteOne = (req, res) => {
  Lista.destroy( {where: { id:req.params.id}} )
    .then(lista => { 
      res.json({
        message: "Lista deletada com sucesso",
        data: lista
      })
    })
    .catch(error => { res.send(error) })
}
