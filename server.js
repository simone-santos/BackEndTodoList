// Importando o express usando o padão requere ou ao invés o import
// padão requere: requere(<nome_pacote_para_importar>)


// Criando uma instancia do express
const express = require('express')

// impotando o body-parser
const bodyParser = require('body-parser')

// A constante app representar a aplicação
// Está sendo chamado o construtor que vai iniciar um projeto do tipo express
const app = express()
/* Configurando como express (app) deve usar o body-parser
*  Configurando para usar a biblioteca qs (true),que permite aninhamento de objetos */
app.use(bodyParser.urlencoded( { extended:true }))

// Configura para converter o conteúdo da requisição no formato JSON
app.use(bodyParser.json())

//Defindo as rotas
const padraoRoute = require('./src/routes/padraoRoute')
const usuarioRoute = require('./src/routes/usuarioRoute')
const statusRoute = require('./src/routes/statusRoute')
const categoriaRoute = require('./src/routes/categoriaRoute')
const listaRoute = require('./src/routes/listaRoute')
const atividadeRoute = require('./src/routes/atividadeRoute')


padraoRoute(app)
usuarioRoute(app)
statusRoute(app)
categoriaRoute(app)
listaRoute(app)
atividadeRoute(app)

const port = process.env.PORT || 3001

// Passando a uma porta que vai escutar a aplicação
app.listen(port)

// para mostrat que o servidor está rodando
console.log('Servidor funcionando na porta', port)