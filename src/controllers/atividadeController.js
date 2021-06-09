const Lista = require('../models').Lista
const Categoria = require('../models').Categoria
const Usuario = require('../models').Usuario
const Atividade = require('../models').Atividade
const Status = require('../models').Status
const AtividadeUsuario = require('../models').AtividadeUsuario

exports.createOne = (req, res) => {
  console.log(Atividade)
  const {descricao, dataPrevista, dataExecucao, idUsuario, idLista, idStatus} = req.body
  Atividade.create({descricao, dataPrevista, dataExecucao, idUsuario, idLista, idStatus})
    .then(atividade => { res.send(atividade) })
    .catch(error => { res.send(error) 
              console.log(error) })
}

exports.listAll = (req, res) => {
   Atividade.findAll()
    .then(atividade => { res.send(atividade) } )
    .catch(error => { 
      res.send(error)
      console.log(error);
       })     
}

exports.listOne = (req, res) => {
  Atividade.findAll({
    where: { id:req.params.id},
      include: [
            { model: Status },
            {
                model: Lista,
                include: [
                {model:Usuario},
                {model:Categoria}
            ]},
            {model:AtividadeUsuario,
            include:[
                {model:Usuario}
            ]}
      ]
  })
  .then(atividade => { res.send(atividade) })
  .catch(error => { res.send(error) })
}

exports.updateOne = (req, res) => {
  const {descricao, dataPrevista, dataExecucao, idUsuario, idLista, idStatus} = req.body
  Atividade.update({descricao, dataPrevista, dataExecucao, idUsuario, idLista, idStatus}, 
                 {where: { id:req.params.id}})
    .then(atividade => { res.send(atividade) })
    .catch(error => { res.send(error) })
} 

exports.deleteOne = (req, res) => {
  Atividade.destroy( {where: { id:req.params.id}} )
    .then(atividade => { 
      res.json({
        message: "Atividade deletada com sucesso",
        data: atividade
      })
    })
    .catch(error => { res.send(error) })
}

