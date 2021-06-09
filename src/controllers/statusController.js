const Status = require('../models').Status

exports.listAll = (req, res) => {
   Status.findAll()
    .then(status => { res.send(status) } )
    .catch(error => { res.send(error) })        
}

exports.listOne = (req, res) => {
  Status.findAll({where: { id:req.params.id}})
    .then(status => { res.send(status) })
    .catch(error => { res.send(error) })
}

exports.createOne = (req, res) => {
  console.log(Status)
  const {descricao} = req.body
  Status.create({descricao})
    .then(status => { res.send(status) })
    .catch(error => { res.send(error) })
}

exports.updateOne = (req, res) => {
  const {descricao} = req.body
  Status.update({descricao}, 
                 {where: { id:req.params.id}})
    .then(status => { res.send(status) })
    .catch(error => { res.send(error) })
} 

exports.deleteOne = (req, res) => {
  Status.destroy( {where: { id:req.params.id}} )
    .then(status => { 
      res.json({
        message: "Status deletado com sucesso",
        data: status
      })
    })
    .catch(error => { res.send(error) })
}