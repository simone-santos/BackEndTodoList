module.exports = function (app) {

app.route('/')
    .get((req, res) => {
    	res.send('Bem vindo a API TodoList')
    })
	
 
}