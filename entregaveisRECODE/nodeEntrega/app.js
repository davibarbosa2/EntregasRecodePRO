const express = require('express')
const app = express()

const connect = require('./bd/connect')
app.use(express.json())

app.get('/postagem', (req,res) => {
    connect.query("SELECT * from post", (error, result) =>{
        res.json(result);
    });
});

app.post('/postagem', (req,res) => {
    let dados = []

    dados.push({
        titlepost: req.body.titlepost,
        categoria: req.body.categoria
    })
    connect.query("INSERT into post SET ?", dados, () =>{
        dados = [];
        res.json({mensagem: "Dados enviados !"})
    })
})

app.listen(3333, () =>{
    console.log("Servidor Online")
})